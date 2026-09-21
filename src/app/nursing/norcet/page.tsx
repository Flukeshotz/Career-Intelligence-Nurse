import { redirect } from 'next/navigation';

// The old hand-written NORCET hub carried unverified figures. The checked page is the exam record.
export default function NorcetRedirect() {
  redirect('/nursing/exams/aiims-new-delhi-central-government-hospitals-norcet-2026-nursing-officer-recruitment-common-eligibility-test');
}
