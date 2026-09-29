import { Reveal, Pill, ClusterIcon } from '../ui'

const disciplines = [
  { k: 'Product Design', v: 'Research, flows, wireframes and a design system built for scale.' },
  { k: 'UI / UX', v: 'A clean accounting workspace — dense data, zero clutter.' },
  { k: 'Development', v: 'Web application, secure auth, exports, and reliable reporting.' },
  { k: 'Technology', v: 'Modern stack, versioned database, monitored and backed up daily.' },
]

export default function Work() {
  return (
    <section id="work" className="bg-white py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <Pill icon={<span>◈</span>}>Selected work</Pill>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-medium tracking-[-0.03em] text-[2.75rem] leading-[1.05] md:text-[3.5rem]">
              Built by ZEYKS
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 max-w-xl text-sm leading-6 text-muted md:text-base">
              Products we design, engineer and operate ourselves — starting with our own.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="card-neo mt-20 p-5">
            <div className="grid gap-5 lg:grid-cols-12">
              <div className="card-neo-in flex flex-col justify-between p-9 lg:col-span-5">
                <div>
                  <span className="pill-badge">
                    <span className="size-1.5 rounded-full bg-sage-deep" />
                    Product / Software
                  </span>
                  <h3 className="mt-8 text-[3rem] font-medium leading-none tracking-[-0.04em] md:text-[4rem]">
                    Zeyks
                    <br />
                    Book
                  </h3>
                  <p className="mt-6 max-w-sm text-[15px] leading-7 text-neutral-600">
                    ZEYKS' own business and accounting platform. We designed it for the businesses we work with every
                    day — then built it, shipped it, and kept running it.
                  </p>
                </div>
                <a
                  href="https://zeyksbook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-dark mt-10 flex w-fit items-center gap-2.5 px-7 py-4 text-sm font-semibold"
                >
                  View Case Study <ClusterIcon />
                </a>
              </div>

              <div className="card-neo-in relative overflow-hidden p-7 lg:col-span-7">
                <div className="flex items-center gap-2 pb-5">
                  <i className="size-2.5 rounded-full bg-neutral-300" />
                  <i className="size-2.5 rounded-full bg-neutral-300" />
                  <i className="size-2.5 rounded-full bg-neutral-300" />
                  <span className="ml-3 text-xs text-neutral-500">zeyksbook — dashboard</span>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      ['Revenue', '₹ 18.4L'],
                      ['Expenses', '₹ 6.1L'],
                      ['Net', '₹ 12.3L'],
                    ].map(([k, v], i) => (
                      <div key={k} className="card-neo-in px-4 py-5">
                        <p className="text-[11px] uppercase tracking-[0.12em] text-neutral-500">{k}</p>
                        <p className={`mt-3 text-lg font-medium tracking-tight ${i === 2 ? 'text-sage-deep' : ''}`}>{v}</p>
                      </div>
                    ))}
                  </div>
                  <div className="card-neo-in p-5">
                    <div className="flex items-end gap-2.5 h-32">
                      {[38, 62, 45, 78, 55, 90, 68, 82, 50, 96, 72, 88].map((h, i) => (
                        <span
                          key={i}
                          style={{ height: `${h}%` }}
                          className={`flex-1 rounded-t-md ${i % 3 === 1 ? 'bg-[#5c857c]' : 'bg-[#cbe1da]'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="card-neo-in divide-y divide-neutral-200/70">
                    {[
                      ['INV-2041', 'Northline Studio', 'Paid'],
                      ['INV-2042', 'Meridian Foods', 'Pending'],
                      ['INV-2043', 'Kaya Interiors', 'Paid'],
                    ].map(([id, client, state]) => (
                      <div key={id} className="flex items-center justify-between gap-4 px-5 py-4">
                        <span className="font-mono text-xs text-neutral-500">{id}</span>
                        <span className="text-sm">{client}</span>
                        <span
                          className={`rounded-full px-3 py-1 text-[11px] ${
                            state === 'Paid' ? 'bg-[#dcece6] text-sage-deep' : 'bg-neutral-200 text-neutral-600'
                          }`}
                        >
                          {state}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {disciplines.map((d, i) => (
                <Reveal key={d.k} delay={i * 70}>
                  <div className="card-neo-in h-full p-7">
                    <p className="text-xs uppercase tracking-[0.14em] text-neutral-500">{d.k}</p>
                    <p className="mt-4 text-sm leading-6 text-neutral-700">{d.v}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
