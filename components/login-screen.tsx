'use client'

import { useState } from 'react'
import { ArrowRight, Building2, ChevronRight, Shield, UserRound } from 'lucide-react'
import type { Role } from '@/context/AppContext'

type DemoProfile = { title: string; role: Role; name: string; district: string; state: string; email: string; description: string; icon: typeof UserRound }

const demoProfiles: DemoProfile[] = [
  { title: 'Demo Citizen', role: 'Citizen', name: 'Asha Sharma', district: 'Varanasi', state: 'Uttar Pradesh', email: 'citizen@mplads.demo', description: 'Varanasi · Public view', icon: UserRound },
  { title: 'Demo District Officer', role: 'District Authority (Varanasi)', name: 'Ravi Singh', district: 'Varanasi', state: 'Uttar Pradesh', email: 'officer@mplads.demo', description: 'Varanasi · District view', icon: Shield },
  { title: 'Demo MoSPI Nodal Official', role: 'MoSPI Nodal', name: 'Meera Iyer', district: 'New Delhi', state: 'Delhi', email: 'nodal@mplads.demo', description: 'National · Audit view', icon: Building2 },
]

export function LoginScreen({ onLogin }: { onLogin: (role: Role) => void }) {
  const [selected, setSelected] = useState<Role>('Citizen')
  const [name, setName] = useState('')
  const [district, setDistrict] = useState('')
  const [state, setState] = useState('')
  const [email, setEmail] = useState('')
  const [designation, setDesignation] = useState<Role>('Citizen')
  const applyProfile = (profile: DemoProfile) => {
    setSelected(profile.role)
    setName(profile.name)
    setDistrict(profile.district)
    setState(profile.state)
    setEmail(profile.email)
    setDesignation(profile.role)
    onLogin(profile.role)
  }
  const canContinue = Boolean(name.trim() && district.trim() && state.trim() && email.trim() && designation)

  return (
    <main className="min-h-screen grid grid-cols-1 bg-white text-[#26332d] lg:grid-cols-12">
      <section className="relative flex min-h-[420px] flex-col justify-between bg-[#F6F7F4] px-7 py-9 sm:px-12 lg:col-span-7 lg:min-h-screen lg:px-16 lg:py-14">
        <div><p className="font-mono text-xs tracking-[0.18em] text-[#5B6560]">PUBLIC SPEND · IN PLAIN SIGHT</p><div className="mt-16 max-w-2xl sm:mt-24"><h2 className="font-serif text-5xl leading-[1.03] tracking-[-0.04em] sm:text-6xl lg:text-7xl">See where public money <em className="font-serif not-italic italic text-[#6F8574]">makes a difference.</em></h2><p className="mt-8 max-w-lg text-base leading-7 text-[#5B6560]">A decision intelligence layer for every MPLADS work — from sanctioned idea to completed impact.</p></div></div>
        <div className="mt-16 grid max-w-md grid-cols-2 gap-8 border-t border-[#D5DCD6] pt-6"><div><p className="font-serif text-3xl">25 years</p><p className="mt-1 text-xs text-[#718078]">of public works data</p></div><div><p className="font-serif text-3xl">28 states</p><p className="mt-1 text-xs text-[#718078]">connected to the grid</p></div></div>
      </section>
      <section className="flex items-start bg-white px-7 py-10 sm:px-12 lg:col-span-5 lg:px-14 lg:py-14"><div className="w-full max-w-md"><p className="font-mono text-xs tracking-[0.16em] text-[#718078]">01 / ACCESS PORTAL</p><h1 className="mt-5 font-serif text-4xl tracking-[-0.03em] text-[#26332d]">Welcome back.</h1><p className="mt-3 text-sm leading-6 text-[#718078]">Enter your details or choose a quick demo profile to explore the system.</p>
        <form className="mt-8 grid gap-4" onSubmit={(event) => { event.preventDefault(); if (canContinue) onLogin(designation) }}><label className="text-xs font-medium text-[#435149]">Full name<input required value={name} onChange={(event) => setName(event.target.value)} placeholder="e.g. Priya Sharma" className="mt-2 w-full rounded-lg border border-[#D9E0DA] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#6F8574] focus:ring-2 focus:ring-[#6F8574]/15" /></label><div className="grid grid-cols-2 gap-3"><label className="text-xs font-medium text-[#435149]">District<input required value={district} onChange={(event) => setDistrict(event.target.value)} placeholder="Varanasi" className="mt-2 w-full rounded-lg border border-[#D9E0DA] px-3 py-3 text-sm outline-none focus:border-[#6F8574]" /></label><label className="text-xs font-medium text-[#435149]">State<input required value={state} onChange={(event) => setState(event.target.value)} placeholder="Uttar Pradesh" className="mt-2 w-full rounded-lg border border-[#D9E0DA] px-3 py-3 text-sm outline-none focus:border-[#6F8574]" /></label></div><label className="text-xs font-medium text-[#435149]">Designation<select required value={designation} onChange={(event) => setDesignation(event.target.value as Role)} className="mt-2 w-full rounded-lg border border-[#D9E0DA] bg-white px-4 py-3 text-sm outline-none focus:border-[#6F8574]"><option value="Citizen">Citizen</option><option value="District Authority (Varanasi)">District Officer</option><option value="MoSPI Nodal">MoSPI Nodal Official</option></select></label><label className="text-xs font-medium text-[#435149]">Email address<input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@department.gov.in" className="mt-2 w-full rounded-lg border border-[#D9E0DA] px-4 py-3 text-sm outline-none focus:border-[#6F8574]" /></label><button type="submit" disabled={!canContinue} className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-[#6F8574] py-3 text-sm font-medium text-white transition hover:bg-[#5C7061] disabled:cursor-not-allowed disabled:opacity-45">Enter intelligence system <ArrowRight size={16} /></button></form>
        <div className="my-8 flex items-center gap-3"><span className="h-px flex-1 bg-[#E2E7E2]" /><span className="whitespace-nowrap text-[10px] tracking-[0.14em] text-[#89958D]">OR TRY A QUICK DEMO</span><span className="h-px flex-1 bg-[#E2E7E2]" /></div><div className="grid gap-3">{demoProfiles.map((profile) => { const Icon = profile.icon; return <button key={profile.role} type="button" onClick={() => applyProfile(profile)} className={`group flex items-center gap-3 rounded-lg border p-3.5 text-left transition hover:border-[#B9C8BB] hover:bg-[#EFEFEA] ${selected === profile.role ? 'border-[#AFC2B3] bg-[#F8F9F7]' : 'border-[#E2E7E2] bg-[#F8F9F7]'}`}><span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-white text-[#6F8574] shadow-sm"><Icon size={17} strokeWidth={1.8} /></span><span className="min-w-0 flex-1"><strong className="block text-sm font-medium text-[#35443B]">{profile.title}</strong><small className="mt-0.5 block text-xs text-[#89958D]">{profile.description}</small></span><ChevronRight size={17} className="text-[#9AA69E] transition group-hover:translate-x-0.5" /></button>})}</div>
      </div></section>
    </main>
  )
}
