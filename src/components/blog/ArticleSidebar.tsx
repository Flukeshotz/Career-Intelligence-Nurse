'use client';

import { useEffect, useState } from 'react';
import { FileText } from 'lucide-react';

export interface TocItem {
  id: string;
  label: string;
}

export interface SidebarDownload {
  title: string;
  body: string;
  buttonLabel: string;
  href: string;
  /** Set to make the button download a file (e.g. the .ics calendar) instead of navigating. */
  fileName?: string;
}

/** Sticky "On this page" list with scroll-spy, and the yellow download card beneath it. */
export function ArticleSidebar({ items, download }: { items: TocItem[]; download?: SidebarDownload }) {
  const [activeId, setActiveId] = useState(items[0]?.id);

  // Keep the active chip visible in the phone chip row.
  useEffect(() => {
    document.querySelector(`.blog-chips a[href="#${activeId}"]`)?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  }, [activeId]);

  useEffect(() => {
    const sections = items.map((i) => document.getElementById(i.id)).filter((el): el is HTMLElement => !!el);
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-100px 0px -65% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
    <nav aria-label="Sections" className="blog-chips">
      {items.map((item) => (
        <a key={item.id} href={`#${item.id}`} className={item.id === activeId ? 'active' : undefined}>
          {item.label}
        </a>
      ))}
    </nav>
    <aside className="blog-aside">
      <nav aria-label="On this page" className="blog-toc">
        <h4>On this page</h4>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className={item.id === activeId ? 'active' : undefined} aria-current={item.id === activeId ? 'location' : undefined}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {download && (
        <div className="blog-dl">
          <div className="blog-dl-top">
            <div className="blog-dl-ico">
              <FileText size={26} />
            </div>
            <div>
              <b>{download.title}</b>
              <p>{download.body}</p>
            </div>
          </div>
          <a href={download.href} {...(download.fileName ? { download: download.fileName } : {})}>
            {download.buttonLabel}
          </a>
        </div>
      )}
    </aside>
    </>
  );
}
