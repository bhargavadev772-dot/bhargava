import { Award, BadgeCheck, ExternalLink } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

type Certification = {
  title: string
  issuer: string
  date: string
  skills: string[]
  url: string
  isDocument?: boolean
}

const certifications: Certification[] = [
  {
    title: 'C++ Standard Template Library Algorithms and Operations',
    issuer: 'Infosys Springboard',
    date: 'Nov 2026',
    skills: ['C++', 'STL', 'Algorithms'],
    url: '/certificate/cpp-stl.pdf',
    isDocument: true,
  },
  {
    title: 'Database Fundamentals: Database Concepts',
    issuer: 'Infosys Springboard',
    date: 'Nov 2026',
    skills: ['DBMS', 'Database Concepts'],
    url: '/certificate/database-fundamentals.pdf',
    isDocument: true,
  },
  {
    title: 'Database Design',
    issuer: 'Infosys Springboard',
    date: 'Nov 2026',
    skills: ['Data Modeling', 'Schema Design'],
    url: '/certificate/database-design.pdf',
    isDocument: true,
  },
  {
    title: 'Python for Data Science',
    issuer: 'NPTEL',
    date: '2025',
    skills: ['Python', 'NumPy', 'Pandas'],
    url: 'https://nptel.ac.in',
  },
  {
    title: 'Machine Learning Specialization',
    issuer: 'Coursera · DeepLearning.AI',
    date: '2025',
    skills: ['Supervised Learning', 'Neural Networks'],
    url: 'https://www.coursera.org/specializations/machine-learning-introduction',
  },
  {
    title: 'Data Structures & Algorithms in C++',
    issuer: 'Coding Ninjas',
    date: '2025',
    skills: ['C++', 'DSA'],
    url: 'https://www.codingninjas.com',
  },
  {
    title: 'SQL (Intermediate)',
    issuer: 'HackerRank',
    date: '2025',
    skills: ['SQL', 'Joins', 'Aggregation'],
    url: 'https://www.hackerrank.com/skills-verification',
  },
  {
    title: 'Introduction to Artificial Intelligence',
    issuer: 'IBM SkillsBuild',
    date: '2025',
    skills: ['AI Fundamentals', 'Ethics'],
    url: 'https://skillsbuild.org',
  },
  {
    title: 'Database Management Systems',
    issuer: 'Infosys Springboard',
    date: '2025',
    skills: ['DBMS', 'Normalization'],
    url: 'https://infyspringboard.onwingspan.com',
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
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue transition-colors hover:text-brand-violet"
                >
                  {cert.isDocument ? 'View Certificate' : 'View credential'}
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
