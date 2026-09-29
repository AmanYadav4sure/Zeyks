import { Reveal, Pill } from '../ui'

const facts = [
  { value: 'Products', label: 'Software & SaaS built in-house' },
  { value: 'Systems', label: 'Tools that run real businesses' },
  { value: 'Studio', label: 'Design, media and growth together' },
]

export default function Intro() {
  return (
    <section id="intro" className="relative bg-white py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Pill icon={<span className="size-1.5 rounded-full bg-sage-deep" />}>Who we are</Pill>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-10 text-[2rem] font-medium leading-[1.25] tracking-[-0.03em] md:text-[2.85rem] md:leading-[1.22]">
              ZEYKS is a <span className="text-sage-deep">digital technology</span> and{' '}
              <span className="text-sage-deep">creative</span> company. We bring software, design, media and marketing
              under one roof — so a business can build its product, its brand and its growth from{' '}
              <span className="text-neutral-400">a single team.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mx-auto mt-20 grid max-w-5xl gap-6 md:grid-cols-2">
          <Reveal delay={60}>
            <div className="card-neo h-full p-9">
              <h3 className="text-3xl font-medium tracking-[-0.03em] md:text-[2.6rem]">
                We build what businesses need next.
              </h3>
              <p className="mt-5 max-w-md text-[15px] leading-7 text-neutral-600">
                ZEYKS brings technology, design, software and media together to build digital experiences, products and
                systems for ambitious businesses.
              </p>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="card-neo flex h-full flex-col justify-between gap-8 p-9">
              {facts.map((f) => (
                <div key={f.value} className="flex items-center gap-5">
                  <span className="bubble size-11 text-sm">{f.value[0]}</span>
                  <div>
                    <p className="text-lg font-medium tracking-tight">{f.value}</p>
                    <p className="mt-0.5 text-sm text-neutral-500">{f.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
