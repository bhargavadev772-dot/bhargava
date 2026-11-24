export type ContactField = 'name' | 'email' | 'subject' | 'message'

export type ContactValues = Record<ContactField, string>

export type ContactErrors = Partial<Record<ContactField, string>>

export const contactLimits: Record<ContactField, number> = {
  name: 100,
  email: 254,
  subject: 150,
  message: 5000,
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {}
  const name = values.name.trim()
  const email = values.email.trim()
  const subject = values.subject.trim()
  const message = values.message.trim()

  if (!name) errors.name = 'Please enter your full name.'
  else if (name.length < 2) errors.name = 'Name must be at least 2 characters.'
  else if (name.length > contactLimits.name) errors.name = `Name must be under ${contactLimits.name} characters.`

  if (!email) errors.email = 'Please enter your email address.'
  else if (email.length > contactLimits.email || !EMAIL_PATTERN.test(email))
    errors.email = 'Please enter a valid email address.'

  if (!subject) errors.subject = 'Please enter a subject.'
  else if (subject.length < 3) errors.subject = 'Subject must be at least 3 characters.'
  else if (subject.length > contactLimits.subject)
    errors.subject = `Subject must be under ${contactLimits.subject} characters.`

  if (!message) errors.message = 'Please write a message.'
  else if (message.length < 10) errors.message = 'Message must be at least 10 characters.'
  else if (message.length > contactLimits.message)
    errors.message = `Message must be under ${contactLimits.message} characters.`

  return errors
}
