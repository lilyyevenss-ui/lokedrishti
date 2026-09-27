'use client'

import { useMemo, useState } from 'react'

type NodeKind = 'mp' | 'officer' | 'contractor' | 'shell'

type NetworkNode = {
  id: string
  kind: NodeKind
  name: string
  district: string
  cases: number
  amount: string
}

const columns: { kind: NodeKind; title: string }[] = [
  { kind: 'mp', title: 'MEMBERS OF PARLIAMENT' },
  { kind: 'officer', title: 'APPROVING OFFICERS' },
  { kind: 'contractor', title: 'CONTRACTORS' },
  { kind: 'shell', title: 'SHELL / SUPPLIER ENTITIES' },
]

const nodes: NetworkNode[] = [
  { id: 'mp-manoj', kind: 'mp', name: 'Shri Manoj Paswan', district: 'Gaya', cases: 3, amount: '₹191 L flagged' },
  { id: 'mp-anil', kind: 'mp', name: 'Shri Anil Sinha', district: 'Patna', cases: 2, amount: '₹126 L flagged' },
  { id: 'mp-rajesh', kind: 'mp', name: 'Shri Rajesh Mishra', district: 'Varanasi', cases: 4, amount: '₹238 L flagged' },
  { id: 'off-gowda', kind: 'officer', name: 'M. Gowda', district: 'Mysuru', cases: 2, amount: '₹84 L flagged' },
  { id: 'off-prasad', kind: 'officer', name: 'R.S. Prasad', district: 'Patna', cases: 3, amount: '₹147 L flagged' },
  { id: 'off-kumar', kind: 'officer', name: 'A. Kumar', district: 'Gaya', cases: 4, amount: '₹191 L flagged' },
  { id: 'off-tiwari', kind: 'officer', name: 'B.K. Tiwari', district: 'Varanasi', cases: 3, amount: '₹163 L flagged' },
  { id: 'off-venkatesh', kind: 'officer', name: 'K. Venkatesh', district: 'Anantapur', cases: 2, amount: '₹72 L flagged' },
  { id: 'con-magadh', kind: 'contractor', name: 'Magadh Nirman Co.', district: 'Gaya', cases: 5, amount: '₹244 L flagged' },
  { id: 'con-chamundi', kind: 'contractor', name: 'Chamundi Engineering', district: 'Mysuru', cases: 3, amount: '₹119 L flagged' },
  { id: 'con-rayalaseema', kind: 'contractor', name: 'Rayalaseema Works LLP', district: 'Anantapur', cases: 2, amount: '₹93 L flagged' },
  { id: 'con-purvanchal', kind: 'contractor', name: 'Purvanchal Roadways', district: 'Varanasi', cases: 4, amount: '₹217 L flagged' },
  { id: 'con-bodh', kind: 'contractor', name: 'Bodh Infra Projects', district: 'Patna', cases: 2, amount: '₹108 L flagged' },
  { id: 'shell-aadi', kind: 'shell', name: 'Aadi Suppliers', district: 'Varanasi', cases: 3, amount: '₹191 L flagged' },
  { id: 'shell-nirman', kind: 'shell', name: 'Nirman Material Hub', district: 'Patna', cases: 2, amount: '₹126 L flagged' },
  { id: 'shell-srk', kind: 'shell', name: 'SRK Trading Enterprises', district: 'Varanasi', cases: 4, amount: '₹238 L flagged' },
  { id: 'shell-kaveri', kind: 'shell', name: 'Kaveri Sand & Aggregates', district: 'Mysuru', cases: 2, amount: '₹84 L flagged' },
]

const edges = [
  ['mp-manoj', 'off-kumar'], ['mp-manoj', 'off-prasad'], ['mp-anil', 'off-prasad'], ['mp-rajesh', 'off-tiwari'],
  ['off-gowda', 'con-chamundi'], ['off-prasad', 'con-bodh'], ['off-kumar', 'con-magadh'], ['off-tiwari', 'con-purvanchal'], ['off-venkatesh', 'con-rayalaseema'],
  ['con-magadh', 'shell-nirman'], ['con-magadh', 'shell-srk'], ['con-chamundi', 'shell-kaveri'], ['con-purvanchal', 'shell-aadi'], ['con-bodh', 'shell-nirman'], ['con-rayalaseema', 'shell-kaveri'],
]

const styles: Record<NodeKind, { accent: string; badge: string; label: string }> = {
  mp: { accent: 'border-l-sky-400', badge: 'bg-sky-100 text-sky-700', label: 'MP' },
  officer: { accent: 'border-l-purple-400', badge: 'bg-purple-100 text-purple-700', label: 'OFFICER' },
  contractor: { accent: 'border-l-amber-400', badge: 'bg-amber-100 text-amber-700', label: 'CONTRACTOR' },
  shell: { accent: 'border-l-rose-500', badge: 'bg-rose-100 text-rose-700', label: 'SHELL ENTITY' },
}

