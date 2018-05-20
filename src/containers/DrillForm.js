import React, { Component } from 'react';

class DrillForm extends Component{
  render(){
    return (
      <div>
        <h3>Add A Drill</h3>
        <form>
          <input
            type="text"
            name="title"
            value=""
            placeholder="Title"></input><br/>
          <textarea
            type="text"
            name="description"
            value=""
            placeholder="Description"></textarea><br/>
          <input
            type="text"
            name="category"
            value=""
            placeholder="Category"></input><br/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}


export default DrillForm;
