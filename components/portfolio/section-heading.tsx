import { Reveal } from './reveal'

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground md:text-lg">{description}</p>
      ) : null}
    </Reveal>
  )
}
