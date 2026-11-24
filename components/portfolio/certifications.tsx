import { Award, BadgeCheck, ExternalLink } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

type Certification = {
  title: string
  issuer: string
  date: string
  skills: string[]
  url: string
}

const certifications: Certification[] = [
  {
    title: 'C++ Standard Template Library Algorithms and Operations',
    issuer: 'Infosys Springboard',
    date: 'Completed Nov 18, 2026',
    skills: ['C++', 'STL', 'Algorithms'],
    url: '/certificate/cpp-stl.pdf',
  },
  {
    title: 'Database Fundamentals: Database Concepts',
    issuer: 'Infosys Springboard',
    date: 'Completed Nov 18, 2026',
    skills: ['DBMS', 'Database Concepts'],
    url: '/certificate/database-fundamentals.pdf',
  },
  {
    title: 'Database Design',
    issuer: 'Infosys Springboard',
    date: 'Completed Nov 17, 2026',
    skills: ['Data Modeling', 'Schema Design'],
    url: '/certificate/database-design.pdf',
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32">
      <div aria-hidden="true" className="absolute inset-x-0 top-1/4 -z-10 mx-auto h-72 max-w-4xl rounded-full bg-brand-blue/10 blur-[120px]" />
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials & learning"
          description="Technical certifications that reflect my commitment to continuous learning."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={(i % 3) * 90}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40">
                <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-brand opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-xl bg-secondary text-brand-violet">
                    <Award className="size-5" />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">{cert.date}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-snug">{cert.title}</h3>
                <p className="mt-1.5 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                  <BadgeCheck className="size-4 text-brand-blue" />
                  {cert.issuer}
                </p>
                <ul className="mt-4 flex flex-1 flex-wrap content-start gap-2" aria-label="Skills covered">
                  {cert.skills.map((skill) => (
                    <li key={skill} className="rounded-md bg-secondary px-2 py-1 font-mono text-[11px] text-muted-foreground">
                      {skill}
                    </li>
                  ))}
                </ul>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-brand px-4 py-2 text-sm font-medium text-white shadow-lg shadow-brand-violet/20 transition-transform hover:scale-[1.03]"
                >
                  View Certificate
                  <ExternalLink className="size-3.5" />
                  <span className="sr-only">for {cert.title}</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
