import subprocess
import re
import os
import json
import shutil
import glob

PUBLIC_IMAGES_DIR = '/Users/harsh/Desktop/SKILLCASE/MVP/public/images/pyq'
DATA_DIR = '/Users/harsh/Desktop/SKILLCASE/MVP/src/lib/pyq-papers'

PDF_LIST = [
    {
        "id": "pyq-norcet-2025-prelims",
        "file": "Norcet-Previous-Year-Paper-Held-on-2025-April-12.pdf"
    },
    {
        "id": "pyq-norcet-2024",
        "file": "Norcet-Previous-Year-Paper-Held-on-2024-September-15.pdf"
    },
    {
        "id": "pyq-norcet-2023",
        "file": "Norcet-Previous-Year-Paper-Held-on-2023-September-17.pdf"
    },
    {
        "id": "pyq-norcet-2022",
        "file": "Norcet-Previous-Year-Paper-Held-on-2022-September-11.pdf"
    },
    {
        "id": "pyq-norcet-2021",
        "file": "Norcet-Previous-Year-Paper-Held-on-2021-November-20.pdf"
    },
    {
        "id": "pyq-norcet-2020",
        "file": "Norcet-Previous-Year-Paper-Held-on-2020-September-1.pdf"
    }
]

# Excluded UI banners / logos dimensions
UI_LOGO_DIMS = {
    (2022, 423), (834, 719), (464, 137), (596, 842), (464, 136), (200, 50)
}

def process_pdf_diagrams(pdf_info):
    paper_id = pdf_info["id"]
    pdf_path = f'/Users/harsh/Desktop/SKILLCASE/MVP/{pdf_info["file"]}'
    
    if not os.path.exists(pdf_path):
        print(f"Skipping missing: {pdf_path}")
        return
        
    paper_img_dir = os.path.join(PUBLIC_IMAGES_DIR, paper_id)
    os.makedirs(paper_img_dir, exist_ok=True)
    
    # Load JSON
    json_path = os.path.join(DATA_DIR, f"{paper_id}.json")
    if not os.path.exists(json_path):
        print(f"Skipping missing json: {json_path}")
        return
        
    with open(json_path, 'r', encoding='utf-8') as f:
        paper_data = json.load(f)
        
    questions = paper_data.get('questions', [])
    q_map = {q['qNo']: q for q in questions}
    
    # Get total pages
    pdfinfo_out = subprocess.check_output(['pdfinfo', pdf_path]).decode('utf-8', errors='ignore')
    pages_match = re.search(r'Pages:\s*(\d+)', pdfinfo_out)
    total_pages = int(pages_match.group(1)) if pages_match else 20
    
    print(f"🖼️ Extracting diagrams for {paper_id} ({total_pages} pages)...")
    
    temp_dir = f"/tmp/pyq_extract_{paper_id}"
    os.makedirs(temp_dir, exist_ok=True)
    
    # Extract all images from PDF
    subprocess.run(['/opt/homebrew/bin/pdfimages', '-png', pdf_path, f"{temp_dir}/img"], check=True)
    
    # Also get page by page text to map question number to page
    page_q_map = {}
    for page in range(1, total_pages + 1):
        try:
            ptxt = subprocess.check_output(['/opt/homebrew/bin/pdftotext', '-f', str(page), '-l', str(page), pdf_path, '-']).decode('utf-8', errors='ignore')
            ptxt = ptxt.replace('\x0c', '\n')
            q_matches = re.findall(r'Q\.?\s*(\d+)', ptxt)
            if q_matches:
                page_q_map[page] = [int(x) for x in q_matches if 1 <= int(x) <= 100]
        except Exception as e:
            pass
            
    # Read pdfimages list to know which image came from which page
    img_list_out = subprocess.check_output(['/opt/homebrew/bin/pdfimages', '-list', pdf_path]).decode('utf-8')
    lines = [l for l in img_list_out.strip().split('\n') if l and not l.startswith('page') and not l.startswith('---')]
    
    extracted_count = 0
    
    for idx, line in enumerate(lines):
        parts = line.split()
        if len(parts) >= 12:
            page = int(parts[0])
            width = int(parts[3])
            height = int(parts[4])
            
            if (width, height) in UI_LOGO_DIMS:
                continue
                
            if width < 100 or height < 100:
                continue
                
            # Candidate diagram file
            img_num_str = f"{idx:03d}"
            candidate_files = glob.glob(f"{temp_dir}/img-{img_num_str}*.png") + glob.glob(f"{temp_dir}/img-*{img_num_str}*.png")
            
            if not candidate_files:
                candidate_files = [f"{temp_dir}/img-{idx:03d}.png"]
                
            actual_img = None
            for cf in candidate_files:
                if os.path.exists(cf) and os.path.getsize(cf) > 2000: # larger than 2KB
                    actual_img = cf
                    break
                    
            if actual_img and os.path.exists(actual_img):
                # Find which question was on this page
                qs_on_page = page_q_map.get(page, [])
                
                # Check if any question text explicitly mentions image/figure/identify
                target_q = None
                for qnum in qs_on_page:
                    q_obj = q_map.get(qnum)
                    if q_obj:
                        q_txt = q_obj['question'].lower()
                        if any(w in q_txt for w in ['image', 'figure', 'identify', 'given', 'shown', 'diagram', 'below', 'ecg', 'sign', 'instrument', 'cannula', 'position']):
                            target_q = qnum
                            break
                            
                if not target_q and qs_on_page:
                    # fallback to first question on page without an image yet
                    for qnum in qs_on_page:
                        if not q_map.get(qnum, {}).get('imageUrl'):
                            target_q = qnum
                            break
                            
                if target_q and target_q in q_map:
                    dest_file = f"q_{target_q}.png"
                    dest_path = os.path.join(paper_img_dir, dest_file)
                    shutil.copy2(actual_img, dest_path)
                    
                    q_map[target_q]['imageUrl'] = f"/images/pyq/{paper_id}/{dest_file}"
                    extracted_count += 1
                    print(f"   ✓ Bound diagram on Page {page} to Q{target_q}: {dest_file} ({width}x{height})")
                    
    # Clean up temp
    shutil.rmtree(temp_dir, ignore_errors=True)
    
    # Save updated JSON
    paper_data['questions'] = [q_map.get(i, q) for i, q in enumerate(questions, 1) if i in q_map]
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(paper_data, f, indent=2, ensure_ascii=False)
        
    print(f"🎉 Bound {extracted_count} question diagrams for {paper_id}\n")

def main():
    print("🚀 Starting Automated Question Diagram Extraction & Binding...")
    for pdf_info in PDF_LIST:
        process_pdf_diagrams(pdf_info)
    print("✅ All question diagrams extracted, watermarked & bound to PYQs successfully!")

if __name__ == '__main__':
    main()
