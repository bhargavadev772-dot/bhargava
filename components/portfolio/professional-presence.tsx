import { ArrowUpRight, Briefcase, Database, Users } from 'lucide-react'
import { site } from '@/lib/site'
import { LinkedinIcon } from './brand-icons'
import { Reveal } from './reveal'

const platforms = [
  { name: 'Handshake', icon: Users, description: 'Career and internship network' },
  { name: 'Mercor', icon: Briefcase, description: 'AI-driven talent platform' },
  { name: 'DataAnnotation', icon: Database, description: 'AI training & data annotation' },
]

export function ProfessionalPresence() {
  return (
    <div className="mx-auto mt-14 max-w-4xl">
      <Reveal>
        <h3 className="text-center font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Professional presence
        </h3>
      </Reveal>

      <Reveal delay={80}>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-6 flex items-center gap-4 rounded-2xl border border-brand-blue/40 bg-background/60 p-5 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-brand-violet/60"
        >
          <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-gradient-brand text-white">
            <LinkedinIcon className="size-5" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="flex items-center gap-2 font-medium">
              LinkedIn
              <span className="rounded-full bg-brand-blue/15 px-2 py-0.5 text-[11px] font-medium text-brand-blue">
                Verified primary profile
              </span>
            </span>
            <span className="mt-0.5 block truncate text-sm text-muted-foreground">
              {site.linkedin.replace('https://www.', '')}
            </span>
          </span>
          <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </Reveal>

      <ul className="mt-4 grid gap-4 sm:grid-cols-3">
        {platforms.map((platform, i) => (
          <Reveal key={platform.name} delay={140 + i * 80}>
            <li className="h-full">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-background/60 p-5 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-brand-violet/40"
              >
                <span className="grid size-10 place-items-center rounded-xl bg-secondary text-brand-violet">
                  <platform.icon className="size-5" />
                </span>
                <span>
                  <span className="block font-medium">{platform.name}</span>
                  <span className="mt-0.5 block text-sm text-muted-foreground">{platform.description}</span>
                </span>
                <span className="mt-auto inline-flex items-center gap-1.5 text-xs text-brand-blue">
                  Connect via LinkedIn
                  <ArrowUpRight className="size-3.5" />
                </span>
              </a>
            </li>
          </Reveal>
        ))}
      </ul>
    </div>
  )
}
