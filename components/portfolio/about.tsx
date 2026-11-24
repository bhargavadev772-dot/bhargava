import { Brain, Code2, Rocket, Target } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const highlights = [
  { icon: Code2, title: 'Clean Code', text: 'Writing readable, efficient and well-structured programs.' },
  { icon: Brain, title: 'AI & ML', text: 'Applying machine learning to solve real-world problems.' },
  { icon: Target, title: 'Problem Solving', text: 'Strong grip on DSA and analytical thinking.' },
  { icon: Rocket, title: 'Fast Learner', text: 'Constantly exploring new tools and technologies.' },
]

const stats = [
  { value: '7+', label: 'Core skills' },
  { value: '5+', label: 'Projects built' },
  { value: '2029', label: 'Graduating' },
]

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading eyebrow="About me" title="Curious mind, builder at heart" />

        <div className="grid items-start gap-10 lg:grid-cols-5 lg:gap-14">
          <Reveal className="lg:col-span-3">
            <div className="space-y-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              <p>
                {"I'm "}
                <span className="font-medium text-foreground">Dev Bhargava</span>, a B.Tech student and aspiring
                software developer with a strong foundation in programming, data structures and database systems.
              </p>
              <p>
                {"I'm especially drawn to "}
                <span className="font-medium text-foreground">Artificial Intelligence and Machine Learning</span> and
                how they can be used to create meaningful impact — like my project LandGuard AI, an early warning system
                designed to help save lives in landslide-prone regions.
              </p>
              <p>
                {"I'm currently looking for internship opportunities where I can learn from experienced engineers, contribute to real products and grow as a developer."}
              </p>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-border bg-card/60 p-4 text-center md:p-5">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-gradient text-2xl font-semibold md:text-3xl">{stat.value}</dd>
                  <dd className="mt-1 text-xs text-muted-foreground md:text-sm">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
            {highlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="group flex items-start gap-4 rounded-2xl border border-border bg-card/60 p-5 transition-colors hover:border-brand-violet/40">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-brand-blue transition-colors group-hover:text-brand-violet">
                    <item.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
