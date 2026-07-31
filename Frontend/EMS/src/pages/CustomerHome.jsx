import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/axios';

const CustomerHome = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    // Check local session
    if (!localStorage.getItem('token')) {
      navigate('/');
      return;
    }

    // Example fetching authenticated user details from backend endpoint
    API.get('/customer/profile')
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          localStorage.clear();
          navigate('/');
        } else {
          setError('Could not fetch dashboard details.');
        }
      });
  }, [navigate]);

  const logout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Customer Dashboard</h2>
        <button onClick={logout} className="btn btn-danger">Logout</button>
      </div>
      
      {error && <div className="alert alert-warning">{error}</div>}

      <div className="card p-4 shadow-sm">
        <h4>Welcome, Customer!</h4>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>User ID:</strong> {user?.uid}</p>
        {userData && <p><strong>Extra Details:</strong> {JSON.stringify(userData)}</p>}
        <p>Browse packages and book your upcoming events here.</p>
      </div>
    </div>
  );
};

export default CustomerHome;