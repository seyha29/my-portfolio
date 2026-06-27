import React, { useState } from "react";
import { FaUser, FaEnvelope, FaSignOutAlt, FaSignInAlt, FaUserPlus, FaCamera } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function Profile({ user, onLogout, onAvatarUpload }) {
  const [avatar, setAvatar] = useState(user?.avatar || null);
  const navigate = useNavigate();

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const avatarUrl = URL.createObjectURL(file);
      setAvatar(avatarUrl);
      onAvatarUpload(avatarUrl);
    }
  };

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };

  return (
    <div className="auth-container">
      <div className="auth-form profile-form">
        <h2 className="auth-title">User Profile</h2>
        {user ? (
          <>
            <div className="profile-avatar">
              {avatar ? (
                <img src={avatar} alt="User avatar" className="avatar-image" />
              ) : (
                <div className="avatar-placeholder">
                  <FaUser className="avatar-icon" />
                </div>
              )}
              <label htmlFor="avatar-upload" className="avatar-upload-label">
                <FaCamera className="avatar-upload-icon" />
                Change Avatar
              </label>
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="avatar-upload-input"
              />
            </div>
            <div className="profile-details">
              <div className="profile-item">
                <FaUser className="profile-icon" />
                <span>Username: {user.username}</span>
              </div>
              <div className="profile-item">
                <FaEnvelope className="profile-icon" />
                <span>Email: {user.email}</span>
              </div>
              {/* Add more user details here as needed */}
            </div>
            <button onClick={handleLogout} className="auth-button">
              <FaSignOutAlt className="button-icon" />
              Logout
            </button>
          </>
        ) : (
          <>
            <p className="profile-message">No user data available. Please log in or register.</p>
            <div className="auth-buttons">
              <Link to="/login" className="auth-button">
                <FaSignInAlt className="button-icon" />
                Login
              </Link>
              <Link to="/register" className="auth-button">
                <FaUserPlus className="button-icon" />
                Register
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Profile;