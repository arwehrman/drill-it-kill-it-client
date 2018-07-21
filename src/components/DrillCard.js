import React from 'react'

const DrillCard = ({ drill }) => {
return (
      <div className="drillcard" >
        <h3>{drill.title}</h3>
        <p>Description: {drill.description}</p>
        <p>Category: {drill.category}</p>
        <p>Likes: {drill.likes}</p>
      </div>
    )
}

export default DrillCard;
