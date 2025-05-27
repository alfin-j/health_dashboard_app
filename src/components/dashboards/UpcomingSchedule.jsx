import React from 'react';
import SimpleAppointmentCard from "./SimpleAppointmentCard";

function UpcomingSchedule() {
  return (
    <div style={{     
  fontFamily: 'sans-serif',
  maxWidth: 585,
  paddingLeft:".85rem ",
  backgroundColor: '#E6F0FA', 
  color: '#0A2540',
borderRadius:"10px",
        }}>
      <h3 style={{ color:"rgba(40, 65, 163, 0.81)",marginBottom: '.15rem' ,textAlign:"center"}}>Upcoming Schedule</h3>
      <div style={{ display: 'flex', gap: '1rem' }}>
       
        <section style={{ flex: 1 }}>
          <h4 style={{ marginBottom: '0.75rem', color: 'rgba(3, 71, 116, 0.82)' }}>On Thursday</h4>
          <SimpleAppointmentCard title="Dentist" time="09:00 AM - 10:00 AM" />
          <SimpleAppointmentCard title="Team Meeting" time="11:00 AM - 12:00 PM" />
        </section>

        
        <section style={{ flex: 1 }}>
          <h4 style={{ marginBottom: '0.75rem', color: 'rgba(3, 71, 116, 0.82)' }}>On Saturday</h4>
          <SimpleAppointmentCard title="Physiotherapy" time="01:00 PM - 02:00 PM" />
          <SimpleAppointmentCard title="Grocery Shopping" time="04:00 PM - 05:00 PM" />
        </section>
      </div>
    </div>
  );
}

export default UpcomingSchedule;
