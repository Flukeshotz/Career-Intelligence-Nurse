/**
 * nursing/page.tsx — Server Component
 *
 * Renders the high-speed, interactive NursingGateway with clean design hierarchy.
 */

import NursingGateway from './NursingGateway';

export default function NursingPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--sc-surface)' }}>
      <NursingGateway />
    </div>
  );
}
