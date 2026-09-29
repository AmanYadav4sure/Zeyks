import { Reveal, ClusterIcon } from '../ui'

export default function FinalCta() {
  return (
    <section id="start" className="relative overflow-hidden bg-white py-32">
      <div className="hero-blob !inset-auto !inset-y-0 !flex">
        <video autoPlay muted loop playsInline className="!w-[520px] opacity-70">
          <source src="/img/hero-blob.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="relative mx-auto max-w-[1440px] px-6 text-center lg:px-12">
        <Reveal>
          <span className="pill-badge">
            <span className="size-1.5 rounded-full bg-sage-deep" />
            Start something
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mx-auto mt-8 max-w-4xl text-[2.5rem] font-medium leading-[1.08] tracking-[-0.04em] md:text-[4rem]">
            Let&apos;s build something{' '}
            <span className="glass-pill text-glass inline-block px-6 leading-[1.2]">worth building</span>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-neutral-600">
            Have a website, product, tool or digital idea in mind? Tell us what you&apos;re building.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
            <a href="#contact" className="btn-dark flex items-center gap-2.5 px-8 py-4 text-sm font-semibold">
              Start a Project <ClusterIcon />
            </a>
            <a href="#companies" className="btn-light flex items-center gap-2.5 px-8 py-4 text-sm font-medium">
              Explore ZEYKS <ClusterIcon className="size-4 text-neutral-500" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
