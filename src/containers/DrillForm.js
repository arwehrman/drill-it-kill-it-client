import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateDrillFormData } from '../actions/drillForm'
import { createDrill } from '../actions/drills'


class DrillForm extends Component{

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentDrillForm = Object.assign({}, this.props.drillFormData, {[name]: value})
    this.props.updateDrillFormData(currentDrillForm)
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const {createDrill} = this.props
    createDrill(this.props.drillFormData);
  };

  render() {
    const {title, description, category} = this.props.drillFormData;

    return (

        <div className="drillform">
          <h3>Add A Drill</h3>
          <form onSubmit={this.handleFormSubmit}>
            <input
              type="text"
              name="title"
              value={title}
              onChange={ event => this.handleOnChange(event)}
              placeholder="Title"></input><br/><br/>
            <textarea
              type="text"
              name="description"
              value={description}
              onChange={ event => this.handleOnChange(event)}
              placeholder="Description"></textarea><br/><br/>
           <select
                type="text"
                name="category"
                value={category}
                onChange={ event => this.handleOnChange(event)}>
                  <option></option>
                  <option value="Defense">Defense</option>
                  <option value="Jammer">Jammer</option>
                  <option value="Offense">Offense</option>
                </select><br/><br/>
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
