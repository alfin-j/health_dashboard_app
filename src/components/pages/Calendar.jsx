import React from 'react';

const calendarDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const dates = Array.from({ length: 31 }, (_, i) => i + 1);
const appointmentData = {
  5: ['09:00', '11:00'],
  12: ['13:00', '15:00'],
  20: ['11:00'],
};

function Calendar() {
  return (
    <div
      style={{
        width: 600,
        padding: '1rem',
        fontFamily: 'sans-serif',
        borderRadius: 12,
        boxSizing: 'border-box',
        background: 'linear-gradient(15deg,rgb(106, 128, 167),rgb(185, 192, 205))',
        overflowY: 'visible', 
      }}
    >
      <h3 style={{ margin: 0, marginBottom: 8,color:"white", fontSize: '1.25rem' }}>
       October 2025
      </h3>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '2px',
          marginBottom: '0.75rem',
          fontSize: '0.7rem',
        }}
      >
        {calendarDays.map((day) => (
          <div
            key={day}
            style={{ fontWeight: 'bold', background:"rgb(144, 160, 171)",textAlign: 'center', color: 'white' }}
          >
            {day}
          </div>
        ))}

        {[...Array(5)].map((_, i) => (
          <div key={`empty-${i}`} />
        ))}

        {dates.map((date) => (
          <div
            key={date}
            style={{
              border: '1px solid #ccc',
              borderRadius: '6px',
              padding: '0.2rem',
              height: 35, 
              background: '#fff',
              fontSize: '0.6rem', 
            }}
          >
            <strong style={{ fontSize: '0.7rem' }}>{date}</strong>
            <div style={{ marginTop: '0.2rem', color: '#007BFF' }}>
              {appointmentData[date]?.map((time, idx) => (
                <div key={idx}>{time}</div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}>
        <div style={cardStyle}>
          <h4 style={{ margin: '0 0 4px 0',color:"rgb(58, 122, 117)", fontSize: '0.9rem' }}>
            Dentist Appointment
          </h4>
          <p style={{ margin: 0, fontSize: '0.75rem' }}>🗓️ October 5, 2021</p>
          <p style={{ margin: 0, fontSize: '0.75rem' }}>🕘 09:00 AM</p>
        </div>

        <div style={cardStyle}>
          <h4 style={{ margin: '0 0 4px 0',color:"rgb(58, 122, 117)", fontSize: '0.9rem' }}>
            Physiotherapy Appointment
          </h4>
          <p style={{ margin: 0, fontSize: '0.75rem' }}>🗓️ October 12, 2021</p>
          <p style={{ margin: 0, fontSize: '0.75rem' }}>🕐 01:00 PM</p>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  border: '1px solid #bfdbfe',
  borderRadius: '10px',
  padding: '0.65rem',
  background: '#eff6ff', 
  boxShadow: '0 2px 6px rgba(59, 130, 246, 0.15)', 
  fontSize: '0.75rem',
  width: '200px',
  color: '#1e3a8a', 
};


export default Calendar;
