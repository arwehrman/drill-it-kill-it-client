import React from 'react';

const Drills = (props) => (
  <div>
    <h1>Drills</h1>
    {props.drills.map(drill =>
      <div key={drill.id}>
        <h3>{drill.title}</h3>
        <p>{drill.description}</p>
        <p>{drill.category}</p>
      </div>
    )}
  </div>
)
export default Drills;
