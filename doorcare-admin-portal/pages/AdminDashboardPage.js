import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboardPage() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1>Admin Dashboard</h1>
      <button onClick={() => navigate('/bookings')} style={styles.button}>Manage Bookings</button>
      <button onClick={() => navigate('/profile')} style={styles.button}>Company Profile</button>
    </div>
  );
}

const styles = {
  container: { display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 50 },
  button: { margin: 10, padding: 10, width: 200 },
};
