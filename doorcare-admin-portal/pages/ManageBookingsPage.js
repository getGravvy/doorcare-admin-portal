import React from 'react';

export default function ManageBookingsPage() {
  const bookings = [
    { id: 1, customer: 'John Doe', service: 'Spring Replacement' },
    { id: 2, customer: 'Jane Smith', service: 'Door Installation' }
  ];

  return (
    <div style={styles.container}>
      <h1>Manage Bookings</h1>
      {bookings.map((booking) => (
        <div key={booking.id} style={styles.card}>
          <h3>{booking.customer}</h3>
          <p>Service: {booking.service}</p>
          <button style={styles.button}>Mark Completed</button>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: { padding: 20 },
  card: { border: '1px solid #ccc', padding: 20, margin: 10, borderRadius: 5 },
  button: { marginTop: 10 },
};
