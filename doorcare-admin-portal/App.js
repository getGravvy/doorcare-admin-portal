import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import ManageBookingsPage from './pages/ManageBookingsPage';
import CompanyProfilePage from './pages/CompanyProfilePage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLoginPage />} />
        <Route path="/dashboard" element={<AdminDashboardPage />} />
        <Route path="/bookings" element={<ManageBookingsPage />} />
        <Route path="/profile" element={<CompanyProfilePage />} />
      </Routes>
    </Router>
  );
}
