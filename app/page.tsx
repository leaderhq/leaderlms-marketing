import type { Metadata } from 'next';
import Link from 'next/link';
import { SuiteBar, SiteNav, SiteFooter, FadeIn, TypewriterHeadline } from '@leader/marketing-ui';
import { LmsCourseMock } from './_marketing/mocks';
import { MarketingIcon, type MarketingIconName } from './_marketing/icons';

const SITE_URL = 'https://leaderlms.io';
const APP_URL = 'https://lms.leaderhq.io';

const LMS_PHRASES = [
  'certified.',
  'complete.',
  'tracked.',
  'bilingual.',
  'quiz-verified.',
  'ready on day one.',
] as const;

const NAV_LINKS = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'For Teams', href: '/for-teams' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
];

const FOOTER_COLUMNS = [
  {
    heading: 'Product',
    links: [
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'For Teams', href: '/for-teams' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'System Status', href: 'https://leaderhq.io/status', external: true },
    ],
  },
  {
    heading: 'Solutions',
    links: [
      { label: 'Sales Teams', href: '/for-teams' },
      { label: 'Field Leaders', href: '/for-teams' },
      { label: 'Network Marketing', href: '/for-teams' },
      { label: 'Blog & Resources', href: '/blog' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About LeaderHQ', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Security & GDPR', href: '/security' },
    ],
  },
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'LeaderLMS — Professional Training for Network Marketing Teams',
  description:
    'Stop running your team trainings in a Facebook group. LeaderLMS gives your team 21+ certified trainings, bilingual support, quizzes, and completion certificates — ready on day one.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'LeaderLMS',
    title: 'The smarter way to train and grow your team.',
    description:
      'Stop running your team trainings in a Facebook group. LeaderLMS gives your team 21+ certified trainings, bilingual support, quizzes, and completion certificates — ready on day one.',
    url: SITE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The smarter way to train and grow your team.',
    description:
      'Stop running your team trainings in a Facebook group. LeaderLMS gives your team 21+ certified trainings, bilingual support, quizzes, and completion certificates — ready on day one.',
  },
};

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900">
      <SuiteBar appUrl={APP_URL} />
      <SiteNav
        productSuffix="LMS"
        links={NAV_LINKS}
        ctaLabel="Start Free Trial"
        ctaHref={`${APP_URL}/signup`}
        loginHref={`${APP_URL}/login`}
      />
      <main className="flex-1">
        <Hero />
        <TrustBand />
        <FeaturesGrid />
        <LibrarySection />
        <CompareSection />
        <PricingSection />
        <FinalCta />
      </main>
      <SiteFooter
        productSuffix="LMS"
        columns={FOOTER_COLUMNS}
      />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden style={{ background: 'radial-gradient(80% 520px at 50% -10%, color-mix(in srgb, #06163E 9%, transparent), transparent)' }} />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-8 md:px-6 lg:grid-cols-2 lg:gap-12 lg:pb-24 lg:pt-12">
        <FadeIn>
          <TypewriterHeadline
            staticPrefix="Your team's training,"
            phrases={LMS_PHRASES}
            className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]"
          />
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-600">
            Stop running your Silver Course through a Facebook group. LeaderLMS gives your entire team a professional learning hub — 21+ bilingual trainings, quizzes, and certificates — ready on day one.
          </p>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a href={`${APP_URL}/signup`} className="inline-flex min-h-[44px] w-full items-center justify-center rounded-xl bg-brand-green px-6 text-base font-semibold text-white shadow-md shadow-brand-green/25 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy sm:w-auto">
              Get Started Free
            </a>
            <Link href="/pricing" className="inline-flex min-h-[44px] items-center justify-center rounded-xl px-4 text-base font-semibold text-brand-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green">
              See all courses →
            </Link>
          </div>
          <p className="mt-5 text-sm text-zinc-500">
            Free to start. No credit card required.{' '}
            <strong className="font-semibold text-zinc-700">Professional training for network marketing teams.</strong>
          </p>
        </FadeIn>
        <FadeIn delay={120} className="flex justify-center lg:justify-end">
          <LmsCourseMock />
        </FadeIn>
      </div>
    </section>
  );
}

const STAT_ITEMS = [
  { value: '21+', label: 'trainings included' },
  { value: '2', label: 'languages (EN & ES)' },
  { value: '100%', label: 'quiz-verified' },
  { value: '∞', label: 'custom uploads' },
];

