import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import CustomerHome from './pages/CustomerHome';
import VendorHome from './pages/VendorHome';
import OrganizerHome from './pages/OrganizerHome';
import AdminHome from './pages/AdminHome';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Backwards-Compatible Redirects for Single Register Component */}
        <Route path="/register-user" element={<Navigate to="/register" replace />} />
        <Route path="/register-vendor" element={<Navigate to="/register" replace />} />
        <Route path="/register-organizer" element={<Navigate to="/register" replace />} />
        
        {/* Role-Based Dashboards */}
        <Route path="/customer" element={<CustomerHome />} />
        <Route path="/organizer" element={<OrganizerHome />} />
        <Route path="/vendor" element={<VendorHome />} />
        <Route path="/admin" element={<AdminHome />} />

        {/* Fallback Catch-All Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;