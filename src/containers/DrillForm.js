import React, { Component } from 'react';

class DrillForm extends Component{
  constructor(props){
    super(props);

    this.state = {
      title: '',
      description: '',
      category: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { title, description, category  } = this.state;
    console.log(this.state)
    this.state.onSubmit({ title, description, category });
  };

  render() {
    return (
      <div>
        <h3>Add A Drill</h3>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="Title"></input><br/><br/>
          <textarea
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            placeholder="Description"></textarea><br/><br/>
            <input
              type="text"
              name="category"
              value={this.state.category}
              onChange={this.handleChange}
              placeholder="Category"></input><br/><br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default DrillForm;
