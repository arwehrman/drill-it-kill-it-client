import React, { Component } from 'react';
import { connect } from 'react-redux';
import DrillForm from './DrillForm';
import Drill from '../components/Drill'
import { getDrills} from '../actions/drills'


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
            <h1>List of DrillShow</h1>
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
