import { useState } from 'react'
import { Reveal, SectionHead, ArrowCircle } from '../ui'

const services = [
  {
    n: '01',
    title: 'Web Development',
    copy: 'Websites, landing pages, web applications and digital experiences.',
    tags: ['Websites', 'Web Apps', 'Performance'],
  },
  {
    n: '02',
    title: 'Software & SaaS',
    copy: 'Custom software, dashboards, business platforms and SaaS products.',
    tags: ['Platforms', 'Dashboards', 'SaaS'],
  },
  {
    n: '03',
    title: 'AI & Automation',
    copy: 'AI integrations, intelligent tools and automated business workflows.',
    tags: ['Integrations', 'Agents', 'Workflows'],
  },
  {
    n: '04',
    title: 'Product & UI/UX',
    copy: 'Product strategy, interface design, design systems and user experiences.',
    tags: ['Strategy', 'Interfaces', 'Design Systems'],
  },
  {
    n: '05',
    title: 'Branding & Creative',
    copy: 'Brand identity, visual systems, graphics and creative direction.',
    tags: ['Identity', 'Visual Systems', 'Direction'],
  },
  {
    n: '06',
    title: 'Media & Content',
    copy: 'Video production, social media, content creation and media management.',
    tags: ['Video', 'Content', 'Social'],
  },
  {
    n: '07',
    title: 'Digital Marketing',
    copy: 'SEO, campaigns, conversion optimization and digital growth.',
    tags: ['SEO', 'Campaigns', 'CRO'],
  },
]

export default function Services() {
  const [active, setActive] = useState(0)

  return (
    <section id="services" className="bg-surface py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <SectionHead
          pill="What we do"
          pillIcon={<span>◆</span>}
          title="Seven disciplines, one team"
          sub="Everything ZEYKS builds, ships and manages — under a single roof."
        />

        <div className="mt-20 border-t border-neutral-300">
          {services.map((s, i) => {
            const open = active === i
            return (
              <Reveal key={s.n} delay={(i % 3) * 60}>
                <div
                  className="group border-b border-neutral-300"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                >
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-expanded={open}
                    className="relative flex w-full items-center gap-6 py-8 text-left md:gap-10"
                  >
                    <span
                      className={`w-10 shrink-0 font-mono text-sm transition-colors duration-500 ${open ? 'text-sage-deep' : 'text-neutral-400'}`}
                    >
                      {s.n}
                    </span>
                    <h3
                      className={`flex-1 text-[1.75rem] font-medium tracking-[-0.03em] transition-all duration-500 md:text-[2.4rem] ${
                        open ? 'translate-x-1 md:translate-x-3' : 'text-neutral-400 group-hover:text-neutral-600'
                      }`}
                    >
                      {s.title}
                    </h3>
                    <span
                      className={`hidden shrink-0 items-center gap-2 transition-all duration-500 md:flex ${
                        open ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      {s.tags.map((t) => (
                        <span key={t} className="pill-badge !py-2 !text-[0.6rem]">
                          {t}
                        </span>
                      ))}
                    </span>
                    <span className={`bubble size-10 shrink-0 transition-all duration-500 ${open ? 'scale-100 rotate-0' : 'scale-75 -rotate-45 opacity-40'}`}>
                      <ArrowCircle />
                    </span>
                  </button>
                  <div className={`faq-answer ${open ? 'open' : ''}`}>
                    <div>
                      <p className="max-w-xl pb-9 pl-16 text-[15px] leading-7 text-neutral-600 md:pl-[4.75rem]">
                        {s.copy}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
