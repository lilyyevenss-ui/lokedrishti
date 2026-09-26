'use client'

import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { intelligenceProjects, riskColors, type RiskLevel } from '@/data/intelligenceData'

const coordinates: Record<string, [number, number]> = {
  Varanasi: [25.3176, 82.9739],
  Lucknow: [26.8467, 80.9462],
  Patna: [25.5941, 85.1376],
  Gaya: [24.7955, 85.0002],
  Anantapur: [14.6819, 77.6006],
  Mysuru: [12.2958, 76.6394],
  Jaipur: [26.9124, 75.7873],
  Nashik: [19.9975, 73.7898],
  Ranchi: [23.3441, 85.3096],
  Kochi: [9.9312, 76.2673],
  Guwahati: [26.1445, 91.7362],
  Bhopal: [23.2599, 77.4126],
}

const pinIcon = (risk: RiskLevel) => L.divIcon({
  className: 'leaflet-risk-pin-wrapper',
  html: `<span class="leaflet-risk-pin" style="--pin-color:${riskColors[risk]}"><i></i></span>`,
  iconSize: [26, 34],
  iconAnchor: [13, 34],
  popupAnchor: [0, -30],
})

export default function IndiaLeafletMap() {
  return (
    <div className="leaflet-map-frame">
      <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '600px', width: '100%', borderRadius: '12px' }} scrollWheelZoom>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
        {intelligenceProjects.map((project, index) => {
          const position = coordinates[project.district] ?? [20.5937, 78.9629]
          const adjusted: [number, number] = [position[0] + (index % 2 ? 0.045 : -0.045), position[1] + (index % 3 - 1) * 0.06]
          return (
            <Marker key={project.id} position={adjusted} icon={pinIcon(project.risk)}>
              <Tooltip direction="top" offset={[0, -28]} opacity={1} sticky>
                <div className="leaflet-hover-card">
                  <div className="leaflet-hover-kicker">{project.state} · {project.district}</div>
                  <strong>{project.name}</strong>
                  <div className="leaflet-hover-meta"><span>{project.allocation}</span><span className={`risk-pill ${project.risk === 'High Risk' ? 'risk-high' : project.risk === 'Needs Review' ? 'risk-review' : 'risk-normal'}`}>{project.risk} · {project.score}/100</span></div>
                </div>
              </Tooltip>
              <Popup className="leaflet-project-popup" minWidth={290}>
                <div className="leaflet-popup-card">
                  <div className="leaflet-hover-kicker">{project.id} · {project.state}</div>
                  <h3>{project.name}</h3>
                  <p>{project.district} district · {project.allocation} sanctioned</p>
                  <div className="leaflet-progress-row"><span>Physical progress</span><b>{project.progress}%</b></div>
                  <div className="leaflet-progress-track"><i style={{ width: `${project.progress}%` }} /></div>
                  <div className="leaflet-progress-row"><span>Financial release</span><b>{project.expenditure}%</b></div>
                  <div className="leaflet-progress-track"><i className="financial" style={{ width: `${project.expenditure}%` }} /></div>
                  <p className="leaflet-popup-detail">{project.agency} · {project.mp}</p>
                  <Link href={`/work/${project.id}`} className="leaflet-action-link">View Micro Case Intelligence <ArrowUpRight size={14} /></Link>
                </div>
              </Popup>
            </Marker>
          )
        })}
      </MapContainer>
    </div>
  )
}

export { coordinates }
