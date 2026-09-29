import { Reveal } from '../ui'

const logos = [
  '/img/logo-greenish.png',
  '/img/logo-snapshot.png',
  '/img/logo-luminous.png',
  '/img/logo-product.png',
  '/img/logo-automation.png',
]

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-20">
      <div className="hero-blob">
        <video autoPlay muted loop playsInline poster="">
          <source src="/img/hero-blob.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center px-6 pb-10 pt-20 text-center lg:px-12">
        <Reveal>
          <span className="pill-badge">
            <span className="size-1.5 rounded-full bg-sage-deep" />
            Your Business Growth Partner
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-8 text-[3.5rem] font-medium leading-[1.02] tracking-[-0.04em] md:text-[5.25rem] lg:text-[6rem]">
            Scale your business
            <br />
            with{' '}
            <span className="glass-pill text-glass inline-block px-8 py-1 leading-[1.25]">Zeyks</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-8 max-w-xl text-base leading-7 text-neutral-600">
            Result-driven approach empowers you to confidently face challenges, embrace new opportunities, and achieve
            business growth.
          </p>
        </Reveal>
        <Reveal delay={280}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="#contact" className="btn-dark px-8 py-4 text-sm font-semibold">
              Get Started Free
            </a>
          </div>
        </Reveal>
        <Reveal delay={360}>
          <div className="relative mt-16 w-full max-w-5xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="marquee-track flex w-max items-center gap-20 opacity-50">
              {[...logos, ...logos, ...logos].map((src, i) => (
                <img key={i} src={src} alt="company logo" className="h-7 w-auto grayscale" />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
