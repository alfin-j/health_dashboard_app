import React from 'react'
import AnatomySection from "../dashboards/AnatomySection"
import HealthStatusCards from "../dashboards/HealthStatusCards"
function DashboardOverview() {
  return (
    <div style={{ height: '60vh', padding: '.5rem' }}>       
      <div style={{ display: 'flex', gap: '1rem' }}>
        <AnatomySection/>
        <HealthStatusCards />
      </div>
    </div>
  )
}

export default DashboardOverview
