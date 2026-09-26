'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { AlertTriangle, BarChart3, FileText, Home, Map, Network, Sun, Moon, ShieldCheck, Users, X } from 'lucide-react'
import { CitizenShell } from '@/components/citizen-shell'
import { useApp } from '@/context/AppContext'
import { LoginScreen } from '@/components/login-screen'

const navItems = [
  { href: '/', label: 'Overview', icon: Home },
  { href: '/map', label: 'India Map', icon: Map },
  { href: '/fraud-network', label: 'Fraud Network', icon: Network },
  { href: '/alerts', label: 'Risk Center', icon: AlertTriangle },
  { href: '/complaints', label: 'Citizen Complaints', icon: FileText },
  { href: '/compliance', label: 'Compliance', icon: ShieldCheck },
  { href: '/reports', label: 'Reports', icon: BarChart3 },
  { href: '/officer/mps', label: 'MP directory', icon: Users },
  { href: '/officer/summary', label: 'Summary', icon: FileText },
]

export function SiteShell({ children }: { children: React.ReactNode }) {
  const { darkMode, toggleDarkMode, role, authenticated, login } = useApp()
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    document.documentElement.style.colorScheme = darkMode ? 'dark' : 'light'
  }, [darkMode])

  useEffect(() => {
    if (authenticated && role === 'Citizen' && pathname === '/') router.replace('/citizen/works')
  }, [authenticated, pathname, role, router])

  if (!authenticated) return <LoginScreen onLogin={(nextRole) => { login(nextRole); router.replace(nextRole === 'Citizen' ? '/citizen/works' : '/') }} />
  if (role === 'Citizen') return pathname.startsWith('/citizen') ? <>{children}</> : <CitizenShell><div className="min-h-[60vh]" /></CitizenShell>

  return (
    <div className="min-h-screen bg-background text-foreground">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[248px] flex-col border-r border-border bg-card lg:flex">
        <div className="flex h-[72px] items-center gap-3 border-b border-border px-5">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#6F8574] text-white"><Network size={19} /></div>
          <div><div className="font-serif text-[17px] font-semibold leading-none">MPLADS</div><div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.23em] text-muted-foreground">Intelligence</div></div>
        </div>
        <div className="px-4 py-6"><p className="eyebrow px-3">Workspace</p><nav className="mt-3 space-y-1" aria-label="Main navigation">{navItems.map(({ href, label, icon: Icon }) => <Link key={href} href={href} className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"><Icon size={17} />{label}</Link>)}</nav></div>
        <div className="mt-auto border-t border-border p-4"><div className="rounded-xl bg-muted p-3"><p className="text-[10px] uppercase tracking-wider text-muted-foreground">Signed in as</p><p className="mt-1 truncate text-xs font-semibold">{role}</p></div><button onClick={toggleDarkMode} className="mt-3 flex w-full items-center justify-between rounded-xl border border-border px-3 py-2.5 text-xs font-medium hover:bg-muted"><span>{darkMode ? 'Light mode' : 'Night mode'}</span>{darkMode ? <Sun size={16} /> : <Moon size={16} />}</button></div>
      </aside>
      <div className="lg:pl-[248px]">{children}</div>
      <div className="fixed bottom-4 left-4 right-4 z-40 flex items-center justify-between rounded-2xl border border-border bg-card/95 p-2 shadow-lg backdrop-blur lg:hidden"><Link href="/" className="grid h-10 w-10 place-items-center rounded-xl bg-[#6F8574] text-white"><Home size={17} /></Link>{navItems.slice(1, 5).map(({ href, label, icon: Icon }) => <Link key={href} href={href} aria-label={label} className="grid h-10 w-10 place-items-center rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground"><Icon size={17} /></Link>)}<button onClick={toggleDarkMode} aria-label="Toggle theme" className="grid h-10 w-10 place-items-center rounded-xl text-muted-foreground hover:bg-muted"><Sun size={17} /></button></div>
    </div>
  )
}

export function MobileCloseIcon() { return <X size={16} /> }

