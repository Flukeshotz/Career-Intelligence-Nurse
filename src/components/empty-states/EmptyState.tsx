import Link from 'next/link';
import { Search, Compass, RefreshCw, Globe2, ArrowRight } from 'lucide-react';

export function FilterEmptyState({
  onClear,
  onResetFilters,
}: {
  onClear?: () => void;
  onResetFilters?: () => void;
}) {
  const handleReset = onResetFilters || onClear;

  return (
    <div className="sc-card" style={{ padding: '36px 20px', textAlign: 'center', margin: '20px 0' }}>
      <div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: 'var(--sc-yellow-50)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 14px',
        }}
      >
        <Search size={22} color="#92400e" />
      </div>
      <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--sc-navy-900)', marginBottom: '6px' }}>
        No matching opportunities found
      </h3>
      <p style={{ fontSize: '0.88rem', color: 'var(--sc-ink-600)', maxWidth: '420px', margin: '0 auto 16px', lineHeight: 1.5 }}>
        This specific filter combination is uncommon right now. Try widening your qualification or state filter to view open vacancies.
      </p>
      {handleReset ? (
        <button type="button" onClick={handleReset} className="btn-secondary" style={{ fontSize: '0.85rem' }}>
          Reset All Filters
        </button>
      ) : (
        <Link href="/nursing/jobs" className="btn-secondary" style={{ fontSize: '0.85rem' }}>
          View All Nursing Jobs
        </Link>
      )}
    </div>
  );
}

export function NoTrackedCyclesEmptyState() {
  return (
    <div className="sc-card" style={{ padding: '36px 20px', textAlign: 'center', margin: '16px 0' }}>
      <div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: 'var(--sc-navy-50)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 14px',
        }}
      >
        <RefreshCw size={24} color="var(--sc-navy-700)" />
      </div>
      <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--sc-navy-900)', marginBottom: '6px' }}>
        Track your live recruitment cycles
      </h3>
      <p style={{ fontSize: '0.88rem', color: 'var(--sc-ink-600)', maxWidth: '440px', margin: '0 auto 18px', lineHeight: 1.5 }}>
        When you apply for a job or exam, tap <strong>&quot;Track Opportunity&quot;</strong>. SkillCase will monitor every stage for you: admit card releases, exam dates, answer keys, and results.
      </p>
      <Link href="/nursing/jobs" className="btn-navy" style={{ fontSize: '0.88rem', display: 'inline-flex' }}>
        <Compass size={16} />
        <span>Browse Active Recruitments</span>
      </Link>
    </div>
  );
}

export function AbroadWaitlistModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0, 40, 86, 0.5)',
        backdropFilter: 'blur(4px)',
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="sc-card" style={{ maxWidth: '440px', width: '100%', padding: '24px', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
          <Globe2 size={22} color="var(--sc-navy-700)" />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>
            Overseas Nursing Pathways
          </h3>
        </div>
        <p style={{ fontSize: '0.86rem', color: 'var(--sc-ink-700)', lineHeight: 1.5, marginBottom: '18px' }}>
          We are currently validating direct hospital recruitment pipelines for Germany (B2 Fachsprache), UK (NMC OSCE), and Middle East (DHA/MOH).
        </p>
        <button
          type="button"
          onClick={onClose}
          className="btn-navy"
          style={{ width: '100%' }}
        >
          <span>Understood</span>
        </button>
      </div>
    </div>
  );
}
