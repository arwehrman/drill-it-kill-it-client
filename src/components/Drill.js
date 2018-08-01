import React from 'react'
import { Link } from 'react-router-dom'

const Drill = ({drill}) => (
  <div>
    <br />
    <div className="drillcard">
      <Link to={`/drills/${drill.id}`}>{drill.title}</Link>
      <p>Description: {drill.description}</p>
      <p>Category: {drill.category}</p>
      <p>Skill Level: {drill.level}</p>
    </div>
  </div>
)





export default Drill;
