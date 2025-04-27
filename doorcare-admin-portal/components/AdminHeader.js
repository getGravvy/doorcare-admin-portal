import React from 'react';

export default function AdminHeader({ title }) {
  return (
    <div style={styles.header}>
      <h2>{title}</h2>
    </div>
  );
}

const styles = {
  header: { padding: 20, backgroundColor: '#eee', textAlign: 'center' },
};
