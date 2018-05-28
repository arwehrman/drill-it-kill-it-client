import React, { Component } from 'react';
import { connect } from 'react-redux';
import DrillCard from '../components/DrillCard';
import { getDrills } from '../actions/drills'


class Drills extends Component {
  componentDidMount() {
    this.props.getDrills()
  }

  render(){
    return (
      <div className="drills">
        <h3>List of Drills</h3>
        {this.props.drills.map(drill => < DrillCard key={ drill.id } id={drill.id} drill={ drill } />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return({
    drills: state.drills
  })
}

export default connect(mapStateToProps, {getDrills})(Drills);
