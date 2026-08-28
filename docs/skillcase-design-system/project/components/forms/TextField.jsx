import React from 'react';

/* Text field — the app's own input, finally extracted. Phase 8.

   Production writes this markup inline on every screen that needs a field,
   never as a component, but it writes it CONSISTENTLY — which is what makes
   this an extraction rather than an invention:

     w-full px-3.5 py-2.5 bg-white border border-zinc-300 rounded-lg
     text-xs text-slate-800 focus:outline-none focus:ring-2
     focus:ring-blue-600 focus:border-transparent transition-all

   Read from ExamReadingWorkspace, ExamListeningWorkspace, VideoReader,
   NewsArticleReader, SupportWidget and CallEndedScreen. Six surfaces, same
   nine classes.

   Focus: this is the ONE control class production already handles correctly,
   so it keeps its shipped `ring-2 ring-blue-600` rather than adopting the
   design system's dual ring. Overriding a working treatment to satisfy
   symmetry would be a regression. See D-029.

   `multiline` renders the textarea variant used by the writing workspaces
   (`flex-1 w-full text-xs leading-5 text-slate-800 bg-transparent border-0
   resize-none`), which is borderless because it sits inside its own card. */
const RING = '0 0 0 2px #2563eb';

export function TextField({
  label,
  value = '',
  placeholder = '',
  hint,
  error,
  multiline = false,
  rows = 6,
  disabled = false,
  required = false,
  id,
  onChange,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const rid = React.useRef('tf-' + Math.random().toString(36).slice(2, 8));
  const fid = id || rid.current;
  const describedBy = error ? fid + '-err' : hint ? fid + '-hint' : undefined;
  const shared = {
    id: fid,
    value,
    placeholder,
    disabled,
    required,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': describedBy,
    onChange,
    onFocus: (e) => { if (e.target.matches(':focus-visible')) setFocus(true); },
    onBlur: () => setFocus(false),
  };
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label ? (
        <label htmlFor={fid} style={{ fontSize: 12, fontWeight: 600, color: 'var(--ui-text-secondary)' }}>
          {label}{required ? <span aria-hidden="true" style={{ color: 'var(--ui-danger-fg)' }}> *</span> : null}
        </label>
      ) : null}
      {multiline ? (
        <div style={{
          width: '100%', background: 'var(--ui-surface-card)', borderRadius: 8,
          border: '1px solid ' + (error ? 'var(--ui-danger-fg)' : 'var(--ui-border-muted)'),
          padding: '10px 14px', boxShadow: focus ? RING : 'none',
          opacity: disabled ? 0.6 : 1, boxSizing: 'border-box',
        }}>
          <textarea {...shared} {...rest} rows={rows} style={{
            width: '100%', font: 'inherit', fontSize: 12, lineHeight: '20px',
            color: 'var(--ui-text-body-alt)', background: 'transparent',
            border: 0, outline: 'none', resize: 'none', display: 'block',
          }} />
        </div>
      ) : (
        <input {...shared} {...rest} type="text" style={{
          width: '100%', minHeight: 'var(--ui-target-min)', padding: '10px 14px',
          font: 'inherit', fontSize: 12, color: 'var(--ui-text-body-alt)',
          background: 'var(--ui-surface-card)', borderRadius: 8,
          border: '1px solid ' + (error ? 'var(--ui-danger-fg)' : 'var(--ui-border-muted)'),
          outline: 'none', boxShadow: focus ? RING : 'none',
          opacity: disabled ? 0.6 : 1, transition: 'box-shadow .15s, border-color .15s',
          boxSizing: 'border-box',
        }} />
      )}
      {error ? (
        <span id={fid + '-err'} style={{ fontSize: 11, color: 'var(--ui-danger-ink)' }}>{error}</span>
      ) : hint ? (
        <span id={fid + '-hint'} style={{ fontSize: 11, color: 'var(--ui-text-muted)' }}>{hint}</span>
      ) : null}
    </div>
  );
}

export default TextField;