function TrustBand() {
  return (
    <section className="border-y border-zinc-100 bg-zinc-50/60">
      <div className="mx-auto max-w-5xl px-4 py-7 md:px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {STAT_ITEMS.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <span className="text-2xl font-black text-brand-navy">{s.value}</span>
              <span className="text-xs font-semibold text-zinc-400">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface Feature { title: string; body: string; icon: MarketingIconName; }

const FEATURES: Feature[] = [
  { title: 'English & Español.', body: 'Every training is available in both languages. Learners switch with one tap — no separate groups, no extra work on your end, ever.', icon: 'users' },
  { title: 'Quizzes after every video.', body: 'Auto-graded questions confirm comprehension before the next lesson unlocks. Stop re-explaining content to people who skipped ahead.', icon: 'check-circle' },
  { title: 'Certified completion.', body: 'Every learner earns an official certificate when they finish a course. Real proof. Something to share, something to be proud of, something to post.', icon: 'trophy' },
  { title: 'Add your own content.', body: 'Upload your own videos, PDFs, and custom training modules right alongside the included library. Your system, your content, your brand.', icon: 'share' },
  { title: '21+ trainings included.', body: 'A complete network-marketing training library is ready to assign the moment you open your account. Not a blank slate — a fully loaded platform from day one.', icon: 'clipboard' },
  { title: 'Works on any device.', body: 'Mobile-first design means your team trains on their phone, tablet, or laptop — at home, at a hotel, or in between calls at a conference.', icon: 'clock' },
];

function FeaturesGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-24">
      <FadeIn>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">Everything your team needs to train and certify.</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600">Bilingual, quiz-verified, and certificate-ready — built for the way network marketing teams actually learn.</p>
        </div>
      </FadeIn>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <FadeIn key={f.title} delay={i * 50} className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
              <MarketingIcon name={f.icon} size={24} />
            </div>
            <h3 className="mt-4 text-base font-bold text-brand-navy">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">{f.body}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

const LIBRARY_COURSES = [
  'Getting Started Fast',
  'Your Business Opportunity',
  'Recruiting & Inviting',
  'Handling Objections',
  'Social Media Strategy',
  'Building with Events',
  'Product Training',
  'Follow-Up Mastery',
  'Leadership Development',
  'Team Culture & Recognition',
  'Building Your Story',
  'Compliance & Ethics',
  'Closing & Commitment',
  'Time Management',
];

function LibrarySection() {
  return (
    <section className="relative overflow-hidden text-white" style={{ background: '#06163E' }}>
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-24 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-green">Loaded from day one</p>
          <h2 className="mt-4 text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem]">
            A complete library<br />from day one.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
            Not a blank slate. The moment you open your account, 21+ professional network-marketing trainings are ready to assign. Your team starts learning on day one — no setup required.
          </p>
          <p className="mt-6 border-l-2 border-brand-green pl-4 text-base font-medium text-zinc-200">
            Every course is bilingual, quiz-gated, and certificate-ready out of the box.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={`${APP_URL}/signup`} className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-5 text-sm font-semibold text-white shadow-md shadow-brand-green/25 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Get Started Free →
            </a>
          </div>
        </FadeIn>
        <FadeIn delay={120} className="mt-12 flex justify-center lg:mt-0 lg:justify-end">
          <div className="relative w-full max-w-[340px] space-y-2">
            {LIBRARY_COURSES.map((course, i) => (
              <div key={course} className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.10)' }}>
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold" style={{ background: '#5CAC2330', color: '#5CAC23', border: '1px solid #5CAC2350' }}>✓</span>
                <span className="text-sm font-medium text-zinc-100">{course}</span>
              </div>
            ))}
            <div className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold" style={{ background: '#1862EA30', color: '#1862EA', border: '1px solid #1862EA50' }}>+7</span>
              <span className="text-sm font-medium text-zinc-400">more trainings included</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

const COMPARE_ROWS = [
  'Completion tracking',
  'Bilingual (EN & ES)',
  'Quizzes after every lesson',
  'Completion certificates',
  '21+ included trainings',
  'Custom content uploads',
  'Clear learning path',
  'Professional & branded experience',
  'Scales with your team',
];

function CompareSection() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20 md:px-6 md:py-24">
      <FadeIn>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">Facebook Group vs. LeaderLMS</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600">You already know what training in a Facebook group feels like. Here&apos;s what it looks like side by side.</p>
        </div>
      </FadeIn>
      <div className="mt-12 overflow-hidden rounded-2xl border border-zinc-200 shadow-sm">
        {/* Header */}
        <div className="grid grid-cols-3 border-b border-zinc-200 bg-zinc-50">
          <div className="px-4 py-3 text-sm font-semibold text-zinc-400">Feature</div>
          <div className="border-x border-zinc-200 px-4 py-3 text-center text-sm font-semibold text-zinc-400">Facebook Group</div>
          <div className="px-4 py-3 text-center text-sm font-bold text-brand-navy">LeaderLMS</div>
        </div>
        {COMPARE_ROWS.map((row, i) => (
          <div key={row} className={`grid grid-cols-3 border-b border-zinc-100 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-zinc-50/40'}`}>
            <div className="px-4 py-3 text-sm font-medium text-zinc-700">{row}</div>
            <div className="flex items-center justify-center border-x border-zinc-100 px-4 py-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-50 text-xs font-bold text-red-400">✗</span>
            </div>
            <div className="flex items-center justify-center px-4 py-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-green/10 text-xs font-bold text-brand-green">✓</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


const TIERS = [
  {
    name: 'Starter', price: '$49', period: '/mo', description: 'For leaders getting their team started.',
    features: ['Up to 25 learners','21+ included trainings','English & Español','Quizzes after every video','Completion certificates','Learner progress dashboard'],
    cta: 'Get Started Free', href: `${APP_URL}/signup`, featured: false,
  },
  {
    name: 'Growth', price: '$99', period: '/mo', description: 'For growing teams ready to scale.',
    features: ['Up to 100 learners','Everything in Starter','Upload your own videos & PDFs','Custom training modules','Leader content library','Priority support'],
    cta: 'Get Started Free', href: `${APP_URL}/signup?plan=growth`, featured: true,
  },
  {
    name: 'Leader Pro', price: 'Custom', period: '', description: 'For large organizations at scale.',
    features: ['Unlimited learners','Everything in Growth','Unlimited learner seats','White-label branding','SSO & team management','Dedicated account manager'],
    cta: 'Contact us', href: '/contact', featured: false,
  },
];

function PricingSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-24">
      <FadeIn>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">Simple, transparent pricing.</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600">Start free. Scale up when your team is ready for more.</p>
        </div>
      </FadeIn>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {TIERS.map((tier, i) => (
          <FadeIn key={tier.name} delay={i * 80}>
            <div className={`relative flex flex-col rounded-2xl border p-8 shadow-sm h-full ${tier.featured ? 'border-brand-green shadow-brand-green/15 shadow-lg' : 'border-zinc-200 bg-white'}`} style={tier.featured ? { background: 'color-mix(in srgb, #5CAC23 5%, #fff)' } : {}}>
              {tier.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-brand-green px-4 py-1 text-xs font-bold text-white shadow">Most Popular</span>
                </div>
              )}
              <div>
                <p className="text-sm font-semibold text-zinc-500">{tier.name}</p>
                <div className="mt-2 flex items-end gap-2">
                  <span className="text-4xl font-black text-brand-navy">{tier.price}</span>
                  <span className="mb-1 text-sm text-zinc-400">{tier.period}</span>
                </div>
                <p className="mt-3 text-sm text-zinc-600">{tier.description}</p>
              </div>
              <ul className="mt-6 flex-1 space-y-2.5">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-zinc-700">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-green/15 text-[10px] font-bold text-brand-green">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href={tier.href} className={`mt-8 inline-flex min-h-[44px] items-center justify-center rounded-xl px-5 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 ${tier.featured ? 'bg-brand-green text-white shadow-md shadow-brand-green/25 hover:brightness-110 focus-visible:outline-brand-navy' : 'border border-zinc-200 bg-white text-brand-navy hover:bg-zinc-50 focus-visible:outline-brand-navy'}`}>{tier.cta}</a>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-brand-navy py-20 text-center text-white md:py-24">
      <FadeIn>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Your next rank advance starts<br />with trained leaders.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg text-zinc-300">
          Stop hoping they watched the video. Start knowing they passed the quiz.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a href={`${APP_URL}/signup`} className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-brand-green px-7 text-base font-semibold text-white shadow-lg shadow-brand-green/20 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            Get Started Free
          </a>
        </div>
        <p className="mt-5 text-sm text-zinc-400">Part of the Leader Suite.</p>
      </FadeIn>
    </section>
  );
}
