import React from 'react';

export default function BookingCard({ customer, service }) {
  return (
    <div style={styles.card}>
      <h3>{customer}</h3>
      <p>Service: {service}</p>
      <button style={styles.button}>Mark as Done</button>
    </div>
  );
}

const styles = {
  card: { border: '1px solid #ccc', margin: 10, padding: 20, borderRadius: 5 },
  button: { marginTop: 10 },
};
