'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'
import {
  ArrowUpRight,
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react'

import { site } from '@/lib/site'
import {
  GithubIcon,
  LeetcodeIcon,
  LinkedinIcon,
} from './brand-icons'
import { ProfessionalPresence } from './professional-presence'
import { Reveal } from './reveal'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mrpqrrzw'

const channels = [
  {
    label: 'LinkedIn',
    value: site.linkedin.replace('https://www.', ''),
    href: site.linkedin,
    icon: LinkedinIcon,
  },
  {
    label: 'GitHub',
    value: site.github.replace('https://', ''),
    href: site.github,
    icon: GithubIcon,
  },
  {
    label: 'LeetCode',
    value: site.leetcode.replace('https://', ''),
    href: site.leetcode,
    icon: LeetcodeIcon,
  },
]

export function Contact() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'success' | 'error' | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    setLoading(true)
    setStatus(null)

    const formData = new FormData(form)

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 md:px-14 md:py-20">

            {/* Background Effects */}
            <div aria-hidden="true" className="absolute inset-0 -z-10">
              <div className="absolute -left-20 -top-20 size-80 rounded-full bg-brand-blue/25 blur-[100px]" />
              <div className="absolute -bottom-24 -right-16 size-96 rounded-full bg-brand-violet/25 blur-[100px]" />
              <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
            </div>

            {/* Heading */}
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-brand-blue">
                Contact
              </p>

              <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                Let's build something{' '}
                <span className="text-gradient">
                  great together
                </span>
              </h2>

              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground md:text-lg">
                Have an opportunity, project idea, or just want to
                connect? Send me a message. I'd love to hear from you!
              </p>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-12 max-w-2xl space-y-5"
            >
              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Contact Message"
              />

              {/* Name and Email */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Full Name
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    maxLength={100}
                    autoComplete="name"
                    className="w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-violet"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email Address
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    maxLength={254}
                    autoComplete="email"
                    className="w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-violet"
                  />
                </div>

              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-medium"
                >
                  Subject
                </label>

                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  required
                  maxLength={150}
                  className="w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-violet"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Write your message here..."
                  required
                  maxLength={5000}
                  className="w-full resize-y rounded-xl border border-border bg-background/70 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-violet"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 font-medium text-white shadow-xl shadow-brand-violet/25 transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {loading ? 'Sending...' : 'Send Message'}
                <Send className="size-4" />
              </button>

              {/* Success Message */}
              {status === 'success' && (
                <p
                  role="status"
                  className="flex items-center gap-2 text-sm text-emerald-500"
                >
                  <CheckCircle className="size-4" />
                  Message sent successfully! Thank you for contacting me.
                </p>
              )}

              {/* Error Message */}
              {status === 'error' && (
                <p
                  role="alert"
                  className="flex items-center gap-2 text-sm text-red-500"
                >
                  <AlertCircle className="size-4" />
                  Message could not be sent. Please try again later.
                </p>
              )}

            </form>

            {/* Social Links */}
            <ul className="mx-auto mt-14 grid max-w-4xl gap-4 md:grid-cols-3">
              {channels.map((channel) => (
                <li key={channel.label}>
                  <a
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-background/60 p-4 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-brand-violet/40"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-foreground transition-colors group-hover:text-brand-blue">
                      <channel.icon className="size-5" />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-medium">
                        {channel.label}
                      </span>

                      <span className="block truncate text-xs text-muted-foreground">
                        {channel.value}
                      </span>
                    </span>

                    <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Professional Presence */}
            <ProfessionalPresence />

          </div>
        </Reveal>
      </div>
    </section>
  )
}
