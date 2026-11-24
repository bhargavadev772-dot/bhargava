import Image from 'next/image'
import { ArrowUpRight, BarChart3, BookOpen, CloudRain, Library, Route, ShieldAlert } from 'lucide-react'
import { site } from '@/lib/site'
import { GithubIcon } from './brand-icons'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const featuredFeatures = [
  { icon: CloudRain, label: 'Rainfall & soil moisture analysis' },
  { icon: BarChart3, label: 'ML-based risk prediction' },
  { icon: ShieldAlert, label: 'Real-time early alerts' },
]

const projects = [
  {
    icon: Route,
    title: 'Pathfinding Visualizer',
    description: 'Interactive visualization of BFS, DFS, Dijkstra and A* algorithms on a grid to understand graph traversal.',
    tags: ['C++', 'DSA', 'Graphs'],
    repo: `${site.github}/pathfinding-visualizer`,
  },
  {
    icon: Library,
    title: 'Library Management System',
    description: 'A relational database-backed system to manage books, members and issue/return records with optimized SQL queries.',
    tags: ['SQL', 'DBMS', 'Python'],
    repo: `${site.github}/library-management-system`,
  },
  {
    icon: BarChart3,
    title: 'Student Performance Predictor',
    description: 'A machine learning model that predicts academic outcomes from study patterns and attendance data.',
    tags: ['Python', 'Scikit-learn', 'ML'],
    repo: `${site.github}/student-performance-predictor`,
  },
  {
    icon: BookOpen,
    title: 'DSA Problem Archive',
    description: 'A curated collection of 200+ solved problems on arrays, trees, graphs and dynamic programming with explanations.',
    tags: ['C++', 'Algorithms', 'LeetCode'],
    repo: `${site.github}/dsa-archive`,
  },
]

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="A selection of programming and academic projects — from AI systems to core computer science."
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
                  priority={false}
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
                  An intelligent system that analyzes environmental parameters such as rainfall, soil moisture, slope
                  and seismic activity to predict landslide risk and issue timely warnings — helping communities and
                  authorities act before disaster strikes.
                </p>

                <ul className="mt-6 grid gap-3">
                  {featuredFeatures.map((feature) => (
                    <li key={feature.label} className="flex items-center gap-3 text-sm">
                      <span className="grid size-8 place-items-center rounded-lg bg-secondary text-brand-blue">
                        <feature.icon className="size-4" />
                      </span>
                      {feature.label}
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                  {['Python', 'Machine Learning', 'Pandas', 'Scikit-learn', 'Data Analysis'].map((tag) => (
                    <li key={tag} className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-muted-foreground">
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={`${site.github}/landguard-ai`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-brand-violet/20 transition-transform hover:scale-[1.03]"
                  >
                    <GithubIcon className="size-4" />
                    View source
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
                  >
                    Request demo
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 100}>
              <article className="group relative flex h-full flex-col rounded-2xl border border-border bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-violet/40 hover:shadow-2xl hover:shadow-brand-violet/10 md:p-7">
                <div className="flex items-start justify-between">
                  <span className="grid size-12 place-items-center rounded-xl border border-border bg-secondary text-brand-violet">
                    <project.icon className="size-6" />
                  </span>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-all after:absolute after:inset-0 after:rounded-2xl group-hover:border-brand-violet/40 group-hover:text-foreground"
                  >
                    <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    <span className="sr-only">View {project.title} on GitHub</span>
                  </a>
                </div>
                <h3 className="mt-5 text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 flex-1 text-pretty leading-relaxed text-muted-foreground">{project.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                  {project.tags.map((tag) => (
                    <li key={tag} className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-muted-foreground">
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <GithubIcon className="size-4" />
            See more on GitHub
            <ArrowUpRight className="size-4" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
