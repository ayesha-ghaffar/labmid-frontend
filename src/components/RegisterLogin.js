import React, { useState } from 'react';

function RegisterLogin({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(true);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setMessage('Please fill all fields.');
    } else {
      setMessage('');
      onLoginSuccess(username); // pass username to App
    }
  };

  return (
    <div className="card">
      <h2>{isRegistering ? 'Register' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
      </form>
      <p
        onClick={() => {
          setIsRegistering(!isRegistering);
          setMessage('');
        }}
        style={{ cursor: 'pointer', color: 'blue' }}
      >
        {isRegistering ? 'Already have an account? Login' : 'New here? Register'}
      </p>
      {message && <p style={{ color: 'red' }}>{message}</p>}
    </div>
  );
}

export default RegisterLogin;
