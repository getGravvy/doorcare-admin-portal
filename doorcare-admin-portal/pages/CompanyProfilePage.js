import React from 'react';

export default function CompanyProfilePage() {
  return (
    <div style={styles.container}>
      <h1>Company Profile</h1>
      <p><strong>Company Name:</strong> DoorCare Services</p>
      <p><strong>Email:</strong> admin@doorcare.com</p>
      <p><strong>Phone:</strong> (555) 555-5555</p>
    </div>
  );
}

const styles = {
  container: { padding: 20 },
};
