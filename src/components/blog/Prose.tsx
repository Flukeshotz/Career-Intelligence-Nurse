import { Fragment } from 'react';

/** Renders paragraphs, turning **text** into <strong> so key figures stand out. No other markup. */
export function Prose({ paras }: { paras: string[] }) {
  return (
    <>
      {paras.map((p, i) => (
        <p key={i}>
          {p.split(/(\*\*[^*]+\*\*)/g).map((part, j) =>
            part.startsWith('**') && part.endsWith('**') ? <strong key={j}>{part.slice(2, -2)}</strong> : <Fragment key={j}>{part}</Fragment>
          )}
        </p>
      ))}
    </>
  );
}
