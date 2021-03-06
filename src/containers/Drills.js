import React, { Component } from 'react';
import { connect } from 'react-redux';
import DrillForm from './DrillForm';
import Drill from '../components/Drill'
import { getDrills} from '../actions/drills'
import './Drills.css'

class Drills extends Component {

  componentDidMount() {
    this.props.getDrills()
  }

  render(){
     const { drills } = this.props;
    return (
      <div>
      <DrillForm />
        <div className="drills">
          <br />
            <h1>Drills</h1>
            <p>Due to the Rails backend being setup on Heroku it may take a few minutes for the drills to load. </p>
            {drills.map(drill => <Drill key={drill.id} drill={ drill } />)}
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
