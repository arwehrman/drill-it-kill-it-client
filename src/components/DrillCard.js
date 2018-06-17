import React from 'react'


const DrillCard = ({ drill }) => {
return (
      <div className="card" >
        <h3>{drill.title}</h3>
        <p>{drill.id}</p>
        <p>Description: {drill.description}</p>
        <p>Category: {drill.category}</p>
        <p>Likes: {drill.likes}</p>
      </div>
    )
}

export default DrillCard;
