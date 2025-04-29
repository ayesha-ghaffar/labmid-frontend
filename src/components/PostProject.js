import React, { useState } from 'react';

function PostProject() {
  const [title, setTitle] = useState('');
  const [budget, setBudget] = useState('');
  const [location, setLocation] = useState('');
  const [projectType, setProjectType] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!title || !budget || !location || !projectType || !description) {
      setError('All fields are required.');
      return;
    }

    if (!isNaN(title)) {
      setError('Title cannot be a number.');
      return;
    }

    const budgetValue = parseFloat(budget);
    if (isNaN(budgetValue) || budgetValue <= 0) {
      setError('Budget must be a positive number.');
      return;
    }

    if (!isNaN(location)) {
      setError('Location cannot be a number.');
      return;
    }

    if (description.length < 10) {
      setError('Description must be at least 10 characters long.');
      return;
    }

    setMessage('Project Posted Successfully!');
    setTitle('');
    setBudget('');
    setLocation('');
    setProjectType('');
    setDescription('');
  };

  return (
    <div className="card">
      <h2>Post a Project</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <select value={projectType} onChange={(e) => setProjectType(e.target.value)}>
          <option value="">Select Project Type</option>
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
          <option value="Interior">Interior</option>
        </select>

        <textarea
          placeholder="Project Description (min 10 characters)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <button type="submit">Post Project</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}
    </div>
  );
}

export default PostProject;
