import type { Metadata } from 'next';
import { SuiteBar, SiteNav, SiteFooter, FadeIn } from '@leader/marketing-ui';
import { MarketingIcon } from '@/app/_marketing/icons';

export const metadata: Metadata = {
  title: 'About — LeaderLMS',
  description:
    'LeaderLMS is part of the Leader Suite — professional training built for network marketing teams who are tired of running their Silver Course through a Facebook group.',
  alternates: { canonical: '/about' },
};

const APP_URL = 'https://lms.leaderhq.io';

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

const VALUES = [
  {
    icon: 'trophy',
    title: 'Proof, not promises',
    body: 'Certificates mean something. Every LeaderLMS completion is verified — quiz-gated, tracked, and shareable. Your team earns credentials they can be proud of and post.',
  },
  {
    icon: 'users',
    title: 'Built for bilingual teams',
    body: 'Network marketing is global. Every training in LeaderLMS ships in English and Español from day one. One tap, one platform, no separate groups and no extra work on your end.',
  },
  {
    icon: 'clipboard',
    title: 'Ready on day one',
    body: 'We believe every team deserves a professional training hub — not a blank slate. 21+ trainings are loaded and ready the moment you open your account.',
  },
] as const;

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900">
      <SuiteBar appUrl={APP_URL} />
      <SiteNav
        productSuffix="LMS"
        links={NAV_LINKS}
        ctaLabel="Get Started Free"
        ctaHref={`${APP_URL}/signup`}
        loginHref={`${APP_URL}/login`}
      />
      <main className="flex-1">
        {/* Hero */}
        <section className="text-white" style={{ background: '#06163E' }}>
          <div className="mx-auto max-w-[820px] px-4 py-24 sm:px-6">
            <FadeIn>
              <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
                We built this because
                <br />
                Facebook groups are not a training platform.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-zinc-300 sm:text-xl">
                LeaderLMS is part of the Leader Suite — a set of tools built for the people who lead, sell, and build in the real world. We built it because we lived the problem: training your team through a Facebook group is chaotic, untracked, and not scalable.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Story */}
        <section className="mx-auto max-w-[820px] px-4 py-20 sm:px-6 sm:py-24">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              The story behind the product
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-zinc-600">
              Network marketing teams share one training problem: the content exists — the Silver Course, the Fast Start, the objection-handling scripts — but there is no system to deliver it, track it, or prove it was watched. So it ends up in a Facebook group, a Google Drive folder, or a series of group Zoom calls that get rescheduled every week.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">
              LeaderLMS was built to close that gap. Not with a complicated LMS that requires a tech team to configure. With a platform that comes fully loaded from day one — 21+ bilingual trainings, auto-graded quizzes, and official completion certificates — ready to assign the moment you open your account.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">
              We are part of the Leader Suite of software products and tools for leaders. LeaderLMS is where your team gets trained. The rest of the suite is built around what happens next.
            </p>
            <div className="mt-10">
              <a
                href="https://leaderhq.io"
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-6 text-base font-semibold text-white shadow-md shadow-brand-green/25 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
              >
                Explore the Leader Suite — LeaderHQ →
              </a>
            </div>
          </FadeIn>
        </section>

        {/* Values */}
        <section
          className="border-y border-zinc-100"
          style={{ background: 'color-mix(in srgb, #06163E 4%, #fff)' }}
        >
          <div className="mx-auto max-w-[1100px] px-4 py-20 sm:px-6 sm:py-24">
            <FadeIn>
              <h2 className="text-center text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                What we stand for
              </h2>
            </FadeIn>
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {VALUES.map((v, i) => (
                <FadeIn
                  key={v.title}
                  delay={i * 80}
                  className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                    <MarketingIcon name={v.icon} size={24} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-brand-navy">
                    {v.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-zinc-600">{v.body}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Suite CTA */}
        <section className="mx-auto max-w-[560px] px-4 py-20 text-center sm:px-6 sm:py-24">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              Part of the Leader Suite
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">
              LeaderLMS is one product in a growing suite of tools for leaders, sales professionals, and the organizations they build. Visit LeaderHQ to see everything we are building.
            </p>
            <a
              href="https://leaderhq.io"
              className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-navy px-6 text-base font-semibold text-white shadow-md transition hover:brightness-125 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
            >
              Visit LeaderHQ →
            </a>
          </FadeIn>
        </section>
      </main>
      <SiteFooter
        productSuffix="LMS"
        columns={FOOTER_COLUMNS}
      />
    </div>
  );
}
