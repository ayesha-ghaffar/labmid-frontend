import React from 'react';

function UserProfile({ username }) {
  return (
    <div className="card">
      <h2>My Profile</h2>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Email:</strong> {username.toLowerCase()}@gmail.com</p>
      <p><strong>Account Type:</strong> Client</p>
    </div>
  );
}

export default UserProfile;
