import React from 'react';

function ArchitectProfile({ architect }) {
  if (!architect) return <p>No Architect Selected</p>;

  return (
    <div className="card">
      <h2>{architect.name}'s Profile</h2>
      <p><strong>Specialty:</strong> {architect.specialty}</p>
      <p><strong>Experience:</strong> {architect.experience}</p>
      <p><strong>Contact:</strong> {architect.contact}</p>
      <img
        src={`https://via.placeholder.com/150?text=${architect.name}`}
        alt="Portfolio"
        style={{ marginTop: '10px', borderRadius: '8px' }}
      />
    </div>
  );
}

export default ArchitectProfile;
