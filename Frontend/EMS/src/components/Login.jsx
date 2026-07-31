import React, { useState } from 'react';
import API from '../api/axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await API.post('/auth/login', { email, password });

      if (response.status === 200 && response.data) {
        // Destructure roleId to match backend response key
        const { uid, roleId, email: userEmail, token, message } = response.data;

        if (token) {
          // Safely parse role ID to a number
          const parsedRoleId = Number(roleId);

          // Store session details in localStorage
          localStorage.setItem('user', JSON.stringify({ uid, rid: parsedRoleId, email: userEmail }));
          localStorage.setItem('token', token);

          // Role-based routing aligned with backend role IDs
          switch (parsedRoleId) {
            case 1:
              navigate('/admin');
              break;
            case 2:
              navigate('/organizer');
              break;
            case 3:
              navigate('/vendor');
              break;
            case 4:
              navigate('/customer');
              break;
            default:
              setError(`Unknown Role ID (${roleId}) assigned to this account.`);
          }
        } else {
          setError(message || 'Authentication failed. Please try again.');
        }
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else if (err.response && err.response.status === 401) {
        setError('Invalid Email or Password.');
      } else {
        setError('Unable to connect to the backend server. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: '400px', borderRadius: '12px' }}>
        <h2 className="text-center text-primary mb-4 fw-bold">PLANORA</h2>
        <h5 className="text-center text-muted mb-3">Sign In to Your Account</h5>

        {error && <div className="alert alert-danger py-2 text-center">{error}</div>}

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label font-weight-bold">Email Address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. user@planora.com"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label font-weight-bold">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>

          <button 
            type="submit" 
            className="btn btn-primary w-100 py-2 mt-2 font-weight-bold"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <hr className="my-4" />

        <div className="text-center">
          <p className="mb-0 text-muted">
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;