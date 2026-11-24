import { CalendarDays, GraduationCap } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const coursework = [
  'Artificial Intelligence & Machine Learning',
  'Data Structures & Algorithms',
  'Database Management Systems',
  'Programming in C, C++ & Python',
]

export function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <SectionHeading eyebrow="Education" title="Academic journey" />

        <Reveal>
          <ol className="relative border-l border-border pl-8 md:pl-12">
            <li className="relative">
              <span className="absolute -left-8 top-6 grid size-9 -translate-x-1/2 place-items-center rounded-full bg-gradient-brand text-white shadow-lg shadow-brand-violet/30 md:-left-12">
                <GraduationCap className="size-4" />
              </span>

              <div className="rounded-2xl border border-border bg-card/60 p-6 md:p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold md:text-2xl">Bachelor of Technology (B.Tech)</h3>
                    <p className="mt-1 text-muted-foreground">Computer Science and Engineering (AI & ML)</p>
                    <p className="mt-1 text-sm font-medium text-brand-blue">
                      Jaypee University of Engineering and Technology
                    </p>
                  </div>
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1.5 font-mono text-sm">
                    <CalendarDays className="size-4 text-brand-blue" />
                    2025 – 2029
                  </span>
                </div>

                <div className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-400">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  Currently pursuing
                </div>

                <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                  Building a strong foundation in computer science fundamentals, software engineering and emerging
                  technologies, while actively applying classroom concepts to hands-on projects.
                </p>

                <h4 className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Areas of focus
                </h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {coursework.map((course) => (
                    <li key={course} className="rounded-full border border-border px-3 py-1.5 text-sm text-foreground/90">
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
