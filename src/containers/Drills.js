import React, { Component } from 'react';
import DrillCard from '../components/DrillCard';
import DrillForm from './DrillForm'

class Drills extends Component {

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

export default Drills;
