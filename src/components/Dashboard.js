import React from 'react';

function Dashboard({ username, onNavigate, onLogout }) {
  return (
    <div>
      <nav className="navbar">
        <span>Dashboard</span>
        <button onClick={() => onNavigate('profile')}>My Profile</button>
        <button onClick={() => onNavigate('postProject')}>Post Project</button>
        <button onClick={() => onNavigate('searchArchitect')}>Search Architect</button>
        <button onClick={onLogout}>Logout</button>
      </nav>

      <div className="card">
        <h2>Welcome, {username}!</h2>
        <p><strong>Ready to build your dream home...</strong></p>
      </div>
    </div>
  );
}

export default Dashboard;
