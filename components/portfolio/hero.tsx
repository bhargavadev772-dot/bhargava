'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, ArrowDown, MapPin, Sparkles } from 'lucide-react'
import { site } from '@/lib/site'
import { GithubIcon, LeetcodeIcon, LinkedinIcon } from './brand-icons'

const roles = ['Software Developer', 'AI/ML Enthusiast', 'Problem Solver', 'C++ & Python Programmer']

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    const done = !deleting && text === word
    const empty = deleting && text === ''
    const timeout = setTimeout(
      () => {
        if (done) return setDeleting(true)
        if (empty) {
          setDeleting(false)
          setIndex((i) => i + 1)
          return
        }
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
      },
      done ? 1600 : deleting ? 40 : 80,
    )
    return () => clearTimeout(timeout)
  }, [text, deleting, index, words])

  return text
}

export function Hero() {
  const typed = useTypewriter(roles)

  return (
    <section id="home" className="relative isolate flex min-h-svh items-center overflow-hidden pt-24 pb-16">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="animate-float-slow absolute -left-32 top-10 size-[28rem] rounded-full bg-brand-blue/25 blur-[120px]" />
        <div
          className="animate-float-slow absolute -right-24 bottom-0 size-[30rem] rounded-full bg-brand-violet/25 blur-[120px]"
          style={{ animationDelay: '-7s' }}
        />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="animate-fade-up mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur"
            style={{ animationDelay: '0ms' }}
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            Open to internships & collaborations
          </div>

          <h1
            className="animate-fade-up text-balance text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl"
            style={{ animationDelay: '120ms' }}
          >
            {"Hi, I'm "}
            <span className="text-gradient">Dev Bhargava</span>
          </h1>

          <p
            className="animate-fade-up mt-6 font-mono text-lg text-foreground/90 md:text-2xl"
            style={{ animationDelay: '240ms' }}
          >
            <span className="sr-only">Aspiring Software Developer</span>
            <span aria-hidden="true">
              {'> '}
              {typed}
              <span className="animate-blink ml-0.5 inline-block h-[1.1em] w-[3px] translate-y-1 bg-brand-violet" />
            </span>
          </p>

          <p
            className="animate-fade-up mx-auto mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground md:text-lg"
            style={{ animationDelay: '360ms' }}
          >
            A B.Tech Computer Science and Engineering (AI & ML) student at Jaypee University of Engineering and
            Technology, passionate about building intelligent, efficient software and solving problems with data
            structures & algorithms.
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animationDelay: '480ms' }}
          >
            <a
              href="#projects"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3 font-medium text-white shadow-xl shadow-brand-violet/25 transition-transform hover:scale-[1.03] sm:w-auto"
            >
              View my work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-secondary/50 px-6 py-3 font-medium text-foreground backdrop-blur transition-colors hover:bg-secondary sm:w-auto"
            >
              <Sparkles className="size-4 text-brand-blue" />
              {"Let's connect"}
            </a>
          </div>

          <div
            className="animate-fade-up mt-10 flex items-center justify-center gap-5 text-muted-foreground"
            style={{ animationDelay: '600ms' }}
          >
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
              <GithubIcon className="size-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
              <LinkedinIcon className="size-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href={site.leetcode} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
              <LeetcodeIcon className="size-5" />
              <span className="sr-only">LeetCode</span>
            </a>
            <span className="h-4 w-px bg-border" aria-hidden="true" />
            <span className="inline-flex items-center gap-1.5 text-sm">
              <MapPin className="size-4" />
              India
            </span>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground md:[@media(min-height:760px)]:flex"
      >
        Scroll
        <ArrowDown className="size-4 animate-bounce" />
      </a>
    </section>
  )
}
