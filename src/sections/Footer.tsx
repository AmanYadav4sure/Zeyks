import { Reveal, ClusterIcon } from '../ui'

const columns: { title: string; links: { label: string; href: string; external?: boolean }[]; note?: string }[] = [
  {
    title: 'Technology',
    links: [
      { label: 'Web Development', href: '#services' },
      { label: 'Software & SaaS', href: '#services' },
      { label: 'AI & Automation', href: '#services' },
      { label: 'Design', href: '#services' },
      { label: 'Media', href: '#services' },
      { label: 'Marketing', href: '#services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#intro' },
      { label: 'Companies', href: '#companies' },
      { label: 'Work', href: '#work' },
      { label: 'Process', href: '#process' },
      { label: 'Careers', href: '#contact' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Products',
    links: [{ label: 'Zeyks Book', href: 'https://zeyksbook.com', external: true }],
    note: 'Business and accounting software built by ZEYKS.',
  },
  {
    title: 'Social',
    links: [
      { label: 'LinkedIn', href: '#' },
      { label: 'Instagram', href: '#' },
      { label: 'X / Twitter', href: '#' },
      { label: 'YouTube', href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-surface pt-24">
      <div className="hero-blob !inset-auto !top-[-10%] !flex h-[700px] w-full">
        <video autoPlay muted loop playsInline className="!w-[560px]">
          <source src="/img/hero-blob.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="pill-badge">
              <span className="size-1.5 rounded-full bg-sage-deep" />
              Get in touch
            </span>
            <h2 className="mt-6 text-[2.5rem] font-medium leading-[1.08] tracking-[-0.04em] md:text-[3.5rem]">
              Tell us what you&apos;re{' '}
              <span className="glass-pill text-glass inline-block px-6 leading-[1.2]">building</span>
            </h2>
            <form
              className="card-neo mt-12 space-y-4 p-6 text-left md:p-8"
              onSubmit={(e) => {
                e.preventDefault()
                const data = new FormData(e.currentTarget)
                const body = `${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`
                window.location.href = `mailto:hello@zeyks.site?subject=${encodeURIComponent(
                  `Project inquiry from ${data.get('name')}`,
                )}&body=${encodeURIComponent(body)}`
              }}
            >
              <div className="grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-medium uppercase tracking-[0.12em] text-neutral-500">Name</span>
                  <input
                    name="name"
                    required
                    placeholder="Your name"
                    className="card-neo-in mt-2 w-full rounded-2xl px-5 py-4 text-sm outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-sage/40"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-medium uppercase tracking-[0.12em] text-neutral-500">Email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="card-neo-in mt-2 w-full rounded-2xl px-5 py-4 text-sm outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-sage/40"
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-xs font-medium uppercase tracking-[0.12em] text-neutral-500">Message</span>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="What do you want to build?"
                  className="card-neo-in mt-2 w-full resize-none rounded-2xl px-5 py-4 text-sm outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-sage/40"
                />
              </label>
              <button
                type="submit"
                className="btn-dark flex w-fit items-center gap-2.5 px-8 py-4 text-sm font-semibold"
              >
                Send Message <ClusterIcon />
              </button>
            </form>
          </div>
        </Reveal>
        <div className="mt-24 grid gap-12 pb-16 md:grid-cols-2 lg:grid-cols-4">
          {columns.map((c, i) => (
            <Reveal key={c.title} delay={i * 70}>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500">{c.title}</h3>
                <div className="dotted-divider mt-5" />
                <ul className="mt-8 space-y-5">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="text-[15px] underline underline-offset-4"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
                {c.note && <p className="mt-6 max-w-[16rem] text-sm leading-6 text-neutral-500">{c.note}</p>}
              </div>
            </Reveal>
          ))}
        </div>
        <div className="dotted-divider" />
        <p className="py-8 text-[15px] text-neutral-600">
          © 2026 ZEYKS. A family of digital products, services and studios.
        </p>
      </div>
    </footer>
  )
}
