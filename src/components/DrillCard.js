import React from 'react'


const DrillCard = ({ drill, likeDrill, deleteDrill }) => (
  <div className="card" key={drill.id} >
    <h4>{drill.title}</h4>
    <p>Description: {drill.description}</p>
    <p>Category: {drill.category}</p>
    <p>Likes: {drill.likes}</p>
    <button onClick={() => this.handleOnClick(drill.id)}>Delete</button>
    <button onClick={() => this.handleLikesClick(drill.id)}>Like</button>
  </div>
)



export default DrillCard;
