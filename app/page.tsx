import type { Metadata } from 'next';
import Link from 'next/link';
import { SuiteBar, SiteNav, SiteFooter, FadeIn, TypewriterHeadline } from '@leader/marketing-ui';
import { LmsCourseMock } from './_marketing/mocks';
import { MarketingIcon, type MarketingIconName } from './_marketing/icons';

const SITE_URL = 'https://leaderlms.io';
const APP_URL = 'https://lms.leaderhq.io';

const LMS_PHRASES = [
  'field leaders.',
  'your whole team.',
  'new reps.',
  'your downline.',
  'top producers.',
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
  title: 'LeaderLMS — Training built for field leaders',
  description:
    'Onboard faster, train smarter, and duplicate your top leaders. LeaderLMS delivers courses, certifications, and compliance training built for network marketing and direct sales teams.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'LeaderLMS',
    title: 'LeaderLMS — Training built for field leaders.',
    description:
      'Onboard faster, train smarter, and duplicate your top leaders. Built for network marketing and direct sales teams.',
    url: SITE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LeaderLMS — Training built for field leaders.',
    description:
      'Onboard faster, train smarter, and duplicate your top leaders. Built for network marketing and direct sales teams.',
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
        <CourseBuilderSection />
        <HowItWorksSection />
        <IntegrationsSection />
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
            staticPrefix="Training built for"
            phrases={LMS_PHRASES}
            className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]"
          />
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-600">
            LeaderLMS turns your best leaders into a repeatable system. Build courses, certify your team, and onboard new reps in days — not weeks. Stop training from scratch. Start duplicating what works.
          </p>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a href={`${APP_URL}/signup`} className="inline-flex min-h-[44px] w-full items-center justify-center rounded-xl bg-brand-green px-6 text-base font-semibold text-white shadow-md shadow-brand-green/25 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy sm:w-auto">
              Start Free Trial
            </a>
            <Link href="/how-it-works" className="inline-flex min-h-[44px] items-center justify-center rounded-xl px-4 text-base font-semibold text-brand-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green">
              See How It Works →
            </Link>
          </div>
          <p className="mt-5 text-sm text-zinc-500">
            Free to start. No credit card required.{' '}
            <strong className="font-semibold text-zinc-700">Built for network marketing and direct sales teams.</strong>
          </p>
        </FadeIn>
        <FadeIn delay={120} className="flex justify-center lg:justify-end">
          <LmsCourseMock />
        </FadeIn>
      </div>
    </section>
  );
}

const TRUST_ORGS = ['Summit', 'Northwind', 'Apex', 'Vertex', 'Beacon'];

