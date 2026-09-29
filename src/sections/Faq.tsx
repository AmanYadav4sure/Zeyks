import { useState } from 'react'
import { Reveal, SectionHead } from '../ui'

const faqs = [
  {
    q: 'What does ZEYKS do?',
    a: 'ZEYKS is a digital technology and creative company. We build websites, web applications, custom software and SaaS products, and we run the design, branding, media and marketing around them.',
  },
  {
    q: 'What type of businesses do you work with?',
    a: 'Founders launching a product, businesses that have outgrown their current systems, and teams that need one reliable partner for technology, design and growth instead of four different vendors.',
  },
  {
    q: 'Do you build custom software?',
    a: 'Yes. Dashboards, internal tools, business platforms and full SaaS products — designed, engineered, launched and maintained by the same team that built them.',
  },
  {
    q: 'Can you build a complete website and brand?',
    a: 'That is our most common engagement. Identity, messaging, design system, website and launch content — delivered as one coherent package instead of separate hand-offs.',
  },
  {
    q: 'Do you provide ongoing support?',
    a: 'Yes. After launch we handle hosting, monitoring, fixes, iterations and new features on a retainer, so the product keeps compounding instead of going stale.',
  },
  {
    q: 'Can you manage social media and content?',
    a: 'Zeyks Media plans, produces and publishes video, design and written content, and manages the channels where your audience actually spends time.',
  },
]

function Item({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="card-neo p-6">
      <button onClick={onToggle} className="flex w-full items-center justify-between gap-4 text-left">
        <span className="text-lg tracking-tight">{q}</span>
        <span className={`bubble size-8 shrink-0 text-base ${open ? 'rotate-45' : ''} transition-transform`}>+</span>
      </button>
      <div className={`faq-answer ${open ? 'open' : ''}`}>
        <div>
          <p className="pt-4 text-sm leading-6 text-neutral-600">{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function Faq() {
  const [open, setOpen] = useState<Record<number, boolean>>({ 0: true })
  return (
    <section id="faqs" className="bg-surface-2 py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <SectionHead
          pill="FAQs"
          pillIcon={<span>?</span>}
          title="Questions & Answers!"
          sub="Everything you need to know before starting a project with ZEYKS."
        />
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
          {[0, 1].map((col) => (
            <div key={col} className="flex flex-col gap-6">
              {faqs.slice(col * 3, col * 3 + 3).map((f) => {
                const i = faqs.indexOf(f)
                return (
                  <Reveal key={f.q} delay={col * 80}>
                    <Item q={f.q} a={f.a} open={!!open[i]} onToggle={() => setOpen((o) => ({ ...o, [i]: !o[i] }))} />
                  </Reveal>
                )
              })}
            </div>
          ))}
        </div>
        <Reveal>
          <div className="card-neo mx-auto mt-14 flex w-fit items-center gap-5 rounded-full py-3 pl-3 pr-9">
            <span className="bubble size-12">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="size-5">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <p className="text-[15px] text-neutral-600">
              Tell us what you&apos;re building:{' '}
              <a href="mailto:hello@zeyks.site" className="font-medium text-black underline underline-offset-4">
                hello@zeyks.site
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
