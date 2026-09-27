'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import MacroFraudNetwork from '@/components/MacroFraudNetwork'

export default function FraudNetworkPage() {
  return (
    <main className="min-h-screen bg-background px-5 py-6 text-foreground lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground">
          <ArrowLeft size={15} /> Dashboard
        </Link>
        <div className="mt-8">
          <p className="eyebrow">Step 2 · Macro intelligence graph</p>
          <h1 className="mt-2 font-serif text-4xl font-semibold tracking-tight">Fraud network map</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">Trace relationships across MPs, approving officers, contractors, and shell entities. Hover or focus a node to highlight its connected pathway.</p>
        </div>
        <div className="mt-8 rounded-2xl border border-border bg-card p-2 shadow-sm sm:p-3">
          <MacroFraudNetwork />
        </div>
      </div>
    </main>
  )
}
