import React from 'react'
import { deleteDrill } from '../actions/drills'

const DrillCard = ({ drill }) => (
  <div className="card" key={drill.id} >
    <h4>{drill.title}</h4>
    <p>Description: {drill.description}</p>
    <p>Category: {drill.category}</p>
    <button onClick={() => this.handleOnClick()}>Delete</button>

  </div>
)



export default DrillCard;
