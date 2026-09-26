'use client'

import { useState } from 'react'
import { ShieldCheck, UserRound } from 'lucide-react'
import type { Role } from '@/context/AppContext'

export function LoginScreen({ onLogin }: { onLogin: (role: Role) => void }) {
  const [selected, setSelected] = useState<Role>('Citizen')
  const roles: Role[] = ['Citizen', 'District Authority (Varanasi)', 'MoSPI Nodal']
  return (
    <main className="grid min-h-screen place-items-center bg-background px-5 py-10">
      <section className="w-full max-w-md rounded-3xl border border-border bg-card p-7 shadow-xl">
        <div className="flex items-center gap-3"><div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#6F8574] text-white"><ShieldCheck size={22} /></div><div><p className="font-serif text-xl font-semibold">MPLADS Intelligence</p><p className="text-xs text-muted-foreground">Evidence-led public impact</p></div></div>
        <div className="mt-9"><p className="eyebrow">Demo access</p><h1 className="mt-2 font-serif text-3xl font-semibold">Choose your workspace</h1><p className="mt-2 text-sm leading-6 text-muted-foreground">Enter the public intelligence workspace as a citizen, district officer, or national reviewer.</p></div>
        <div className="mt-6 space-y-2">{roles.map((role) => <button key={role} onClick={() => setSelected(role)} className={`flex w-full items-center gap-3 rounded-2xl border p-4 text-left transition ${selected === role ? 'border-[#6F8574] bg-[#6F8574]/10' : 'border-border hover:bg-muted'}`}><UserRound size={17} /><span><strong className="block text-sm">Demo {role}</strong><small className="text-xs text-muted-foreground">{role === 'Citizen' ? 'Report and track public works' : 'Review risk signals and evidence'}</small></span></button>)}</div>
        <button onClick={() => onLogin(selected)} className="mt-6 w-full rounded-2xl bg-[#52695a] px-4 py-3 text-sm font-semibold text-white hover:bg-[#43574a]">Continue to intelligence workspace</button>
      </section>
    </main>
  )
}
