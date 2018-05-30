import React from 'react'


const DrillCard = ({ drill, likeDrill, deleteDrill }) => {

  const handleOnClick = () => {
    console.log(drill.id)
    deleteDrill(drill)
  }

  const handleLikesClick = () => {
    console.log('clicked')
    deleteDrill()
  }

return (
      <div className="card" key={drill.id} >
        <h3>{drill.title}</h3>
        <p>{drill.id}</p>
        <p>Description: {drill.description}</p>
        <p>Category: {drill.category}</p>
        <p>Likes: {drill.likes}</p>
        <button onClick={() => handleOnClick(drill.id)}>Delete</button>
        <button onClick={() => handleLikesClick(drill.id)}>Like</button>
      </div>
    )
}



export default DrillCard;
