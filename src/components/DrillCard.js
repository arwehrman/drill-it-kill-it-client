import React from 'react'

const DrillCard = ({ drill }) => (
  <div key={drill.id} className="drillcard">
    <h4>{drill.title}</h4>
    <p>{drill.description}</p>
    <p>{drill.category}</p>
  </div>
)

export default DrillCard;
