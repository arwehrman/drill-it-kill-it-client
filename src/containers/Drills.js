import React, { Component } from 'react';
import { connect } from 'react-redux';
import Drill from './Drill';
import DrillForm from './DrillForm'
import { getDrills} from '../actions/drills'

class Drills extends Component {
  componentDidMount() {
    this.props.getDrills()
  }

  handleOnChange(event) {
    const { name, value } = event.target;
    console.log(value)
  }

  render(){
     const { drills } = this.props;

    return (
      <div>
        <DrillForm />
        <div className="drills">
          <h2>List of Drills</h2>
          <h4>Filter by Category:</h4>
          <select
               type="text"
               name="category"
               value="catogory"
               onChange={ event => this.handleOnChange(event)}>
                 <option></option>
                 <option value="Defense">Defense</option>
                 <option value="Jammer">Jammer</option>
                 <option value="Offense">Offense</option>
               </select><br/><br/>
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
