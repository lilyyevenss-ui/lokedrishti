'use client'

import Link from 'next/link'
import { BarChart3, Camera, ClipboardList, MapPin, Moon, Sun } from 'lucide-react'
import { useApp } from '@/context/AppContext'

const links = [
  { href: '/citizen/works', label: 'Local Works Near Me', icon: MapPin },
  { href: '/citizen/verify', label: 'Photo Verification', icon: Camera },
  { href: '/citizen/complaints', label: 'File a Grievance', icon: ClipboardList },
  { href: '/citizen/overview', label: 'Spend Overview', icon: BarChart3 },
]

export function CitizenShell({ children }: { children: React.ReactNode }) {
  const { darkMode, toggleDarkMode } = useApp()
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-4 px-5 py-4 lg:px-8">
          <Link href="/citizen/works" className="mr-auto flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#6F8574] text-white"><MapPin size={18} /></span>
            <span className="font-serif text-lg font-semibold">MPLADS Intelligence <span className="font-sans text-sm font-medium text-muted-foreground">· Citizen Portal</span></span>
          </Link>
          <select aria-label="District selector" defaultValue="Varanasi, UP" className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"><option>Varanasi, UP</option><option>Patna, Bihar</option><option>Gaya, Bihar</option></select>
          <button onClick={toggleDarkMode} className="grid h-9 w-9 place-items-center rounded-lg border border-border hover:bg-muted" aria-label="Toggle theme">{darkMode ? <Sun size={16} /> : <Moon size={16} />}</button>
        </div>
        <nav className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-5 pb-3 lg:px-8" aria-label="Citizen navigation">{links.map(({ href, label, icon: Icon }) => <Link key={href} href={href} className="flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"><Icon size={15} />{label}</Link>)}</nav>
        <div className="border-t border-border/70 bg-[#f5f8f4] dark:bg-[#1d2a20]"><div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2 text-[11px] lg:px-8"><span className="flex items-center gap-2 text-muted-foreground"><span className="h-1.5 w-1.5 rounded-full bg-[#6F9873]" /> Public works data updated 2 hours ago</span><Link href="/citizen/complaints" className="font-semibold text-[#55755d] hover:underline">Need help? File a grievance</Link></div></div>
      </header>
      <main className="mx-auto max-w-7xl px-5 py-8 lg:px-8">{children}</main>
    </div>
  )
}

export function CitizenPage({ children }: { children: React.ReactNode }) { return <CitizenShell>{children}</CitizenShell> }

export const statusLabel = (status: string) => status === 'On track' ? 'In Progress' : status === 'Delayed' ? 'Under Review' : 'In Progress'
export const statusClass = (status: string) => status === 'On track' ? 'bg-[#e4efe6] text-[#3f7049]' : status === 'Delayed' ? 'bg-[#f7e7e5] text-[#8f4d49]' : 'bg-[#f4ecd9] text-[#85652e]'

export function CitizenHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) { return <div className="mb-8"><p className="eyebrow">{eyebrow}</p><h1 className="mt-2 max-w-3xl font-serif text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1><p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">{copy}</p></div> }

export function CitizenFooter() { return <p className="mt-10 border-t border-border pt-5 text-xs text-muted-foreground">Showing public information for Varanasi district · MPLADS Intelligence</p> }

export function CitizenLink({ href, children }: { href: string; children: React.ReactNode }) { return <Link href={href} className="text-sm font-semibold text-[#55755d] underline-offset-4 hover:underline">{children}</Link> }

export function SectionCard({ children, className = '' }: { children: React.ReactNode; className?: string }) { return <section className={`rounded-2xl border border-border bg-card p-5 shadow-sm ${className}`}>{children}</section> }

export function ActionButton({ children, type = 'button', onClick }: { children: React.ReactNode; type?: 'button' | 'submit'; onClick?: () => void }) { return <button type={type} onClick={onClick} className="rounded-lg bg-[#5f7f66] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#4c6953]">{children}</button> }
