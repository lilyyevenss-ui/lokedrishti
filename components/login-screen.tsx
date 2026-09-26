'use client'

import { useState } from 'react'
import { ArrowRight, Check, ShieldCheck, UserRound } from 'lucide-react'
import type { Role } from '@/context/AppContext'

type DemoProfile = {
  title: string
  role: Role
  name: string
  district: string
  state: string
  email: string
  description: string
}

const demoProfiles: DemoProfile[] = [
  { title: 'Demo Citizen', role: 'Citizen', name: 'Asha Sharma', district: 'Varanasi', state: 'Uttar Pradesh', email: 'citizen@mplads.demo', description: 'See local works and raise a grievance.' },
  { title: 'Demo District Officer', role: 'District Authority (Varanasi)', name: 'Ravi Singh', district: 'Varanasi', state: 'Uttar Pradesh', email: 'officer@mplads.demo', description: 'Review delivery, evidence, and inspections.' },
  { title: 'Demo MoSPI Nodal Official', role: 'MoSPI Nodal', name: 'Meera Iyer', district: 'New Delhi', state: 'Delhi', email: 'nodal@mplads.demo', description: 'Monitor national risk and compliance signals.' },
]

export function LoginScreen({ onLogin }: { onLogin: (role: Role) => void }) {
  const [selected, setSelected] = useState<Role>('Citizen')
  const [name, setName] = useState('')
  const [district, setDistrict] = useState('')
  const [state, setState] = useState('')
  const [email, setEmail] = useState('')

  const applyProfile = (profile: DemoProfile) => {
    setSelected(profile.role)
    setName(profile.name)
    setDistrict(profile.district)
    setState(profile.state)
    setEmail(profile.email)
    onLogin(profile.role)
  }

  const canContinue = name.trim() && district.trim() && state.trim() && email.trim()

  return (
    <main className="min-h-screen bg-background px-5 py-10 text-foreground sm:px-8">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-5xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl lg:grid-cols-[0.85fr_1.15fr]">
          <div className="hidden bg-[#52695a] p-10 text-white lg:flex lg:flex-col lg:justify-between">
            <div><div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15"><ShieldCheck size={24} /></div><p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-white/70">Public works intelligence</p><h2 className="mt-4 max-w-sm font-serif text-4xl font-semibold leading-tight">Make every public rupee visible.</h2><p className="mt-5 max-w-sm text-sm leading-7 text-white/75">A simple workspace for citizens and officials to understand delivery, evidence, and risk.</p></div>
            <p className="text-xs text-white/60">MPLADS Intelligence System · Demo environment</p>
          </div>
          <div className="p-6 sm:p-10">
            <div className="flex items-center gap-3 lg:hidden"><div className="grid h-10 w-10 place-items-center rounded-xl bg-[#6F8574] text-white"><ShieldCheck size={20} /></div><span className="font-serif text-lg font-semibold">MPLADS Intelligence System</span></div>
            <div className="mt-7 lg:mt-0"><p className="eyebrow">Secure demo access</p><h1 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">MPLADS Intelligence System</h1><p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground">Enter your basic details, or choose a quick demo profile below.</p></div>
            <form className="mt-7 grid gap-4 sm:grid-cols-2" onSubmit={(event) => { event.preventDefault(); if (canContinue) onLogin(selected) }}>
              <label className="text-xs font-semibold">Full name<input required value={name} onChange={(event) => setName(event.target.value)} placeholder="Your full name" className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-3 text-sm outline-none focus:border-[#6F8574]" /></label>
              <label className="text-xs font-semibold">Email address<input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="name@example.com" className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-3 text-sm outline-none focus:border-[#6F8574]" /></label>
              <label className="text-xs font-semibold">District<input required value={district} onChange={(event) => setDistrict(event.target.value)} placeholder="e.g. Varanasi" className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-3 text-sm outline-none focus:border-[#6F8574]" /></label>
              <label className="text-xs font-semibold">State<input required value={state} onChange={(event) => setState(event.target.value)} placeholder="e.g. Uttar Pradesh" className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-3 text-sm outline-none focus:border-[#6F8574]" /></label>
              <button type="submit" disabled={!canContinue} className="flex items-center justify-center gap-2 rounded-xl bg-[#52695a] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#43574a] disabled:cursor-not-allowed disabled:opacity-45 sm:col-span-2">Continue with entered details <ArrowRight size={16} /></button>
            </form>
            <div className="my-7 flex items-center gap-3"><span className="h-px flex-1 bg-border" /><span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Quick demo profiles</span><span className="h-px flex-1 bg-border" /></div>
            <div className="grid gap-3">
              {demoProfiles.map((profile) => <button key={profile.role} type="button" onClick={() => applyProfile(profile)} className={`group flex items-start gap-3 rounded-2xl border p-4 text-left transition hover:-translate-y-0.5 hover:border-[#6F8574] hover:shadow-md ${selected === profile.role ? 'border-[#6F8574] bg-[#6F8574]/10' : 'border-border bg-background'}`}><div className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl ${selected === profile.role ? 'bg-[#52695a] text-white' : 'bg-muted text-muted-foreground'}`}>{selected === profile.role ? <Check size={15} /> : <UserRound size={15} />}</div><span className="min-w-0"><strong className="block text-sm">{profile.title}</strong><small className="mt-1 block text-xs text-muted-foreground">{profile.district}, {profile.state} · {profile.description}</small></span></button>)}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
