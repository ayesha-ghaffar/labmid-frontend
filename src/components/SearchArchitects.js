import React, { useState } from 'react';

function SearchArchitects() {
  const architects = [
    { id: 1, name: 'Ali', specialty: 'Residential', rating: 4.5, experience: '5 years', contact: 'ali@gmail.com'},
    { id: 2, name: 'Sara', specialty: 'Interior Design', rating: 4.8, experience: '3 years', contact: 'sara@gmail.com' },
    { id: 3, name: 'Zain', specialty: 'Commercial', rating: 4.3, experience: '7 years', contact: 'zain@gmail.com'},
    { id: 4, name: 'Mehreen', specialty: 'Landscape Design', rating: 4.6, experience: '4 years', contact: 'mehreen@gmail.com' },
    { id: 5, name: 'Ahmed', specialty: 'Urban Planning', rating: 4.7, experience: '6 years', contact: 'ahmed@gmail.com' },
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
          <div key={arch.id} className="architect-card">
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
