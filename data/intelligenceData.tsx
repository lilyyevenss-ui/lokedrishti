export type RiskLevel = 'Normal' | 'Needs Review' | 'High Risk'

export type IntelligenceProject = { id: string; name: string; district: string; state: string; mp: string; agency: string; contractor: string; allocation: string; progress: number; expenditure: number; risk: RiskLevel; score: number; x: number; y: number }

export const riskColors: Record<RiskLevel, string> = { Normal: '#6F9873', 'Needs Review': '#B79355', 'High Risk': '#B2635D' }

const names = ['Primary Health Centre Upgrade','Rural Solar Lighting Cluster','Government School Labs','Community Water Network','District Sports Complex','Road Safety Corridor','Anganwadi Modernisation','Flood Resilience Works','Digital Learning Hub','Market Yard Renewal','Village Library Network','Coastal Drainage Works','Women’s Hostel Extension','Irrigation Lift Scheme','Bus Shelter Programme','Tribal Skill Centre','Urban Health Outpost','Cold Storage Link Road','Public Toilet Renewal','District Archive Digitisation','Panchayat Office Upgrade','Lake Rejuvenation Mission']
const places = [['Varanasi','Uttar Pradesh'],['Patna','Bihar'],['Gaya','Bihar'],['Mysuru','Karnataka'],['Anantapur','Andhra Pradesh'],['Jaipur','Rajasthan'],['Nashik','Maharashtra'],['Ranchi','Jharkhand'],['Kochi','Kerala'],['Guwahati','Assam'],['Bhopal','Madhya Pradesh']]
export const intelligenceProjects: IntelligenceProject[] = names.map((name, i) => { const place = places[i % places.length]; const risk: RiskLevel = i % 7 === 0 || i % 9 === 0 ? 'High Risk' : i % 3 === 0 ? 'Needs Review' : 'Normal'; return { id: `MPL-${241 + i}`, name, district: place[0], state: place[1], mp: i % 2 ? 'Shri Ravi Shankar Prasad' : 'Shri Narendra Modi', agency: i % 2 ? 'District Rural Development Agency' : 'State Works Division', contractor: ['Aarambh InfraWorks','Pragati Buildcon','Deccan Waterworks','Surya Grid Systems'][i % 4], allocation: `₹${(0.74 + (i % 6) * 0.38).toFixed(2)} Cr`, progress: 28 + ((i * 13) % 64), expenditure: 22 + ((i * 17) % 70), risk, score: risk === 'High Risk' ? 78 + (i % 18) : risk === 'Needs Review' ? 51 + (i % 19) : 12 + (i % 30), x: 27 + ((i * 17) % 48), y: 15 + ((i * 23) % 68) } })

export type NetworkEntity = { id: string; name: string; type: 'Contractor' | 'MP' | 'Officer' | 'Shell Co'; risk: RiskLevel; detail: string; linked: string[]; cases: string[] }
export const networkEntities: NetworkEntity[] = [
 { id:'ent-01', name:'Aarambh InfraWorks', type:'Contractor', risk:'High Risk', detail:'Repeated bid overlap across 4 districts', linked:['ent-03','ent-05','ent-07'], cases:['MPL-241','MPL-249'] },
 { id:'ent-02', name:'Shri Narendra Modi', type:'MP', risk:'Needs Review', detail:'Recommendation cluster under review', linked:['ent-04','ent-06'], cases:['MPL-241','MPL-250'] },
 { id:'ent-03', name:'R. K. Sinha', type:'Officer', risk:'High Risk', detail:'Treasury release timing anomaly', linked:['ent-01','ent-08'], cases:['MPL-241'] },
 { id:'ent-04', name:'Pragati Buildcon', type:'Contractor', risk:'Needs Review', detail:'Sub-contracting disclosure incomplete', linked:['ent-02','ent-06'], cases:['MPL-242','MPL-252'] },
 { id:'ent-05', name:'Saffron Holdings Pvt Ltd', type:'Shell Co', risk:'High Risk', detail:'Common director with active vendors', linked:['ent-01','ent-07'], cases:['MPL-249'] },
 { id:'ent-06', name:'Meera Kulkarni', type:'Officer', risk:'Normal', detail:'No material exceptions detected', linked:['ent-02','ent-04'], cases:['MPL-242'] },
 { id:'ent-07', name:'Blue River Trading Co', type:'Shell Co', risk:'Needs Review', detail:'Address overlap with contractor registry', linked:['ent-01','ent-05'], cases:['MPL-249','MPL-255'] },
 { id:'ent-08', name:'D. P. Verma', type:'Officer', risk:'Normal', detail:'Quarterly controls within threshold', linked:['ent-03'], cases:['MPL-241'] },
]

