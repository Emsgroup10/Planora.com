import React, { useState } from 'react';
import API from '../api/axios';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  // Role Mapping: 4 = Customer, 3 = Vendor, 2 = Organizer
  const [selectedRole, setSelectedRole] = useState(4);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    phone_no: '',
    address: '',
    name: '',            // Vendor Specific
    company_name: '',    // Organizer Specific
    company_email: '',   // Organizer Specific
    company_address: '', // Organizer Specific
    gst_no: '',          // Organizer Specific
    registration_no: ''  // Organizer Specific
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRoleChange = (roleId) => {
    setSelectedRole(roleId);
    setError('');
    setSuccess('');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    // Clean phone number string into digits and parse as Number
    const rawDigits = formData.phone_no ? String(formData.phone_no).replace(/\D/g, '') : '';
    const parsedPhone = rawDigits.length > 0 ? Number(rawDigits) : 0;

    // Construct request payload matching backend RegisterRequest DTO
    const payload = {
      email: formData.email,
      password: formData.password,
      phoneNo: parsedPhone,
      address: formData.address || '',
      rid: selectedRole
    };

    try {
      const res = await API.post('/auth/register', payload);
      setSuccess(res.data?.message || 'Registration successful! Redirecting to login...');
      setTimeout(() => navigate('/'), 2000);
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Registration failed. Please check your details and try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 py-5">
      <div className="card p-4 shadow-lg" style={{ width: '520px', borderRadius: '12px' }}>
        <h2 className="text-center text-primary mb-2 fw-bold">PLANORA</h2>
        <h5 className="text-center text-muted mb-4">Create an Account</h5>

        {/* Role Selector Tabs */}
        <div className="btn-group w-100 mb-4" role="group">
          <button
            type="button"
            className={`btn btn-sm ${selectedRole === 4 ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => handleRoleChange(4)}
          >
            Customer
          </button>
          <button
            type="button"
            className={`btn btn-sm ${selectedRole === 3 ? 'btn-success' : 'btn-outline-success'}`}
            onClick={() => handleRoleChange(3)}
          >
            Vendor
          </button>
          <button
            type="button"
            className={`btn btn-sm ${selectedRole === 2 ? 'btn-dark' : 'btn-outline-dark'}`}
            onClick={() => handleRoleChange(2)}
          >
            Organizer
          </button>
        </div>

        {error && <div className="alert alert-danger py-2">{error}</div>}
        {success && <div className="alert alert-success py-2">{success}</div>}

        <form onSubmit={handleSubmit}>
          {/* Vendor Specific: Full Name */}
          {selectedRole === 3 && (
            <div className="mb-3">
              <label className="form-label font-weight-bold">Full Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter full name"
                required
              />
            </div>
          )}

          {/* Account Credentials */}
          <div className="row">
            <div className={`col-md-${selectedRole === 2 ? '6' : '12'} mb-3`}>
              <label className="form-label font-weight-bold">Email Address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. user@gmail.com"
                required
              />
            </div>
            <div className={`col-md-${selectedRole === 2 ? '6' : '12'} mb-3`}>
              <label className="form-label font-weight-bold">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                required
              />
            </div>
          </div>

          {/* Phone Number Field */}
          <div className="mb-3">
            <label className="form-label font-weight-bold">Phone Number</label>
            <input
              type="text"
              name="phone_no"
              className="form-control"
              value={formData.phone_no}
              onChange={handleChange}
              placeholder="e.g. 9876543210"
              required
            />
          </div>

          {/* Organizer Specific Fields */}
          {selectedRole === 2 && (
            <>
              <div className="mb-3">
                <label className="form-label font-weight-bold">Company Name</label>
                <input
                  type="text"
                  name="company_name"
                  className="form-control"
                  value={formData.company_name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label font-weight-bold">Company Email</label>
                  <input
                    type="email"
                    name="company_email"
                    className="form-control"
                    value={formData.company_email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label font-weight-bold">Company Address</label>
                  <input
                    type="text"
                    name="company_address"
                    className="form-control"
                    value={formData.company_address}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label font-weight-bold">GST Number</label>
                  <input
                    type="text"
                    name="gst_no"
                    className="form-control"
                    value={formData.gst_no}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label font-weight-bold">Registration Number</label>
                  <input
                    type="text"
                    name="registration_no"
                    className="form-control"
                    value={formData.registration_no}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </>
          )}

          {/* Address Field (for Customer and Vendor) */}
          {selectedRole !== 2 && (
            <div className="mb-3">
              <label className="form-label font-weight-bold">Address</label>
              <textarea
                name="address"
                className="form-control"
                rows="2"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter address"
                required
              ></textarea>
            </div>
          )}

          <button
            type="submit"
            className={`btn w-100 py-2 mt-2 font-weight-bold ${
              selectedRole === 4
                ? 'btn-primary'
                : selectedRole === 3
                ? 'btn-success'
                : 'btn-dark'
            }`}
            disabled={loading}
          >
            {loading
              ? 'Registering...'
              : `Register as ${
                  selectedRole === 4
                    ? 'Customer'
                    : selectedRole === 3
                    ? 'Vendor'
                    : 'Organizer'
                }`}
          </button>
        </form>

        <p className="mt-4 text-center mb-0 text-muted">
          Already registered? <Link to="/">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;