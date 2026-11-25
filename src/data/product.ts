import type { ProductData } from '../../types';

const GITHUB = 'https://github.com/OrionArchitekton/plainspeak';
const VIDEO = 'https://youtu.be/EbHJ4gQpNS8';
const LIVE = 'https://plainspeak-nine.vercel.app';

export const PRODUCT_DATA: ProductData = {
  name: 'Plainspeak',
  tagline: 'AI that reads the fine print for you.',
  credibility:
    'Open source (MIT) · TypeScript · 11 core-logic unit tests, all green · FutureAI Global Hackathon 2026.',
  canonical: 'https://www.danmercede.com/works/plainspeak/',
  metaDescription:
    'Paste any dense document and get it in plain words, the clauses that affect you ranked high, medium, or low, and the exact questions to ask before you sign. MIT. FutureAI Global Hackathon 2026.',

  problem: {
    heading: 'The problem',
    body:
      'People sign leases, accept medical plans, and agree to terms of service they do not actually understand, because the language is built to be understood by the party that wrote it, not the person it affects. The comprehension gap is where the traps live: the non-refundable deposit, the auto-renewal, the clause that quietly makes you liable. Plainspeak is explicitly not legal, medical, or financial advice; it helps a person understand a document so they can ask the right questions before they agree.',
  },

  whatItDoes: {
    heading: 'What Plainspeak does',
    body:
      'Paste a document (a lease, a medical letter, a terms of service, a government form) and optionally say who you are. Plainspeak returns three things: the document in plain words at the reading level you pick (Like I am 10, Plain English, or Full detail), the specific clauses that affect you each flagged high, medium, or low so the traps surface first, and the exact questions to put to the landlord, clinician, or company before you agree. Three one-click examples (lease, medical letter, terms of service) are built in so anyone can see it work in seconds.',
  },

  cta: {
    primaryLabel: 'View on GitHub',
    primaryUrl: GITHUB,
    secondaryLabel: 'Watch the demo',
    secondaryUrl: VIDEO,
  },

  quickstart: {
    heading: 'Quickstart',
    intro:
      'The core prompt-building and parsing logic is pure and unit-tested, so the tests run with no API key and no network. Node and pnpm; add an ANTHROPIC_API_KEY only when you want to run the live app.',
    blocks: [
      {
        title: 'Clone and install',
        command: [
          'git clone https://github.com/OrionArchitekton/plainspeak',
          'cd plainspeak',
          'pnpm install',
        ].join('\n'),
      },
      {
        title: 'Add your key',
        note: 'Copy the example env, then add your ANTHROPIC_API_KEY.',
        command: 'cp .env.example .env.local',
      },
      {
        title: 'Run the core-logic tests (no key needed)',
        command: 'pnpm test',
      },
      {
        title: 'Start the app',
        note: 'Serves the paste, explain, and ask-questions UI.',
        command: 'pnpm dev   # http://localhost:3000',
      },
    ],
  },

  commands: [
    {
      name: 'pnpm dev',
      description:
        'Next.js 15 App Router dev server at localhost:3000: paste a document, pick a reading level, and get the plain-words explanation, the clauses that affect you, and the questions to ask.',
    },
    {
      name: 'pnpm test',
      description:
        '11 Vitest unit tests over the pure prompt-building and defensive-parsing logic (lib/explain.test.ts). No network and no API key needed.',
    },
    {
      name: 'pnpm build',
      description:
        'Production Next.js build. The Claude call runs server-side from a route handler so the API key is never exposed to the browser.',
    },
    {
      name: 'pnpm start',
      description:
        'Serves the production build. Optional Upstash Redis rate limiting caps each client to 6 explanations per minute when configured; absent it, the API runs unthrottled.',
    },
  ],

  demo: {
    heading: 'Frozen Claude Dossier Sample',
    intro:
      'A real, frozen Claude response to a sample lease (claude-sonnet-4-6, temperature 0), shipped as the recorded walkthrough. Paste a lease, say you are the tenant, and the deposit trap surfaces first.',
    lines: [
      { kind: 'comment', text: '# 1. Paste a dense document and say who you are' },
      { kind: 'output', text: 'Document: LEASE AGREEMENT (rent, deposit, renewal, repairs)', tone: 'muted' },
      { kind: 'output', text: '' },
      { kind: 'comment', text: '# 2. In plain words, at the reading level you pick' },
      { kind: 'output', text: 'This is a rental contract between you (the tenant) and a landlord.' },
      { kind: 'output', text: 'You pay $2,400 a month; if it arrives after the 3rd you owe $150 more.', tone: 'muted' },
      { kind: 'output', text: '' },
      { kind: 'comment', text: '# 3. What affects you, ranked so the traps surface first' },
      { kind: 'output', text: '[HIGH] $4,800 deposit is non-refundable if you leave before 12 months.', tone: 'fail' },
      { kind: 'output', text: '[HIGH] The lease auto-renews unless you give 60 days written notice.', tone: 'fail' },
      { kind: 'output', text: '[MED]  Rent can rise up to 12% at renewal on only 30 days notice.', tone: 'muted' },
      { kind: 'output', text: '[LOW]  Landlord may enter with 24 hours notice; terms unspecified.', tone: 'muted' },
      { kind: 'output', text: '' },
      { kind: 'comment', text: '# 4. The exact questions to ask before you sign' },
      { kind: 'output', text: 'Q: Under what circumstances can I get any of the $4,800 deposit back?' },
      { kind: 'output', text: 'Q: What exactly counts as written notice for the 60-day cancellation?' },
      { kind: 'output', text: '' },
      { kind: 'output', text: 'Not legal, medical, or financial advice.', tone: 'muted' },
    ],
  },

  differentiators: {
    heading: 'Why it is different',
    points: [
      {
        title: 'Written for the reader, not the drafter',
        body:
          'Most explainers summarize a document in the abstract. Plainspeak takes who you are as input and answers the only question that matters to you: which clauses affect me, and how badly. The output is ranked high, medium, or low so the deposit trap and the auto-renewal show up before the boilerplate.',
      },
      {
        title: 'A strict JSON contract, defensively parsed',
        body:
          'The core is a single structured call to Claude with a fixed JSON output contract. The reply is parsed defensively in lib/explain.ts, so code-fenced or slightly malformed JSON still yields a clean result, and an out-of-range severity is coerced to a safe value rather than crashing the UI.',
      },
      {
        title: 'Honest about its limits',
        body:
          'Plainspeak helps a person understand a document. It is explicitly not legal, medical, or financial advice, and it says so in the UI and inside the model guardrail. It does not store your documents; each request is processed, returned, and discarded, nothing is persisted.',
      },
      {
        title: 'Testable without a key',
        body:
          'The prompt-building and parsing logic is pure, so 11 unit tests run with no network and no API key. The one place that touches Claude is a server-side route handler, keeping the key out of the browser and the risky part small and reviewable.',
      },
    ],
  },

  links: [
    { label: 'GitHub repository', url: GITHUB, primary: true },
    { label: 'Demo video', url: VIDEO, primary: true },
    { label: 'Try it live', url: LIVE, primary: true },
    { label: 'Dan Mercede', url: 'https://www.danmercede.com' },
  ],

  footerNote:
    'MIT licensed. Built by Dan Mercede for the FutureAI Global Hackathon 2026. Not legal, medical, or financial advice.',
};

export const PROOF_LEDGER_METRICS = [
  {
    label: 'Core Unit Tests',
    value: '11 / 11',
    detail: 'Pure Vitest checks in lib/explain.test.ts with zero API key or network.',
  },
  {
    label: 'Clause Triage Tiers',
    value: 'High / Med / Low',
    detail: 'Ranks deposit traps and auto-renewals ahead of routine boilerplate.',
  },
  {
    label: 'Document Persistence',
    value: '0 Bytes',
    detail: 'Processed server-side per request, returned, and immediately discarded.',
  },
  {
    label: 'JSON Output Contract',
    value: '1 Structured Call',
    detail: 'Defensive parser recovers fenced JSON and clamps invalid severity values.',
  },
];
