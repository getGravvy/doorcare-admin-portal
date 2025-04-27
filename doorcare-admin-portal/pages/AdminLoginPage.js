import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "admin@doorcare.com" && password === "password123") {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div style={styles.container}>
      <h1>Admin Login</h1>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} />
      <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} />
      <button onClick={handleLogin} style={styles.button}>Login</button>
    </div>
  );
}

const styles = {
  container: { display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 50 },
  input: { margin: 10, padding: 10, width: 250 },
  button: { margin: 10, padding: 10, width: 100 },
};
