export type ProjectStatus = 'On track' | 'At risk' | 'Delayed'

export type Project = {
  id: string
  name: string
  district: string
  mp: string
  contractor: string
  allocation: string
  progress: number
  status: ProjectStatus
  lastUpdate: string
  category: string
}

export const districts = ['Varanasi', 'Patna', 'Gaya', 'Anantapur', 'Mysuru']

export const projects: Project[] = [
  { id: 'VAR-241', name: 'Kashi Vidyapeeth Smart Classrooms', district: 'Varanasi', mp: 'Shri Narendra Modi', contractor: 'Aarambh InfraWorks', allocation: '₹2.40 Cr', progress: 82, status: 'On track', lastUpdate: '18 min ago', category: 'Education' },
  { id: 'PAT-098', name: 'Ganga Ghat Restoration — Ward 42', district: 'Patna', mp: 'Shri Ravi Shankar Prasad', contractor: 'Pragati Buildcon', allocation: '₹1.18 Cr', progress: 44, status: 'At risk', lastUpdate: '2 hrs ago', category: 'Civic' },
  { id: 'GAY-177', name: 'Bodh Gaya Solar Street Network', district: 'Gaya', mp: 'Shri Jitan Ram Manjhi', contractor: 'Surya Grid Systems', allocation: '₹86 L', progress: 63, status: 'On track', lastUpdate: '5 hrs ago', category: 'Energy' },
  { id: 'ANA-302', name: 'Mandapeta Rural Drinking Water', district: 'Anantapur', mp: 'Shri Talari Rangaiah', contractor: 'Deccan Waterworks', allocation: '₹3.06 Cr', progress: 29, status: 'Delayed', lastUpdate: 'Yesterday', category: 'Water' },
  { id: 'MYS-054', name: 'Chamundi Hills Access Road', district: 'Mysuru', mp: 'Shri Yaduveer Wadiyar', contractor: 'Mysore Roads Ltd.', allocation: '₹1.72 Cr', progress: 71, status: 'On track', lastUpdate: 'Yesterday', category: 'Transport' },
]

export const complaints = [
  { id: 'CMP-8842', title: 'Solar lights inactive near Assi Ghat', district: 'Varanasi', age: '12m', priority: 'High', source: 'Citizen portal' },
  { id: 'CMP-8837', title: 'Classroom work paused for 3 weeks', district: 'Patna', age: '48m', priority: 'Medium', source: 'WhatsApp' },
  { id: 'CMP-8830', title: 'Water tanker not reaching Ward 14', district: 'Anantapur', age: '1h', priority: 'High', source: 'District helpline' },
]

export const kpis = [
  { label: 'Active projects', value: '1,284', change: '+8.4%', note: 'vs. previous quarter' },
  { label: 'Funds monitored', value: '₹1,248 Cr', change: '+12.1%', note: 'across 5 districts' },
  { label: 'Anomalies surfaced', value: '37', change: '−14.6%', note: 'this reporting cycle' },
  { label: 'Citizen resolution', value: '87.2%', change: '+4.8%', note: 'within SLA' },
]