export default function MacroFraudNetwork() {
  const [active, setActive] = useState<string | null>(null)
  const [selectedNode, setSelectedNode] = useState<NetworkNode | null>(null)
  const nodeMap = useMemo(() => new Map(nodes.map((node) => [node.id, node])), [])
  const isConnected = (from: string, to: string) => !active || active === from || active === to || edges.some(([a, b]) => (a === active && b === from) || (a === active && b === to) || (b === active && a === from) || (b === active && a === to))

  return (
    <section className="relative overflow-x-auto rounded-2xl bg-[#f7f9f6] p-5 text-[#26332d]">
      <div className="relative min-w-[1120px]">
        <div className="relative z-10 grid grid-cols-4 gap-5">
          {columns.map((column) => (
            <div key={column.kind}>
              <h3 className="mb-4 text-[10px] font-bold tracking-[0.16em] text-[#718078]">{column.title}</h3>
              <div className="space-y-3">
                {nodes.filter((node) => node.kind === column.kind).map((node) => {
                  const style = styles[node.kind]
                  return <button key={node.id} type="button" onMouseEnter={() => setActive(node.id)} onMouseLeave={() => setActive(null)} onFocus={() => setActive(node.id)} onBlur={() => setActive(null)} onClick={() => setSelectedNode(node)} className={`relative w-full rounded-xl border border-[#E1E5E0] border-l-4 ${style.accent} bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#6F8574]`}>
                    <div className="flex items-center justify-between gap-2"><span className={`rounded-full px-2 py-1 text-[9px] font-bold tracking-wide ${style.badge}`}>{style.label}</span><span className="text-[10px] text-[#87938b]">{node.district}</span></div>
                    <p className="mt-3 text-sm font-bold text-[#26332d]">{node.name}</p>
                    <div className="mt-3 flex items-center justify-between gap-2 text-[10px] text-[#87938b]"><span>{node.cases} cases</span><span className="font-bold text-rose-600">{node.amount}</span></div>
                  </button>
                })}
              </div>
            </div>
          ))}
        </div>
        <svg className="pointer-events-none absolute inset-0 z-0 h-full w-full" aria-hidden="true" viewBox="0 0 1000 700" preserveAspectRatio="none">
          {edges.map(([from, to]) => {
            const fromNode = nodeMap.get(from)
            const toNode = nodeMap.get(to)
            if (!fromNode || !toNode) return null
            const fromColumn = columns.findIndex((column) => column.kind === fromNode.kind)
            const toColumn = columns.findIndex((column) => column.kind === toNode.kind)
            const fromIndex = nodes.filter((node) => node.kind === fromNode.kind).findIndex((node) => node.id === from)
            const toIndex = nodes.filter((node) => node.kind === toNode.kind).findIndex((node) => node.id === to)
            const x1 = fromColumn * 250 + 225
            const x2 = toColumn * 250 + 25
            const y1 = 55 + fromIndex * 82 + 32
            const y2 = 55 + toIndex * 82 + 32
            const highlighted = isConnected(from, to)
            return <path key={`${from}-${to}`} d={`M ${x1} ${y1} C ${x1 + 55} ${y1}, ${x2 - 55} ${y2}, ${x2} ${y2}`} stroke={highlighted ? '#9CA3AF' : '#E5E7EB'} strokeWidth={highlighted && active ? 3 : 2} fill="none" opacity={highlighted ? 0.8 : 0.2} />
          })}
        </svg>
      </div>
      {selectedNode && <aside className="fixed inset-y-0 right-0 z-50 w-[min(390px,calc(100vw-24px))] overflow-y-auto border-l border-[#dfe6df] bg-white p-6 text-[#26332d] shadow-2xl" aria-label="Connected fraud cases"><div className="flex items-start justify-between gap-4"><div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#718078]">Selected entity</p><h2 className="mt-2 text-xl font-bold">{selectedNode.name}</h2><p className="mt-1 text-xs text-[#718078]">{styles[selectedNode.kind].label} · {selectedNode.district}</p></div><button type="button" aria-label="Close connected cases" onClick={() => setSelectedNode(null)} className="rounded-lg px-2 py-1 text-xl text-[#718078] hover:bg-[#f0f4ef]">×</button></div><div className="mt-6 rounded-xl bg-[#f3f7f2] p-4"><p className="text-3xl font-bold">{selectedNode.cases}</p><p className="mt-1 text-xs text-[#718078]">connected flagged cases</p><p className="mt-3 text-sm font-semibold text-rose-600">{selectedNode.amount}</p></div><div className="mt-7"><h3 className="text-sm font-bold">Navigate cases</h3><div className="mt-3 space-y-3">{Array.from({ length: selectedNode.cases }, (_, index) => { const caseId = `${selectedNode.id}-case-${index + 1}`; return <a key={caseId} href={`/fraud-network/cases/${caseId}`} className="block rounded-xl border border-[#e1e5e0] p-4 transition hover:border-[#9cb39f] hover:bg-[#f7f9f6]"><div className="flex items-center justify-between gap-3"><span className="text-xs font-bold text-[#26332d]">Case {String(index + 1).padStart(2, '0')} · {selectedNode.district}</span><span className="text-[#718078]">→</span></div><p className="mt-2 text-xs leading-5 text-[#718078]">Linked MPLADS work review involving {selectedNode.name}.</p><p className="mt-3 text-[10px] font-bold uppercase tracking-wide text-rose-600">Open case file</p></a> })}</div></div></aside>}
    </section>
  )
}
