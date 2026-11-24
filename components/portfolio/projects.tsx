import Image from 'next/image'
import { AlertTriangle, ArrowUpRight, BarChart3, CloudRain, Droplets, Mountain, Wrench } from 'lucide-react'
import { site } from '@/lib/site'
import { GithubIcon } from './brand-icons'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const featuredFeatures = [
  { icon: CloudRain, label: 'Rainfall & humidity analysis' },
  { icon: Droplets, label: 'Soil moisture monitoring' },
  { icon: Mountain, label: 'Slope-based risk estimation' },
  { icon: BarChart3, label: 'AI-driven landslide risk scoring' },
]

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="Projects where I apply AI, programming and core computer science to real-world problems."
        />

        <Reveal>
          <article className="group relative overflow-hidden rounded-3xl border border-border bg-card/60 p-px">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-3xl bg-gradient-brand opacity-30 transition-opacity duration-500 group-hover:opacity-60"
            />
            <div className="relative grid overflow-hidden rounded-[calc(1.5rem-1px)] bg-card lg:grid-cols-2">
              <div className="relative aspect-video overflow-hidden lg:aspect-auto lg:min-h-full">
                <Image
                  src="/images/landguard.png"
                  alt="LandGuard AI terrain risk visualization showing glowing contour lines over a mountain slope"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-card" />
              </div>

              <div className="flex flex-col p-6 md:p-10">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-gradient-brand px-3 py-1 text-xs font-medium text-white">
                    Featured project
                  </span>
                  <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
                    AI / ML
                  </span>
                </div>
                <h3 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">LandGuard AI</h3>
                <p className="mt-2 font-medium text-gradient">AI-Based Landslide Early Warning System</p>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  An AI-powered disaster management system that analyzes rainfall, soil moisture, slope and humidity to
                  estimate landslide risk.
                </p>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {featuredFeatures.map((feature) => (
                    <li key={feature.label} className="flex items-center gap-3 text-sm">
                      <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-secondary text-brand-blue">
                        <feature.icon className="size-4" />
                      </span>
                      {feature.label}
                    </li>
                  ))}
                </ul>

                <div role="status" className="mt-6 rounded-2xl border border-amber-400/30 bg-amber-400/5 p-4">
                  <p className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-amber-300">
                    <AlertTriangle className="size-4" />
                    Live demo temporarily unavailable
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    The live application is currently unavailable due to a server issue. The project is under
                    maintenance. Improvements are in progress.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-brand-violet/20 transition-transform hover:scale-[1.03]"
                  >
                    <GithubIcon className="size-4" />
                    View source code
                  </a>
                  <span
                    aria-disabled="true"
                    className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground opacity-70"
                  >
                    <Wrench className="size-4" />
                    Live demo under maintenance
                  </span>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        <Reveal className="mt-6">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-violet/40 hover:shadow-2xl hover:shadow-brand-violet/10 sm:flex-row sm:items-center md:p-8"
          >
            <div className="flex items-center gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-border bg-secondary text-foreground">
                <GithubIcon className="size-6" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">More programming & academic projects</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Explore my repositories and ongoing work on GitHub.
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-brand-blue transition-colors group-hover:text-brand-violet">
              Visit GitHub
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
