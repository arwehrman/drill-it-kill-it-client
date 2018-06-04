import React from 'react'


const DrillCard = ({ drill, likeDrill, deleteDrill }) => {

  const handleOnClick = (drilll) => {
    console.log(drill.id)
    deleteDrill(drill)
  }

  const handleLikesClick = () => {
    console.log(drill.id)
  }

return (
      <div className="card" key={drill.id} >
        <h3>{drill.title}</h3>
        <p>{drill.id}</p>
        <p>Description: {drill.description}</p>
        <p>Category: {drill.category}</p>
        <p>Likes: {drill.likes}</p>
        <button onClick={() => handleOnClick(drill)}>Delete</button>
        <button onClick={() => handleLikesClick(drill)}>Like</button>
      </div>
    )
}

export default DrillCard;
