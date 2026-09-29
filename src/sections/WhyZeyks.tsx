import { Reveal, SectionHead, CtaBar } from '../ui'

const reasons = [
  {
    t: 'Technology + Creativity',
    d: 'Engineers and designers in the same room. Product decisions and brand decisions get made together, so nothing ships that looks good but does not work.',
    span: 'lg:col-span-7',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="size-6">
        <path d="M9 8l-4 4 4 4M15 8l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    t: 'One team, many disciplines',
    d: 'Web, software, AI, design, brand, media and marketing — one contract, one point of contact.',
    span: 'lg:col-span-5',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="size-6">
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="10" r="2.4" />
        <path d="M3.5 18c.7-2.6 2.7-4.2 5.5-4.2s4.8 1.6 5.5 4.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    t: 'Built for real businesses',
    d: 'We work with owners who need systems that hold up under daily use — not prototypes that die after launch week.',
    span: 'lg:col-span-4',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="size-6">
        <rect x="3.5" y="8" width="17" height="12" rx="2" />
        <path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    t: 'Product-minded development',
    d: 'Every feature earns its place. We build, measure and cut — the same way our own products are run.',
    span: 'lg:col-span-4',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="size-6">
        <path d="M5 19V9m5 10v-6m5 6V5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    t: 'Long-term partnership',
    d: 'Support, iteration and growth retainers keep the thing alive after handover.',
    span: 'lg:col-span-4',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="size-6">
        <path d="M12 20s-7-4.3-7-9.2A3.8 3.8 0 0 1 12 8a3.8 3.8 0 0 1 7 2.8C19 15.7 12 20 12 20z" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function WhyZeyks() {
  return (
    <section id="why" className="bg-surface py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <SectionHead
          pill="Why ZEYKS"
          pillIcon={<span>✦</span>}
          title="Why teams choose ZEYKS"
          sub="The reasons businesses keep working with us long after launch."
        />
        <div className="mt-16 grid gap-5 lg:grid-cols-12">
          {reasons.map((r, i) => (
            <Reveal key={r.t} delay={(i % 3) * 90} className={r.span}>
              <div className="card-neo flex h-full flex-col p-9">
                <span className="bubble size-14">{r.icon}</span>
                <h3 className="mt-8 text-2xl font-medium tracking-[-0.02em]">{r.t}</h3>
                <p className="mt-3 max-w-lg text-sm leading-6 text-neutral-600">{r.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <CtaBar
          text="Ready to build with a team that stays after launch?"
          cta="Talk to ZEYKS"
          href="https://wa.me/9779701066114?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20ZEYKS%20services%20and%20how%20we%20can%20work%20together."
        />
      </div>
    </section>
  )
}
