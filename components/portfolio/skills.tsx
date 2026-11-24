import { Binary, BrainCircuit, Cpu, Database, FileCode2, Network, Terminal } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const skills = [
  { name: 'C', icon: Terminal, category: 'Language', note: 'Procedural programming, pointers & memory' },
  { name: 'C++', icon: Cpu, category: 'Language', note: 'OOP, STL and problem solving' },
  { name: 'Python', icon: FileCode2, category: 'Language', note: 'Scripting, automation & data analysis' },
  { name: 'SQL', icon: Database, category: 'Database', note: 'Queries, joins and views' },
  { name: 'Data Structures & Algorithms', icon: Binary, category: 'Core CS', note: 'Trees, graphs, DP & complexity analysis' },
  { name: 'DBMS', icon: Network, category: 'Core CS', note: 'ER modelling, normalization & database design' },
  { name: 'AI & Machine Learning', icon: BrainCircuit, category: 'Domain', note: 'Model training & evaluation' },
]

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div aria-hidden="true" className="absolute inset-x-0 top-1/3 -z-10 mx-auto h-72 max-w-4xl rounded-full bg-brand-violet/10 blur-[120px]" />
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="My technical toolkit"
          description="Languages, fundamentals and domains I work with to design and build software."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => (
            <Reveal key={skill.name} delay={(i % 3) * 90} className={i === skills.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-2xl hover:shadow-brand-blue/10">
                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 size-32 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
                />
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-12 place-items-center rounded-xl border border-border bg-secondary text-brand-blue">
                    <skill.icon className="size-6" />
                  </span>
                  <span className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    {skill.category}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{skill.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{skill.note}</p>
                <div aria-hidden="true" className="mt-5 h-px w-full bg-gradient-brand opacity-30 transition-opacity group-hover:opacity-80" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
