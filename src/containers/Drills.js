import React, { Component } from 'react';
import { connect } from 'react-redux';
import Drill from './Drill';
import DrillForm from './DrillForm'
import { getDrills} from '../actions/drills'

class Drills extends Component {
  componentDidMount() {
    this.props.getDrills()
  }

  render(){
     const { drills } = this.props;

    return (
      <div>
      <br />
        <DrillForm />
        <div className="drills">
          <h2>List of Drills</h2>
          {drills.map(drill => < Drill key={ drill.id } id={drill.id} drill={ drill } />)}
      </div>
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
