import { Reveal, SectionHead, ClusterIcon } from '../ui'

const divisions = [
  {
    name: 'Zeyks Digital',
    kind: 'Web & Marketing',
    copy: 'Websites, brands and digital growth for businesses that need to be seen.',
    live: false,
  },
  {
    name: 'Zeyks Labs',
    kind: 'AI & Experiments',
    copy: 'AI tools, automations and internal experiments that become products.',
    live: false,
  },
  {
    name: 'Zeyks Creative',
    kind: 'Design & Brand',
    copy: 'Identity, product design and creative direction across the ecosystem.',
    live: false,
  },
  {
    name: 'Zeyks Media',
    kind: 'Content & Social',
    copy: 'Video, content and social media management for modern brands.',
    live: false,
  },
]

export default function Companies() {
  return (
    <section id="companies" className="bg-white py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <SectionHead
          pill="The ecosystem"
          pillIcon={<span>⬡</span>}
          title="One company. Multiple directions."
          sub="ZEYKS operates across technology, digital products, creative services and media."
        />

        <Reveal>
          <div className="card-neo mt-20 overflow-hidden p-5">
            <div className="grid gap-5 lg:grid-cols-12">
              <div className="card-neo-in flex flex-col justify-between p-9 lg:col-span-7">
                <div>
                  <span className="pill-badge">
                    <span className="size-1.5 rounded-full bg-sage-deep" />
                    Business Software
                  </span>
                  <h3 className="mt-7 text-[2.5rem] font-medium leading-[1.05] tracking-[-0.035em] md:text-[3.4rem]">
                    Zeyks Book
                  </h3>
                  <p className="mt-5 max-w-md text-[15px] leading-7 text-neutral-600">
                    Business and accounting software built for modern businesses. Invoicing, books, clients and reports
                    in one clean workspace.
                  </p>
                </div>
                <div className="mt-10 flex flex-wrap items-center gap-3">
                  {['Invoicing', 'Bookkeeping', 'Reports', 'Clients'].map((t) => (
                    <span key={t} className="rounded-full border border-neutral-300 bg-white/60 px-4 py-2 text-xs text-neutral-600">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="card-neo-in relative flex flex-col justify-between overflow-hidden p-9 lg:col-span-5">
                <div className="pointer-events-none absolute -right-10 -top-10 size-52 rounded-full bg-[radial-gradient(circle_at_35%_30%,#ffffff,#dcece6_55%,#c3ddd5)] opacity-70" />
                <div className="relative">
                  <p className="text-xs uppercase tracking-[0.15em] text-neutral-500">A ZEYKS product</p>
                  <div className="mt-8 space-y-3">
                    {[
                      ['Balance', '₹ 4,82,500'],
                      ['Outstanding', '₹ 61,200'],
                      ['Invoices this month', '24'],
                    ].map(([k, v], i) => (
                      <div key={k} className="card-neo-in flex items-center justify-between gap-4 px-5 py-4">
                        <span className="text-[13px] text-neutral-500">{k}</span>
                        <span className={`text-sm font-medium ${i === 0 ? 'text-sage-deep' : ''}`}>{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <a
                  href="https://zeyksbook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-dark relative mt-10 flex w-fit items-center gap-2.5 px-7 py-4 text-sm font-semibold"
                >
                  Visit Zeyks Book <ClusterIcon />
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {divisions.map((d, i) => (
            <Reveal key={d.name} delay={i * 80}>
              <div className="card-neo flex h-full flex-col p-8">
                <div className="flex items-start justify-between gap-4">
                  <span className="bubble size-11 text-sm">{d.name.split(' ').pop()![0]}</span>
                  <span className="pill-badge !px-3 !py-1.5 !text-[0.58rem]">Coming soon</span>
                </div>
                <h4 className="mt-8 text-xl font-medium tracking-[-0.02em]">{d.name}</h4>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-neutral-500">{d.kind}</p>
                <p className="mt-4 text-sm leading-6 text-neutral-600">{d.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
