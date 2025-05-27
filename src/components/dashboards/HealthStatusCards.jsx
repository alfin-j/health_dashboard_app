import React from 'react';

function HealthStatusCards() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '.5rem' 
    }}>
      <div style={cardStyle}>
        <h4>Lungs</h4>
        <p>Status: <span style={{ color: 'red' }}>Issue</span></p>
        <p>Last Checked: 2024-12-10</p>
      </div>
      <div style={cardStyle}>
        <h4>Teeth</h4>
        <p>Status: <span style={{ color: 'green' }}>Good</span></p>
        <p>Last Checked: 2024-11-01</p>
      </div>
      <div style={cardStyle}>
        <h4>Bone</h4>
        <p>Status: <span style={{ color: 'green' }}>Strong</span></p>
        <p>Last Checked: 2024-10-15</p>
      </div>
    </div>
  );
}

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  width: '200px',
  boxSizing: 'border-box',     
  overflow: 'hidden',          
  backgroundColor: 'rgb(149, 179, 221)',
  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  fontSize:"15px",
  fontFamily: `'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif`,
  textAlign:"center",
  color: 'rgba(48, 44, 44, 0.91)', 
}

export default HealthStatusCards;
