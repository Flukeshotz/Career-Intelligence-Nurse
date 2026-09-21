import re

file_path = '/Users/harsh/Desktop/SKILLCASE/MVP/src/lib/pyq-mock-data.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace any totalQuestions: \d+ with totalQuestions: 100
updated_content = re.sub(r'totalQuestions:\s*\d+', 'totalQuestions: 100', content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(updated_content)

print("✅ Updated all papers in pyq-mock-data.ts to totalQuestions: 100")
