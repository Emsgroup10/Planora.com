import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/axios';

const OrganizerHome = () => {
  const navigate = useNavigate();
  const [organizerData, setOrganizerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    // 1. Verify Authentication & Role
    const token = localStorage.getItem('token');
    if (!token || user?.rid !== 2) {
      localStorage.clear();
      navigate('/');
      return;
    }

    // 2. Fetch Protected Data from Backend
    API.get('/organizer/dashboard')
      .then((res) => {
        setOrganizerData(res.data);
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          localStorage.clear();
          navigate('/');
        } else {
          setError('Failed to fetch organizer dashboard details.');
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
        <h2 className="text-dark fw-bold">Organizer Dashboard</h2>
        <button onClick={logout} className="btn btn-outline-danger">Logout</button>
      </div>

      {error && <div className="alert alert-danger py-2">{error}</div>}

      <div className="card p-4 shadow-sm border-0" style={{ borderRadius: '12px' }}>
        <h4 className="fw-bold text-dark mb-3">Welcome, Event Organizer!</h4>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Organizer ID:</strong> {user?.uid}</p>
        <p className="text-muted">Create event packages, manage hostings, and coordinate with active vendors.</p>

        <hr />

        {loading ? (
          <div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          organizerData && (
            <div className="mt-2 bg-light p-3 rounded">
              <h5 className="text-secondary mb-2">Hosted Events & Packages</h5>
              <pre className="mb-0">{JSON.stringify(organizerData, null, 2)}</pre>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default OrganizerHome;