function TrustBand() {
  return (
    <section className="border-y border-zinc-100 bg-zinc-50/60">
      <div className="mx-auto max-w-5xl px-4 py-7 md:px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Trusted by</p>
          {TRUST_ORGS.map((org) => (
            <span key={org} className="text-sm font-bold tracking-wide text-zinc-400">{org}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

interface Feature { title: string; body: string; icon: MarketingIconName; }

const FEATURES: Feature[] = [
  { title: 'Course builder.', body: 'Build courses with video, text, quizzes, and downloads — in minutes. No design skills needed. If you can record a Zoom, you can build a course.', icon: 'clipboard' },
  { title: 'Fast Start tracks.', body: 'Drop new reps into a structured 30-day Fast Start the moment they join. They hit the ground running instead of asking you the same questions for weeks.', icon: 'target' },
  { title: 'Certifications.', body: 'Award certificates when reps complete a course or pass a quiz. Show your upline, your team, and your prospects that your people are trained and ready.', icon: 'trophy' },
  { title: 'Team progress tracking.', body: 'See exactly where every rep is in their training at a glance. Spot who is stuck, who has finished, and who has not even started.', icon: 'bar-chart' },
  { title: 'Quizzes & assessments.', body: 'Add knowledge checks to any lesson. Make sure your reps actually learned the material before they hit the field.', icon: 'check-circle' },
  { title: 'Compliance training.', body: 'Deliver required compliance modules and track completion with an audit trail. Stay on the right side of your company policies — automatically.', icon: 'link' },
  { title: 'Automated enrollment.', body: 'New reps get enrolled in their onboarding track the day they join. No manual setup, no chasing down who still needs access.', icon: 'bell' },
  { title: 'Video hosting included.', body: 'Upload your training videos directly — no separate Vimeo account, no YouTube links that get removed. Your content, hosted where you control it.', icon: 'share' },
  { title: 'Team leaderboard.', body: 'Gamify your training with a completion leaderboard. A little friendly competition goes a long way when your team can see who is leading the pack.', icon: 'users' },
  { title: 'Leader Suite SSO.', body: "One login across the whole suite. Your reps are already signed in through LeaderLeads or LeaderCal — LeaderLMS just works.", icon: 'building' },
  { title: 'Mobile-first.', body: 'Your reps learn from their phones, between events and on the road. Every course plays great on mobile — no app download required.', icon: 'clock' },
  { title: 'Drip scheduling.', body: 'Release lessons on a schedule — so new reps absorb training at the right pace instead of getting overwhelmed by a 40-module library on day one.', icon: 'calendar' },
];

function FeaturesGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-24">
      <FadeIn>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">Everything you need to train a winning team.</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600">Built for the way field leaders actually train — fast, mobile, and focused on duplication.</p>
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

function CourseBuilderSection() {
  return (
    <section className="relative overflow-hidden text-white" style={{ background: '#06163E' }}>
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-24 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-green">Built to duplicate your best leaders</p>
          <h2 className="mt-4 text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Your best rep.<br />Cloned into a course.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
            Stop relying on your top earner to personally train every new rep. Capture what they know in LeaderLMS — their scripts, their objection handling, their fast-start system — and deliver it automatically to every new team member from day one.
          </p>
          <p className="mt-6 border-l-2 border-brand-green pl-4 text-base font-medium text-zinc-200">
            The teams that scale fastest are the ones who stopped training individually and started training systematically.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={`${APP_URL}/signup`} className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-5 text-sm font-semibold text-white shadow-md shadow-brand-green/25 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Start free trial →
            </a>
            <Link href="/how-it-works" className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/20 px-5 text-sm font-semibold text-zinc-200 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              See how it works
            </Link>
          </div>
        </FadeIn>
        <FadeIn delay={120} className="mt-12 flex justify-center lg:mt-0 lg:justify-end">
          <div className="relative w-full max-w-[320px] space-y-4">
            {[
              { label: 'Fast Start: Your First 30 Days', pct: 100, status: 'Certified', color: '#5CAC23' },
              { label: 'Prospecting & Lead Capture', pct: 75, status: '75% complete', color: '#1862EA' },
              { label: 'Objection Handling', pct: 33, status: '33% complete', color: '#1862EA' },
              { label: 'Building Your Downline', pct: 0, status: 'Not started', color: '#d1d5db' },
            ].map((item) => (
              <div key={item.label} className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
                <div className="mb-2 flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-white">{item.label}</span>
                  <span className="shrink-0 text-xs font-medium" style={{ color: item.color }}>{item.status}</span>
                </div>
                <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.10)' }}>
                  <div className="h-full rounded-full" style={{ width: `${item.pct}%`, background: item.color }} />
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

const STEPS = [
  { step: '01', title: 'Build your course.', body: 'Record your training, upload your videos, add quizzes and downloads. LeaderLMS course builder takes minutes — no tech team needed.' },
  { step: '02', title: 'Enroll your team.', body: 'Add your reps and assign training tracks. New members can be enrolled automatically the day they join — no manual setup.' },
  { step: '03', title: 'They train. You track.', body: 'Your team works through the material on their own time, on any device. You see exactly who has finished, who is stuck, and who has not started.' },
  { step: '04', title: 'Certify and scale.', body: 'Award certifications when reps complete a track. Then duplicate the whole system to your next team — no rebuilding from scratch.' },
];

function HowItWorksSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-24">
      <FadeIn>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">Build once. Train everyone.</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600">Four steps from raw training content to a certified, field-ready team.</p>
        </div>
      </FadeIn>
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <FadeIn key={s.step} delay={i * 80} className="relative">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-navy text-base font-black text-brand-green">{s.step}</div>
            <h3 className="text-base font-bold text-brand-navy">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">{s.body}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

const INTEGRATIONS = ['LeaderLeads','LeaderTask','LeaderCal','LeaderSend','LeaderStreams','LeaderAssist','Google Drive','Zoom','Vimeo','Slack','Zapier','Postmark'];

function IntegrationsSection() {
  return (
    <section className="border-y border-zinc-100 bg-zinc-50/50">
      <div className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20 text-center">
        <FadeIn>
          <h2 className="text-2xl font-bold text-brand-navy sm:text-3xl">Plugs into the tools your team already uses.</h2>
          <p className="mx-auto mt-3 max-w-lg text-base text-zinc-600">LeaderLMS works inside the Leader Suite and connects to the tools your reps already have on their phones.</p>
        </FadeIn>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {INTEGRATIONS.map((name, i) => (
            <FadeIn key={name} delay={i * 40}>
              <span className="inline-block rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-600 shadow-sm">{name}</span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

const TIERS = [
  {
    name: 'Free', price: '$0', period: 'forever', description: 'For solo leaders getting started.',
    features: ['Up to 3 courses','Up to 10 learners','Video hosting (2 GB)','Quizzes & assessments','Leader Suite SSO'],
    cta: 'Start for free', href: `${APP_URL}/signup`, featured: false,
  },
  {
    name: 'Team', price: '$19', period: 'per user / mo', description: 'For growing teams that need to scale training.',
    features: ['Unlimited courses','Unlimited learners','Video hosting (100 GB)','Certifications','Automated enrollment','Drip scheduling','Team leaderboard','Compliance tracking','All Leader Suite integrations'],
    cta: 'Start Team trial', href: `${APP_URL}/signup?plan=team`, featured: true,
  },
  {
    name: 'Executive', price: '$39', period: 'per user / mo', description: 'For organizations training at scale.',
    features: ['Everything in Team','Unlimited video hosting','Custom branding','Audit logs & reporting','SSO enforcement','Dedicated onboarding','Priority support','Multi-team management'],
    cta: 'Contact sales', href: '/contact', featured: false,
  },
];

function PricingSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-24">
      <FadeIn>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">Straightforward pricing.</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600">Start free. Unlock the full power when your team is ready.</p>
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
          Stop training individually.<br />Start duplicating at scale.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg text-zinc-300">
          LeaderLMS turns your best systems into courses your whole team can learn from — so you spend less time repeating yourself and more time leading.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a href={`${APP_URL}/signup`} className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-brand-green px-7 text-base font-semibold text-white shadow-lg shadow-brand-green/20 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            Start free trial
          </a>
          <Link href="/how-it-works" className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/20 px-7 text-base font-semibold text-zinc-200 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            See how it works
          </Link>
        </div>
        <p className="mt-5 text-sm text-zinc-400">Free to start. Part of the Leader Suite.</p>
      </FadeIn>
    </section>
  );
}
