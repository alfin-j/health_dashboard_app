import React from 'react';

const ChartBar = ({ height }) => (
  <div
    style={{
      width: '22px', 
      height: `${height}px`,
      backgroundColor: '#4f46e5',
      borderRadius: '2px',
    }}
  />
);

const ActivityHeader = () => (
  <div style={{ marginBottom: '0.25rem' }}>
    <h4 style={{ margin: 3, color: 'rgba(250, 250, 250, 0.71)',textAlign:"center", fontSize: '1rem' }}>Activity</h4>
    <p style={{ margin: 3, color: 'rgba(250, 250, 250, 0.71)', fontSize: '0.8rem' }}>3 appointments this week</p>
  </div>
);

function ActivityFeed() {
  const barHeights = [30, 50, 40, 60, 35, 55, 25];

  return (
    <div
      style={{
        fontFamily: 'sans-serif',
        width: '630px',
        height: '150px',
        padding: '1rem',
        boxSizing: 'border-box',
        border: '1px solid #ccc',
        borderRadius: 10,
        backgroundColor: 'rgb(149, 179, 221)',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin:3,
      }}
    >
      <ActivityHeader />
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent:"center",
          gap: '1rem',
          height: '40px', 
        }}
      >
        {barHeights.map((h, i) => (
          <ChartBar key={i} height={h * 1.5} /> 
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;
