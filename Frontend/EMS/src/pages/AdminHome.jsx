import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/axios';

const AdminHome = () => {
  const navigate = useNavigate();
  const [adminData, setAdminData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    // 1. Verify Authentication & Role
    const token = localStorage.getItem('token');
    if (!token || user?.rid !== 1) {
      localStorage.clear();
      navigate('/');
      return;
    }

    // 2. Fetch Protected Data from Backend
    API.get('/admin/dashboard')
      .then((res) => {
        setAdminData(res.data);
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          localStorage.clear();
          navigate('/');
        } else {
          setError('Failed to fetch System Administrator data.');
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
        <h2 className="text-primary fw-bold">Admin Portal</h2>
        <button onClick={logout} className="btn btn-outline-danger">Logout</button>
      </div>

      {error && <div className="alert alert-danger py-2">{error}</div>}

      <div className="card p-4 shadow-sm border-0" style={{ borderRadius: '12px' }}>
        <h4 className="fw-bold mb-3">System Administrator Panel</h4>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Admin UID:</strong> {user?.uid}</p>
        <p className="text-muted">Full system and platform data management access.</p>

        <hr />

        {loading ? (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          adminData && (
            <div className="mt-2 bg-light p-3 rounded">
              <h5 className="text-secondary mb-2">Platform Overview</h5>
              <pre className="mb-0">{JSON.stringify(adminData, null, 2)}</pre>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default AdminHome;