'use client'

import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import { complaints as seedComplaints, projects, type Project } from '@/data/mockData'

export type Role = 'Citizen' | 'District Authority (Varanasi)' | 'MoSPI Nodal'

type AppContextValue = {
  role: Role
  setRole: (role: Role) => void
  darkMode: boolean
  toggleDarkMode: () => void
  projects: Project[]
  complaints: typeof seedComplaints
  importCsv: (file: File) => Promise<void>
  exportCsv: () => void
}

const AppContext = createContext<AppContextValue | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role>('District Authority (Varanasi)')
  const [darkMode, setDarkMode] = useState(false)
  const [projectData, setProjectData] = useState(projects)
  const [complaintData] = useState(seedComplaints)

  const importCsv = async (file: File) => {
    const text = await file.text()
    const [header, ...rows] = text.trim().split(/\r?\n/)
    if (!header || !rows.length) return
    const fields = header.split(',').map((field) => field.trim().toLowerCase())
    const imported = rows.map((row, index) => {
      const cells = row.split(',').map((cell) => cell.trim())
      const item = Object.fromEntries(fields.map((field, fieldIndex) => [field, cells[fieldIndex] ?? '']))
      return {
        id: item.id || `CSV-${index + 1}`,
        name: item.name || 'Imported project',
        district: item.district || 'Unknown',
        mp: item.mp || 'Not assigned',
        contractor: item.contractor || 'Not assigned',
        allocation: item.allocation || '₹0',
        progress: Number(item.progress) || 0,
        status: (item.status as Project['status']) || 'On track',
        lastUpdate: 'Just now',
        category: item.category || 'General',
      } satisfies Project
    })
    setProjectData((current) => [...imported, ...current])
  }

  const exportCsv = () => {
    const header = 'id,name,district,mp,contractor,allocation,progress,status,category'
    const body = projectData.map((project) => [project.id, project.name, project.district, project.mp, project.contractor, project.allocation, project.progress, project.status, project.category].join(','))
    const blob = new Blob([[header, ...body].join('\n')], { type: 'text/csv;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = 'mplads-projects.csv'
    anchor.click()
    URL.revokeObjectURL(url)
  }

  const value = useMemo(() => ({ role, setRole, darkMode, toggleDarkMode: () => setDarkMode((value) => !value), projects: projectData, complaints: complaintData, importCsv, exportCsv }), [role, darkMode, projectData, complaintData])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) throw new Error('useApp must be used within AppProvider')
  return context
}
