import React, { useState } from 'react';

function SearchArchitects({ onSelectArchitect }) {
  const architects = [
    { id: 1, name: 'Ali', specialty: 'Residential', rating: 4.5, experience: '5 years', contact: 'ali@gmail.com', portfolio: 'Image1.png' },
    { id: 2, name: 'Sara', specialty: 'Interior Design', rating: 4.8, experience: '3 years', contact: 'sara@gmail.com', portfolio: 'Image2.png' },
    { id: 3, name: 'Zain', specialty: 'Commercial', rating: 4.3, experience: '7 years', contact: 'zain@gmail.com', portfolio: 'Image3.png' },
  ];

  const [search, setSearch] = useState('');

  const filteredArchitects = architects.filter((arch) =>
    arch.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="card">
      <h2>Search Architects</h2>
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredArchitects.length > 0 ? (
        filteredArchitects.map((arch) => (
          <div key={arch.id} className="architect-card" onClick={() => onSelectArchitect(arch)} style={{ cursor: 'pointer' }}>
            <h3>{arch.name}</h3>
            <p>Specialty: {arch.specialty}</p>
            <p>Rating: {arch.rating} ⭐</p>
          </div>
        ))
      ) : (
        <p>No Architects Found</p>
      )}
    </div>
  );
}

export default SearchArchitects;
