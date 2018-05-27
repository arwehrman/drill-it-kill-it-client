import React from 'react'

const DrillCard = ({ drill }) => (

  <div className="card" key={drill.id} >
    <h4>{drill.title}</h4>
    <p>Description: {drill.description}</p>
    <p>Category: {drill.category}</p>
    <hr />
  </div>
)

export default DrillCard;
