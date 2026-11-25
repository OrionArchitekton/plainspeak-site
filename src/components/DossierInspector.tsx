import { useState } from 'preact/hooks';

type ViewFilter = 'all' | 'high' | 'questions' | 'summary';

interface DossierLine {
  id: string;
  group: 'summary' | 'high' | 'medium' | 'low' | 'questions' | 'notice';
  badge?: string;
  text: string;
}

const DOSSIER_LINES: DossierLine[] = [
  {
    id: 'sum-1',
    group: 'summary',
    badge: 'PLAIN',
    text: 'This is a rental contract between you (the tenant) and a landlord.',
  },
  {
    id: 'sum-2',
    group: 'summary',
    badge: 'PLAIN',
    text: 'You pay $2,400 a month; if it arrives after the 3rd you owe $150 more.',
  },
  {
    id: 'high-1',
    group: 'high',
    badge: 'HIGH',
    text: '$4,800 deposit is non-refundable if you leave before 12 months.',
  },
  {
    id: 'high-2',
    group: 'high',
    badge: 'HIGH',
    text: 'The lease auto-renews unless you give 60 days written notice.',
  },
  {
    id: 'med-1',
    group: 'medium',
    badge: 'MED',
    text: 'Rent can rise up to 12% at renewal on only 30 days notice.',
  },
  {
    id: 'low-1',
    group: 'low',
    badge: 'LOW',
    text: 'Landlord may enter with 24 hours notice; terms unspecified.',
  },
  {
    id: 'q-1',
    group: 'questions',
    badge: 'ASK',
    text: 'Under what circumstances can I get any of the $4,800 deposit back?',
  },
  {
    id: 'q-2',
    group: 'questions',
    badge: 'ASK',
    text: 'What exactly counts as written notice for the 60-day cancellation?',
  },
  {
    id: 'notice-1',
    group: 'notice',
    badge: 'NOTE',
    text: 'Not legal, medical, or financial advice.',
  },
];

const FILTERS: Array<{ id: ViewFilter; label: string }> = [
  { id: 'all', label: 'Full Dossier (9)' },
  { id: 'high', label: 'High Risk Traps (2)' },
  { id: 'questions', label: 'Questions to Ask (2)' },
  { id: 'summary', label: 'Plain Summary (2)' },
];

function badgeStyle(group: DossierLine['group']): string {
  if (group === 'high') return 'border-[#F87171] bg-[#112154] text-[#F87171]';
  if (group === 'medium') return 'border-[#FBBF24] bg-[#112154] text-[#FBBF24]';
  if (group === 'questions') return 'border-[#4ADE80] bg-[#112154] text-[#4ADE80]';
  if (group === 'summary') return 'border-[#F0975A] bg-[#112154] text-[#F0975A]';
  return 'border-[#64748B] bg-[#112154] text-[#CBD5E1]';
}

export default function DossierInspector() {
  const [filter, setFilter] = useState<ViewFilter>('all');

  const visible = DOSSIER_LINES.filter((line) => {
    if (filter === 'all') return true;
    if (filter === 'high') return line.group === 'high';
    if (filter === 'questions') return line.group === 'questions';
    return line.group === 'summary' || line.group === 'notice';
  });

  return (
    <div className="rounded-lg border border-[#334155] bg-[#0A1538] p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#334155] pb-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#F0975A]">
            Interactive Island · Frozen Claude Output
          </p>
          <p className="mt-1 font-mono text-xs text-[#94A3B8]">
            claude-sonnet-4-6 · temperature 0 · sample lease (tenant view)
          </p>
        </div>

        <div className="flex flex-wrap gap-2" role="group" aria-label="Dossier slice filter">
          {FILTERS.map((item) => {
            const active = item.id === filter;
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(item.id)}
                className={
                  active
                    ? 'inline-flex min-h-[44px] items-center rounded border border-[#E68249] bg-[#E68249] px-3 py-1.5 font-mono text-xs font-semibold text-[#020B29] cursor-pointer'
                    : 'inline-flex min-h-[44px] items-center rounded border border-[#64748B] bg-[#112154] px-3 py-1.5 font-mono text-xs text-[#F8FAFC] transition-colors hover:border-[#F0975A] hover:text-[#FFC08B] cursor-pointer'
                }
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      <ul className="mt-4 space-y-2.5">
        {visible.map((line) => (
          <li
            key={line.id}
            className="flex flex-col gap-2 rounded-md border border-[#1E293B] bg-[#050C24] p-3.5 sm:flex-row sm:items-center sm:gap-4"
          >
            <span
              className={`inline-block w-16 shrink-0 rounded border px-2 py-0.5 text-center font-mono text-[11px] font-semibold ${badgeStyle(line.group)}`}
            >
              {line.badge}
            </span>
            <span className="font-mono text-[13px] leading-relaxed text-[#E2E8F0]">
              {line.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
