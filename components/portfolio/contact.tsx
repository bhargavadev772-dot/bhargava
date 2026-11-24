import { ArrowUpRight, Mail } from 'lucide-react'
import { isContactConfigured } from '@/app/actions/contact'
import { site } from '@/lib/site'
import { GithubIcon, LeetcodeIcon, LinkedinIcon } from './brand-icons'
import { ContactForm } from './contact-form'
import { ProfessionalPresence } from './professional-presence'
import { Reveal } from './reveal'

const channels = [
  { label: 'Email', value: site.email, href: `mailto:${site.email}`, icon: Mail, external: false },
  { label: 'LinkedIn', value: site.linkedin.replace('https://www.', ''), href: site.linkedin, icon: LinkedinIcon, external: true },
  { label: 'GitHub', value: site.github.replace('https://', ''), href: site.github, icon: GithubIcon, external: true },
  { label: 'LeetCode', value: site.leetcode.replace('https://', ''), href: site.leetcode, icon: LeetcodeIcon, external: true },
]

export async function Contact() {
  const configured = await isContactConfigured()

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl border border-border bg-card px-5 py-14 md:px-12 md:py-20">
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
                {"I'm open to internships, collaborations and exciting opportunities. Send a message below or reach me on any of these channels."}
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <ContactForm configured={configured} />
              </div>

              <ul className="flex flex-col gap-4 lg:col-span-2">
                {channels.map((channel) => (
                  <li key={channel.label}>
                    <a
                      href={channel.href}
                      {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="group flex items-center gap-4 rounded-2xl border border-border bg-background/60 p-4 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-brand-violet/40"
                    >
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-foreground transition-colors group-hover:text-brand-blue">
                        <channel.icon className="size-5" aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-medium">{channel.label}</span>
                        <span className="block truncate text-xs text-muted-foreground">{channel.value}</span>
                      </span>
                      <ArrowUpRight
                        className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                      {channel.external && <span className="sr-only">(opens in a new tab)</span>}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <ProfessionalPresence />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
