'use client'

import { Download, Upload } from 'lucide-react'

export function FraudCaseActions({ caseId }: { caseId: string }) {
  const exportCase = () => {
    const payload = JSON.stringify({ caseId, exportedAt: new Date().toISOString(), source: 'LokeDrishti MPLADS Intelligence' }, null, 2)
    const url = URL.createObjectURL(new Blob([payload], { type: 'application/json' }))
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = `${caseId}-case-file.json`
    anchor.click()
    URL.revokeObjectURL(url)
  }

  return <div className="flex flex-wrap gap-2"><button type="button" onClick={exportCase} className="inline-flex items-center gap-2 rounded-lg border border-[#d5ddd5] bg-white px-3 py-2 text-xs font-semibold text-[#52695a] transition hover:border-[#6f8574] hover:bg-[#f4f7f2]"><Download size={14} /> Export case</button><label className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-[#d5ddd5] bg-white px-3 py-2 text-xs font-semibold text-[#52695a] transition hover:border-[#6f8574] hover:bg-[#f4f7f2]"><Upload size={14} /> Import evidence<input type="file" className="sr-only" accept=".pdf,.png,.jpg,.jpeg,.csv,.json" /></label></div>
}
