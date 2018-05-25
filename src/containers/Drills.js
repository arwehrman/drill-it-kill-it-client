import React, { Component } from 'react';
import { connect } from 'react-redux';
import DrillCard from '../components/DrillCard';
import { getDrills } from '../actions/drills'
import DrillForm from './DrillForm'

class Drills extends Component {
  componentDidMount() {
    this.props.getDrills()
  }

  render(){
    return (
      <div>
        <DrillForm />
        <h3>List of Drills</h3>
        {this.props.drills.map(drill => < DrillCard key={ drill.id } drill={ drill } />)}
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
