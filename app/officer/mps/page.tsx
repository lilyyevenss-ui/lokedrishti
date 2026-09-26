'use client'

import { MapPin, Search, Users } from 'lucide-react'
import { projects } from '@/data/mockData'

export default function OfficerMpsPage() {
  const mps = Array.from(new Map(projects.map((project) => [project.mp, project])).values())
  return <main className="min-h-screen bg-background px-5 py-8 lg:px-10 lg:py-10"><div className="mx-auto max-w-6xl"><div className="mb-8"><p className="eyebrow">Officer workspace</p><h1 className="mt-2 font-serif text-4xl font-semibold tracking-tight">MP directory</h1><p className="mt-2 text-sm text-muted-foreground">All Members of Parliament linked to the monitored MPLADS works.</p></div><div className="mb-5 flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm text-muted-foreground"><Search size={16} /> Search MPs, districts, and works</div><section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{mps.map((project) => <article key={project.mp} className="panel p-5"><div className="flex items-start justify-between"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#6F8574]/12 text-[#6F8574]"><Users size={19} /></span><span className="status-pill status-good">Active</span></div><h2 className="mt-5 text-base font-semibold">{project.mp}</h2><p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground"><MapPin size={13} /> {project.district}</p><div className="mt-5 grid grid-cols-2 gap-3 border-t border-border pt-4"><div><p className="text-2xl font-semibold">1</p><p className="text-[11px] text-muted-foreground">Linked works</p></div><div><p className="text-2xl font-semibold">{project.progress}%</p><p className="text-[11px] text-muted-foreground">Avg progress</p></div></div></article>)}</section></div></main>
}
