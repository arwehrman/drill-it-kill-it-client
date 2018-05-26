import React, { Component } from 'react';
import {connect} from 'react-redux';
import {updateDrillFormData} from '../actions/drillForm'
import {createDrill} from '../actions/drills'

class DrillForm extends Component{

  handleChange = event => {
    const { name, value } = event.target;
    const currentDrillForm = Object.assign({}, this.props.drillFormData, {[name]: value})
    this.props.updateDrillFormData(currentDrillForm)
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.createDrill(this.props.drillFormData);
  };

  render() {
    const {title, description, category} = this.props.drillFormData;
    return (

      <div>
        <h3>Add A Drill</h3>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            name="title"
            value={title}
            onChange={ (event) => this.handleChange(event)}
            placeholder="Title"></input><br/><br/>
          <textarea
            type="text"
            name="description"
            value={description}
            onChange={ (event) => this.handleChange(event)}
            placeholder="Description"></textarea><br/><br/>
            <input
              type="text"
              name="category"
              value={category}
              onChange={ (event) => this.handleChange(event)}
              placeholder="Category"></input><br/><br/>
          <button type="submit">Submit</button>
        </form>
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    drillFormData: state.drillFormData
  }
}

export default connect(mapStateToProps, {
  updateDrillFormData,
  createDrill
})(DrillForm);
