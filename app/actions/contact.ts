'use server'

import { validateContact, type ContactErrors, type ContactValues } from '@/lib/contact-validation'

export type ContactState =
  | { status: 'idle' }
  | { status: 'success'; message: string }
  | { status: 'error'; message: string; errors?: ContactErrors }

const FORMSPREE_PATTERN = /^https:\/\/formspree\.io\/f\/[A-Za-z0-9]+$/

function getEndpoint() {
  const endpoint = process.env.FORMSPREE_ENDPOINT?.trim()
  return endpoint && FORMSPREE_PATTERN.test(endpoint) ? endpoint : null
}

export async function isContactConfigured() {
  return getEndpoint() !== null
}

export async function sendContactMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: real visitors never see or fill this field.
  if (String(formData.get('company') ?? '').length > 0) {
    return { status: 'success', message: 'Thanks! Your message has been sent.' }
  }

  const values: ContactValues = {
    name: String(formData.get('name') ?? ''),
    email: String(formData.get('email') ?? ''),
    subject: String(formData.get('subject') ?? ''),
    message: String(formData.get('message') ?? ''),
  }

  const errors = validateContact(values)
  if (Object.keys(errors).length > 0) {
    return { status: 'error', message: 'Please fix the highlighted fields.', errors }
  }

  const endpoint = getEndpoint()
  if (!endpoint) {
    return {
      status: 'error',
      message: 'The contact form is not configured yet. Please reach out by email instead.',
    }
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name: values.name.trim(),
        email: values.email.trim(),
        _replyto: values.email.trim(),
        _subject: `[Portfolio] ${values.subject.trim()}`,
        subject: values.subject.trim(),
        message: values.message.trim(),
      }),
      signal: AbortSignal.timeout(10_000),
      cache: 'no-store',
    })

    if (!response.ok) {
      return {
        status: 'error',
        message: 'Your message could not be sent right now. Please try again or email me directly.',
      }
    }

    return { status: 'success', message: "Thanks! Your message has been sent. I'll get back to you soon." }
  } catch {
    return {
      status: 'error',
      message: 'Network error while sending your message. Please try again or email me directly.',
    }
  }
}
