import React, { useState } from 'react';
import RegisterLogin from './components/RegisterLogin';
import Dashboard from './components/Dashboard';
import PostProject from './components/PostProject';
import SearchArchitects from './components/SearchArchitects';
import UserProfile from './components/UserProfile';
import './App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState('login'); 
  const [username, setUsername] = useState('');

  const handleLoginSuccess = (user) => {
    setUsername(user);
    setCurrentScreen('dashboard');
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm('Are you sure you want to logout?');
    if (confirmLogout) {
      setUsername('');
      setCurrentScreen('login');
    }
  };

  return (
    <div className="App">
      {currentScreen === 'login' && (
        <RegisterLogin onLoginSuccess={handleLoginSuccess} />
      )}

      {currentScreen === 'dashboard' && (
        <Dashboard username={username} onNavigate={setCurrentScreen} onLogout={handleLogout}/>
      )}

      {currentScreen === 'postProject' && (
        <div>
          <Navbar onNavigate={setCurrentScreen} onLogout={handleLogout} username={username} />
          <PostProject />
        </div>
      )}

      {currentScreen === 'searchArchitect' && (
        <div>
          <Navbar onNavigate={setCurrentScreen} onLogout={handleLogout} username={username} />
          <SearchArchitects />
        </div>
      )}

      {currentScreen === 'profile' && (
        <div>
          <Navbar onNavigate={setCurrentScreen} onLogout={handleLogout} username={username} />
          <UserProfile username={username} />
        </div>
      )}
    </div>
  );
}

function Navbar({ onNavigate, onLogout, username }) {
  return (
    <nav className="navbar">
      <span>Welcome, {username}!</span>
      <button onClick={() => onNavigate('dashboard')}>Home</button>
      <button onClick={() => onNavigate('postProject')}>Post Project</button>
      <button onClick={() => onNavigate('searchArchitect')}>Search Architect</button>
      <button onClick={() => onNavigate('profile')}>My Profile</button>
      <button onClick={onLogout}>Logout</button>
    </nav>
  );
}

export default App;
