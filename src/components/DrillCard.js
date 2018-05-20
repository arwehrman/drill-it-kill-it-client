import React from 'react'

const DrillCard = ({ drill }) => (
  <div key={drill.id} className="DrillCard">
    <h4>{drill.title}</h4>
    <p>{drill.description}</p>
    <p>{drill.category}</p>
    <hr />
  </div>
)

export default DrillCard;
