import { Reveal, Pill, ClusterIcon } from '../ui'

const steps = [
  { n: '01', title: 'Discover', copy: 'We learn your business, users and goals before touching a pixel or a line of code.' },
  { n: '02', title: 'Plan', copy: 'Scope, architecture and roadmap — agreed, documented and priced transparently.' },
  { n: '03', title: 'Design', copy: 'Interfaces, brand systems and product flows designed to be built, not to impress in a deck.' },
  { n: '04', title: 'Build', copy: 'Engineering in short cycles with working software in your hands every week.' },
  { n: '05', title: 'Launch', copy: 'Deployment, analytics, documentation and a team that stays reachable afterwards.' },
  { n: '06', title: 'Grow', copy: 'Iteration, marketing and optimization — the product keeps compounding after go-live.' },
]

export default function Process() {
  return (
    <section id="process" className="bg-surface py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Reveal>
              <Pill icon={<span>▤</span>}>How we work</Pill>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-8 text-[2.75rem] font-medium leading-[1.05] tracking-[-0.03em] md:text-[3.5rem]">
                Simple &amp;
                <br />
                Scalable
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-sm text-sm leading-7 text-neutral-600 md:text-base">
                One process runs through every ZEYKS engagement — whether we are shipping a brand site, a SaaS platform
                or an automation layer.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <a
                href="https://wa.me/9779701066114?text=Hey%2C%20I%20came%20across%20your%20website.%20I%20want%20the%20services%20of%20ZEYKS."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark mt-9 flex w-fit items-center gap-2.5 px-7 py-4 text-sm font-semibold"
              >
                Start a Project <ClusterIcon />
              </a>
            </Reveal>
            <Reveal delay={260}>
              <p className="mt-16 max-w-sm text-xl font-medium leading-[1.45] tracking-[-0.02em]">
                " We treat every build as a product, <span className="text-neutral-400">not a project.</span> It needs to
                still work in three years. "</p>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={(i % 2) * 90}>
                <div className="card-neo flex h-full flex-col p-8">
                  <div className="flex items-center justify-between">
                    <span className="bubble size-14 text-base">{s.n}</span>
                    <span className="flex gap-1.5 opacity-40">
                      <i className="size-1.5 rounded-full bg-neutral-400" />
                      <i className="size-1.5 rounded-full bg-neutral-400" />
                      <i className="size-1.5 rounded-full bg-neutral-400" />
                    </span>
                  </div>
                  <div className="dotted-divider my-7" />
                  <h3 className="text-2xl font-medium tracking-[-0.02em]">{s.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">{s.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
