import React, {Component} from 'react'
import { connect } from 'react-redux';

class DrillCard extends Component {

  render(){
      const {drill} = this.props

    return (
          <div className="drillcard" >
          <h3><a href={`drills/${drill.id}`}>{drill.title}</a></h3>
            <p>Category: {drill.category}</p>
            <p>Likes: {drill.likes}</p>
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
