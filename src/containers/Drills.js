import React, { Component } from 'react';
import { connect } from 'react-redux';
import DrillCard from '../components/DrillCard';
import { getDrills, likeDrill, deleteDrill } from '../actions/drills'


class Drills extends Component {
  componentDidMount() {
    this.props.getDrills()
  }

  render(){
     const { drills, likeDrill, deleteDrill } = this.props;
    return (
      <div className="drills">
        <h3>List of Drills</h3>
        {drills.map(drill => < DrillCard key={ drill.id } id={drill.id} likeDrill={likeDrill} deleteDrill={deleteDrill} drill={ drill } />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return({
    drills: state.drills
  })
}

export default connect(mapStateToProps, {getDrills, likeDrill, deleteDrill})(Drills);
