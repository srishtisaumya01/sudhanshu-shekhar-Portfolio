import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navLinks } from '../data/content'
import { pauseScroll, scrollToTarget } from '../lib/scroll'

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)
  const menuBtn = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  useEffect(() => {
    pauseScroll(open)
    document.body.style.overflow = open ? 'hidden' : ''
    if (open) closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false)
        menuBtn.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const go = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    setOpen(false)
    // let the overlay release the scroll lock first
    setTimeout(() => scrollToTarget(href), 30)
  }

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-3 z-50 px-3 md:top-4 md:px-8">
        <nav
          aria-label="Primary"
          className={`pointer-events-auto mx-auto flex h-14 max-w-[1120px] items-center justify-between rounded-2xl border px-4 backdrop-blur-md transition-colors duration-500 md:h-16 md:px-6 ${
            scrolled ? 'border-white/15 bg-black/75' : 'border-white/10 bg-black/40'
          }`}
        >
          <a href="#top" onClick={(e) => go(e, '#top')} className="display text-xl sm:text-2xl md:text-3xl">
            Sudhanshu Shekhar
          </a>
          <ul className="hidden items-center gap-7 lg:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={(e) => go(e, l.href)} className="ulink text-sm text-ivory">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a href="#connect" onClick={(e) => go(e, '#connect')} className="btn !min-h-[40px] !gap-3 !px-3 sm:!px-4">
              <span className="hidden sm:inline">Let&apos;s connect</span>
              <span className="sm:hidden">Connect</span>
              <ArrowUpRight size={14} aria-hidden />
            </a>
            <button
              ref={menuBtn}
              className="grid h-11 w-11 place-items-center lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
            >
              <Menu aria-hidden />
            </button>
          </div>
        </nav>
      </header>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        hidden={!open}
        className="fixed inset-0 z-[60] flex flex-col bg-ink px-4 pb-8 pt-0 lg:hidden"
      >
        <div className="flex h-14 items-center justify-between">
          <span className="display text-2xl">Sudhanshu Shekhar</span>
          <button ref={closeRef} className="grid h-11 w-11 place-items-center" aria-label="Close menu" onClick={() => setOpen(false)}>
            <X aria-hidden />
          </button>
        </div>
        <ul className="mt-6 flex flex-1 flex-col justify-center gap-1">
          {navLinks.map((l, i) => (
            <li key={l.href}>
              <a href={l.href} onClick={(e) => go(e, l.href)} className="display flex items-baseline gap-4 py-2 text-6xl">
                <span className="label !text-accent">0{i + 1}</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#connect" onClick={(e) => go(e, '#connect')} className="btn btn-solid justify-center">
          Let&apos;s connect <ArrowUpRight size={14} aria-hidden />
        </a>
      </div>
    </>
  )
}
