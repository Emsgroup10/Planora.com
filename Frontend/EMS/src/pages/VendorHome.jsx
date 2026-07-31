import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/axios';

const VendorHome = () => {
  const navigate = useNavigate();
  const [vendorData, setVendorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    // 1. Verify Authentication & Role
    const token = localStorage.getItem('token');
    if (!token || user?.rid !== 3) {
      localStorage.clear();
      navigate('/');
      return;
    }

    // 2. Fetch Protected Data from Backend
    API.get('/vendor/dashboard')
      .then((res) => {
        setVendorData(res.data);
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          localStorage.clear();
          navigate('/');
        } else {
          setError('Failed to fetch vendor assignments.');
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [navigate, user?.rid]);

  const logout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-success fw-bold">Vendor Dashboard</h2>
        <button onClick={logout} className="btn btn-outline-danger">Logout</button>
      </div>

      {error && <div className="alert alert-danger py-2">{error}</div>}

      <div className="card p-4 shadow-sm border-0" style={{ borderRadius: '12px' }}>
        <h4 className="fw-bold text-success mb-3">Welcome, Vendor Partner!</h4>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Vendor ID:</strong> {user?.uid}</p>
        <p className="text-muted">Manage your service listings, job requests, and assigned events.</p>

        <hr />

        {loading ? (
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          vendorData && (
            <div className="mt-2 bg-light p-3 rounded">
              <h5 className="text-secondary mb-2">Service Listings & Bookings</h5>
              <pre className="mb-0">{JSON.stringify(vendorData, null, 2)}</pre>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default VendorHome;