export const getProject = (id: string) => intelligenceProjects.find((project) => project.id === id) ?? intelligenceProjects[0]
export const getEntity = (id: string) => networkEntities.find((entity) => entity.id === id) ?? networkEntities[0]

export const microStages = ['MP Recommendation','District Treasury','Implementing Agency','Contractor','Sub-Contractor']
export const verificationLogs = [
 { source:'Field verifier · Varanasi', date:'18 Sep 2026', text:'Foundation work photographed; material delivery matches invoice batch 04.', status:'Verified' },
 { source:'Citizen report · Ward 14', date:'16 Sep 2026', text:'Site remains active, but classroom roof work is three weeks behind schedule.', status:'Needs review' },
 { source:'District engineer', date:'12 Sep 2026', text:'Measurement book signed against physical progress of 82%.', status:'Verified' },
]

export function downloadAuditPack(project: IntelligenceProject) { const rows = [['Field','Value'],['Project ID',project.id],['Project',project.name],['District',project.district],['Risk',project.risk],['Risk score',String(project.score)],['Physical progress',`${project.progress}%`],['Financial expenditure',`${project.expenditure}%`],['Contractor',project.contractor]]; const blob = new Blob([rows.map((row) => row.join(',')).join('\n')], { type:'text/csv;charset=utf-8' }); const url = URL.createObjectURL(blob); const anchor = document.createElement('a'); anchor.href = url; anchor.download = `${project.id}-audit-pack.csv`; anchor.click(); URL.revokeObjectURL(url) }

export const riskClass = (risk: RiskLevel) => risk === 'High Risk' ? 'risk-high' : risk === 'Needs Review' ? 'risk-review' : 'risk-normal'
export const typeClass = (type: NetworkEntity['type']) => type.toLowerCase().replace(' ','-')

// Coordinates are deliberately tied to the state named by each project, not random map positions.
const stateCoordinates: Record<string, [number, number]> = {
  'Uttar Pradesh': [56, 30], Bihar: [62, 35], Karnataka: [43, 70], 'Andhra Pradesh': [53, 70], Rajasthan: [31, 27], Maharashtra: [39, 55], Jharkhand: [60, 44], Kerala: [44, 84], Assam: [75, 29], 'Madhya Pradesh': [45, 45], Gujarat: [27, 47], Odisha: [66, 56], Punjab: [35, 18], 'West Bengal': [70, 43], Telangana: [50, 62], Tamil: [51, 86]
}

export function IndiaMiniMap({ mini = false }: { mini?: boolean }) { return <div className={`india-map ${mini ? 'india-map-mini' : ''}`} aria-label="Geopolitical map of India with project risk markers"><div className="map-grid" /><div className="india-map-image" role="img" aria-label="Political map of India with state boundaries" />{intelligenceProjects.slice(0, mini ? 8 : 22).map((project, index) => { const [left, top] = stateCoordinates[project.state] ?? [50, 50]; const offset = (index % 3 - 1) * 2.2; return <a key={project.id} href={`/work/${project.id}`} className={`map-marker ${riskClass(project.risk)}`} style={{ left:`${left + offset}%`, top:`${top + ((index % 2) ? 1.5 : -1.5)}%` }} aria-label={`Open ${project.name}, ${project.state}, ${project.risk}`}><span /><span className="map-tooltip"><strong>{project.name}</strong><small>{project.district}, {project.state}</small><em className={riskClass(project.risk)}>Risk {project.score}/100 · {project.risk}</em></span></a> })}</div> }
