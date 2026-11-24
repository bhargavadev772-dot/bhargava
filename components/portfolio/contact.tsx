import { ArrowUpRight } from 'lucide-react'
import { site } from '@/lib/site'
import { GithubIcon, LeetcodeIcon, LinkedinIcon } from './brand-icons'
import { ProfessionalPresence } from './professional-presence'
import { Reveal } from './reveal'

const channels = [
  { label: 'LinkedIn', value: site.linkedin.replace('https://www.', ''), href: site.linkedin, icon: LinkedinIcon, external: true },
  { label: 'GitHub', value: site.github.replace('https://', ''), href: site.github, icon: GithubIcon, external: true },
  { label: 'LeetCode', value: site.leetcode.replace('https://', ''), href: site.leetcode, icon: LeetcodeIcon, external: true },
]

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 md:px-14 md:py-20">
            <div aria-hidden="true" className="absolute inset-0 -z-10">
              <div className="absolute -left-20 -top-20 size-80 rounded-full bg-brand-blue/25 blur-[100px]" />
              <div className="absolute -bottom-24 -right-16 size-96 rounded-full bg-brand-violet/25 blur-[100px]" />
              <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
            </div>

            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">Contact</p>
              <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                {"Let's build something "}
                <span className="text-gradient">great together</span>
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground md:text-lg">
                {"I'm open to internships, collaborations and exciting opportunities. The best way to reach me is through LinkedIn."}
              </p>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 font-medium text-white shadow-xl shadow-brand-violet/30 transition-transform hover:scale-[1.03]"
              >
                <LinkedinIcon className="size-4" />
                Connect on LinkedIn
              </a>
            </div>

            <ul className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-3">
              {channels.map((channel) => (
                <li key={channel.label}>
                  <a
                    href={channel.href}
                    {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-background/60 p-4 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-brand-violet/40"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-foreground transition-colors group-hover:text-brand-blue">
                      <channel.icon className="size-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-medium">{channel.label}</span>
                      <span className="block truncate text-xs text-muted-foreground">{channel.value}</span>
                    </span>
                    <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
            </ul>

            <ProfessionalPresence />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
