import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Dev Bhargava — B.Tech Student & Aspiring Software Developer',
  description:
    'Portfolio of Dev Bhargava, a B.Tech student and aspiring software developer focused on C++, Python, DSA, DBMS and AI/ML. Creator of LandGuard AI, an AI-based landslide early warning system.',
  generator: 'v0.app',
  keywords: ['Dev Bhargava', 'Software Developer', 'B.Tech', 'Portfolio', 'AI', 'Machine Learning', 'LandGuard AI'],
  authors: [{ name: 'Dev Bhargava' }],
  openGraph: {
    title: 'Dev Bhargava — Portfolio',
    description: 'B.Tech student and aspiring software developer building with AI/ML, C++ and Python.',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
