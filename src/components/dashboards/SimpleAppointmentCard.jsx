function SimpleAppointmentCard({ title, time }) {
  return (
    <div style={{
      border: '1px solid #B0D4F1',
      borderRadius: 6,
      padding: '0.4rem 0.75rem',
      marginBottom: '0.4rem',
      background: 'linear-gradient(to right,rgb(170, 175, 183), #2A5298)',
      boxShadow: '0 1px 3px rgba(0, 123, 255, 0.1)',
      fontSize: '0.8rem',
      maxWidth: 250,
      color: '#0A2540'  
    }}>
      <strong style={{ fontSize: '0.85rem', color: 'rgba(23, 44, 74, 0.91)' }}>{title}</strong>
      <div style={{ fontSize: '0.75rem', color: 'rgb(35, 31, 31)' }}>{time}</div>
    </div>
  );
}

export default SimpleAppointmentCard;
