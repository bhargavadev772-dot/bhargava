'use client'

import { startTransition, useActionState, useEffect, useRef, useState, type FormEvent } from 'react'
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react'
import { sendContactMessage, type ContactState } from '@/app/actions/contact'
import {
  contactLimits,
  validateContact,
  type ContactErrors,
  type ContactField,
  type ContactValues,
} from '@/lib/contact-validation'
import { site } from '@/lib/site'
import { cn } from '@/lib/utils'

const emptyValues: ContactValues = { name: '', email: '', subject: '', message: '' }

const fields: { name: ContactField; label: string; type?: string; autoComplete?: string; placeholder: string }[] = [
  { name: 'name', label: 'Full Name', autoComplete: 'name', placeholder: 'Jane Doe' },
  { name: 'email', label: 'Email Address', type: 'email', autoComplete: 'email', placeholder: 'jane@company.com' },
  { name: 'subject', label: 'Subject', placeholder: 'Internship opportunity' },
]

const inputClass =
  'w-full rounded-xl border bg-background/70 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/30 disabled:opacity-60'

export function ContactForm({ configured }: { configured: boolean }) {
  const [state, formAction, isPending] = useActionState<ContactState, FormData>(sendContactMessage, {
    status: 'idle',
  })
  const [values, setValues] = useState<ContactValues>(emptyValues)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [touched, setTouched] = useState(false)
  const submittingRef = useRef(false)
  const statusRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (state.status === 'idle') return
    submittingRef.current = false
    if (state.status === 'success') {
      setValues(emptyValues)
      setErrors({})
      setTouched(false)
    } else if (state.errors) {
      setErrors(state.errors)
    }
    statusRef.current?.focus()
  }, [state])

  function update(field: ContactField, value: string) {
    const next = { ...values, [field]: value }
    setValues(next)
    if (touched) setErrors(validateContact(next))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!configured || isPending || submittingRef.current) return

    setTouched(true)
    const nextErrors = validateContact(values)
    setErrors(nextErrors)
    const firstInvalid = (Object.keys(nextErrors) as ContactField[])[0]
    if (firstInvalid) {
      event.currentTarget.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus()
      return
    }

    submittingRef.current = true
    const formData = new FormData(event.currentTarget)
    startTransition(() => formAction(formData))
  }

  const disabled = !configured || isPending

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-busy={isPending}
      className="flex flex-col gap-5 rounded-2xl border border-border bg-background/60 p-5 backdrop-blur md:p-7"
    >
      <div>
        <h3 className="text-lg font-semibold">Send me a message</h3>
        <p className="mt-1 text-sm text-muted-foreground">All fields are required.</p>
      </div>

      {!configured && (
        <div
          role="status"
          className="flex items-start gap-3 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-200"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <p>
            {'The contact form is not connected yet. Please email me directly at '}
            <a href={`mailto:${site.email}`} className="font-medium underline underline-offset-2">
              {site.email}
            </a>
            .
          </p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.name} className={cn('flex flex-col gap-2', field.name === 'subject' && 'sm:col-span-2')}>
            <label htmlFor={`contact-${field.name}`} className="text-sm font-medium">
              {field.label}
            </label>
            <input
              id={`contact-${field.name}`}
              name={field.name}
              type={field.type ?? 'text'}
              autoComplete={field.autoComplete}
              placeholder={field.placeholder}
              maxLength={contactLimits[field.name]}
              required
              disabled={disabled}
              value={values[field.name]}
              onChange={(e) => update(field.name, e.target.value)}
              aria-invalid={Boolean(errors[field.name])}
              aria-describedby={errors[field.name] ? `contact-${field.name}-error` : undefined}
              className={cn(inputClass, errors[field.name] ? 'border-destructive' : 'border-border')}
            />
            {errors[field.name] && (
              <p id={`contact-${field.name}-error`} className="text-xs text-destructive">
                {errors[field.name]}
              </p>
            )}
          </div>
        ))}

        <div className="flex flex-col gap-2 sm:col-span-2">
          <div className="flex items-baseline justify-between">
            <label htmlFor="contact-message" className="text-sm font-medium">
              Message
            </label>
            <span className="font-mono text-xs text-muted-foreground">
              {values.message.length}/{contactLimits.message}
            </span>
          </div>
          <textarea
            id="contact-message"
            name="message"
            rows={6}
            placeholder="Tell me about the role, project or idea..."
            maxLength={contactLimits.message}
            required
            disabled={disabled}
            value={values.message}
            onChange={(e) => update('message', e.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'contact-message-error' : undefined}
            className={cn(inputClass, 'resize-y', errors.message ? 'border-destructive' : 'border-border')}
          />
          {errors.message && (
            <p id="contact-message-error" className="text-xs text-destructive">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <div className="sr-only" aria-hidden="true">
        <label htmlFor="contact-company">Company</label>
        <input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div ref={statusRef} tabIndex={-1} aria-live="polite" className="outline-none">
        {state.status === 'success' && (
          <div className="flex items-start gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-200">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            <p>{state.message}</p>
          </div>
        )}
        {state.status === 'error' && !state.errors && (
          <div
            role="alert"
            className="flex items-start gap-3 rounded-xl border border-destructive/40 bg-destructive/10 p-4 text-sm text-red-200"
          >
            <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            <p>{state.message}</p>
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={disabled}
        className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-gradient-brand px-7 py-3.5 font-medium text-white shadow-xl shadow-brand-violet/30 transition-transform hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 max-sm:w-full"
      >
        {isPending ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          <>
            <Send className="size-4" aria-hidden="true" />
            Send Message
          </>
        )}
      </button>
    </form>
  )
}
