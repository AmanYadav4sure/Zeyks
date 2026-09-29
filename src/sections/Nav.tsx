import { useEffect, useState } from 'react'

const links = [
  { label: 'What we do', href: '#services' },
  { label: 'Companies', href: '#companies' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open ? 'bg-white/70 backdrop-blur-xl' : 'bg-white/40 backdrop-blur-md'}`}
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-12">
        <a href="#" className="flex items-center gap-2.5">
          <span className="bubble size-8 text-xs">Z</span>
          <span className="text-xl font-medium tracking-tight">ZEYKS</span>
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-sm text-neutral-700 transition-colors hover:text-black">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn-dark hidden px-6 py-3 text-sm font-semibold md:block">
          Start a Project
        </a>
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="btn-light flex size-11 items-center justify-center md:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-5">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 8h16M4 16h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden">
          <nav className="mx-4 mb-4 card-neo flex flex-col gap-1 p-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-5 py-4 text-base text-neutral-800 transition-colors hover:bg-white/70"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-dark mt-2 px-6 py-4 text-center text-sm font-semibold">
              Start a Project
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
