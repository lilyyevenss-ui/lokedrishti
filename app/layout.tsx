import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'
import { AppProvider } from '@/context/AppContext'
import { SiteShell } from '@/components/site-shell'

const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'LokeDrishti · MPLADS Intelligence',
  description: 'LokeDrishti — evidence-led public impact intelligence for MPLADS projects.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [{ media: '(prefers-color-scheme: light)', color: '#F6F7F4' }, { media: '(prefers-color-scheme: dark)', color: '#14161A' }],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${fraunces.variable} ${inter.variable} antialiased`}><AppProvider><SiteShell>{children}</SiteShell></AppProvider>{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
