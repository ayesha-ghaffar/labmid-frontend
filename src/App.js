import React, { useState } from 'react';
import RegisterLogin from './components/RegisterLogin';
import Dashboard from './components/Dashboard';
import PostProject from './components/PostProject';
import SearchArchitects from './components/SearchArchitects';
import UserProfile from './components/UserProfile';
import ArchitectProfile from './components/ArchitectProfile';
import './App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState('login'); 
  const [username, setUsername] = useState('');
  const [selectedArchitect, setSelectedArchitect] = useState(null);

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

  const handleArchitectSelect = (architect) => {
    setSelectedArchitect(architect);
    setCurrentScreen('architectProfile');
  };

  return (
    <div className="App">
      {currentScreen === 'login' && (
        <RegisterLogin onLoginSuccess={handleLoginSuccess} />
      )}

      {currentScreen === 'dashboard' && (
        <Dashboard
          username={username}
          onNavigate={setCurrentScreen}
          onLogout={handleLogout}
        />
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
          <SearchArchitects onSelectArchitect={handleArchitectSelect} />
        </div>
      )}

      {currentScreen === 'profile' && (
        <div>
          <Navbar onNavigate={setCurrentScreen} onLogout={handleLogout} username={username} />
          <UserProfile username={username} />
        </div>
      )}

      {currentScreen === 'architectProfile' && (
        <div>
          <Navbar onNavigate={setCurrentScreen} onLogout={handleLogout} username={username} />
          <ArchitectProfile architect={selectedArchitect} />
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
