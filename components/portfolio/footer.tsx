import { ArrowUp, Mail } from 'lucide-react'
import { navLinks, site } from '@/lib/site'
import { GithubIcon, LinkedinIcon } from './brand-icons'

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <a href="#home" className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-lg bg-gradient-brand font-mono text-sm font-bold text-white">
              DB
            </span>
            <span className="font-semibold tracking-tight">{site.name}</span>
          </a>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              {navLinks.slice(1).map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            {[
              { href: site.github, label: 'GitHub', icon: GithubIcon, external: true },
              { href: site.linkedin, label: 'LinkedIn', icon: LinkedinIcon, external: true },
              { href: `mailto:${site.email}`, label: 'Email', icon: Mail, external: false },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand-violet/40 hover:text-foreground"
              >
                <item.icon className="size-4" />
                <span className="sr-only">{item.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <p>
            {'© '}
            {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <a href="#home" className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground">
            Back to top
            <ArrowUp className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
