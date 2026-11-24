'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, site } from '@/lib/site'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((section) => observer.observe(section))

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || open ? 'border-b border-border bg-background/75 backdrop-blur-xl' : 'bg-transparent',
      )}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#home" className="flex items-center gap-2.5" aria-label={`${site.name} — home`}>
          <span className="grid size-9 place-items-center rounded-lg bg-gradient-brand font-mono text-sm font-bold text-white shadow-lg shadow-brand-violet/25">
            DB
          </span>
          <span className="hidden font-semibold tracking-tight sm:inline">{site.name}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href ? 'true' : undefined}
                className={cn(
                  'rounded-full px-3.5 py-2 text-sm transition-colors',
                  active === link.href
                    ? 'bg-secondary text-foreground'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-gradient-brand px-4 py-2 text-sm font-medium text-white shadow-lg shadow-brand-violet/20 transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            Hire me
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid size-10 place-items-center rounded-lg border border-border text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          'grid overflow-hidden transition-all duration-300 lg:hidden',
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <ul className="min-h-0 px-5 pb-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className={cn(
                  'block rounded-lg px-3 py-3 text-base',
                  active === link.href ? 'bg-secondary text-foreground' : 'text-muted-foreground',
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pb-4 pt-2">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={open ? 0 : -1}
              className="block rounded-lg bg-gradient-brand px-3 py-3 text-center font-medium text-white"
            >
              Hire me
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
