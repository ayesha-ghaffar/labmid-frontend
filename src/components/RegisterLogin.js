import React, { useState } from 'react';

function RegisterLogin({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(true);
  const [message, setMessage] = useState('');

  const hasUpperCase = (str) => str.split('').some(c => c >= 'A' && c <= 'Z');
  const hasLowerCase = (str) => str.split('').some(c => c >= 'a' && c <= 'z');
  const hasDigit = (str) => str.split('').some(c => c >= '0' && c <= '9');
  const isAlphanumericUnderscore = (str) => {
    return str.split('').every(c => (
      (c >= 'A' && c <= 'Z') ||
      (c >= 'a' && c <= 'z') ||
      (c >= '0' && c <= '9') ||
      c === '_'
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setMessage('Please fill all fields.');
      return;
    }

    if (username.length < 3) {
      setMessage('Username must be at least 3 characters long.');
      return;
    }

    if (!isAlphanumericUnderscore(username)) {
      setMessage('Username can only contain letters, numbers, and underscores.');
      return;
    }

    if (password.length < 6) {
      setMessage('Password must be at least 6 characters long.');
      return;
    }

    if (!hasUpperCase(password) || !hasLowerCase(password) || !hasDigit(password)) {
      setMessage('Password must have at least one uppercase letter, one lowercase letter, and one number.');
      return;
    }
    setMessage('');
    onLoginSuccess(username);
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
