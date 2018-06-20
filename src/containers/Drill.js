import React, { Component } from 'react';
import { connect } from 'react-redux';
import DrillCard from '../components/DrillCard';
import { likeDrill, deleteDrill, getDrills } from '../actions/drills'

class Drill extends Component {

  render(){
     const { drill, deleteDrill, likeDrill} = this.props;
    return (
      <div>
        <DrillCard  drill={drill}/>
      <button onClick={() => deleteDrill(drill.id)}>Delete</button>
      <button onClick={() => likeDrill(drill)}>Like</button>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return({
    drills: state.drills
  })
}

export default connect(mapStateToProps, { likeDrill, deleteDrill, getDrills})(Drill);
