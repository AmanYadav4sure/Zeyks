import { useEffect, useRef, type ReactNode } from 'react'

export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          io.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export function Pill({ icon, children }: { icon?: ReactNode; children: ReactNode }) {
  return (
    <span className="pill-badge">
      {icon}
      {children}
    </span>
  )
}

export function SectionHead({
  pill,
  pillIcon,
  title,
  sub,
  align = 'center',
}: {
  pill: string
  pillIcon?: ReactNode
  title: ReactNode
  sub?: string
  align?: 'center' | 'left'
}) {
  return (
    <div className={align === 'center' ? 'flex flex-col items-center text-center' : ''}>
      <Reveal>
        <Pill icon={pillIcon}>{pill}</Pill>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-6 text-balance font-medium tracking-[-0.03em] text-[2.75rem] leading-[1.05] md:text-[3.5rem]">
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={140}>
          <p className="mt-4 max-w-xl text-sm leading-6 text-muted md:text-base">{sub}</p>
        </Reveal>
      )}
    </div>
  )
}

export function ClusterIcon({ className = 'size-3.5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <circle cx="8" cy="7" r="3" />
      <circle cx="16.5" cy="9.5" r="2.4" />
      <circle cx="10.5" cy="16.5" r="2.8" />
    </svg>
  )
}

export function ArrowCircle({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className={`inline-flex size-5 items-center justify-center rounded-full ${dark ? 'bg-neutral-800 text-white' : 'bg-neutral-800 text-white'}`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-3">
        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

export function CtaBar({ text, cta, href = '#pricing' }: { text: string; cta: string; href?: string }) {
  const external = href.startsWith('http')
  return (
    <Reveal>
      <div className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-4 md:justify-between">
        <div className="card-neo-in flex-1 rounded-full px-8 py-5 text-sm text-neutral-600 md:text-base">{text}</div>
        <a
          href={href}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="btn-dark -ml-4 flex items-center gap-2 px-7 py-4 text-sm font-medium"
        >
          {cta} <ClusterIcon />
        </a>
      </div>
    </Reveal>
  )
}
