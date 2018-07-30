import React, {Component} from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class DrillCard extends Component {

  render(){
      const {drill} = this.props

    return (
          <div className="drillcard" >
          <Link key={drill.id} to={`drills/${drill.id}`}>{drill.title}</Link>
            <p>Category: {drill.category}</p>
            <p>Level: {drill.level}</p>
          </div>
        )
    }
  }

  const mapStateToProps = state => {
    return {
      drills: state.drills
    }
  }



export default connect(mapStateToProps)(DrillCard);
