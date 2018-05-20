import React, { Component } from 'react';
import Drills from './containers/Drills'
import './App.css';

const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      drills: []
    }
  }

  componentDidMount() {
    fetch(`${API_URL}/drills`)
    .then(response => response.json())
    .then(drills => this.setState({ drills }))
  }

  render() {
    return (
      <div className="App">
          <h1 className="App-title">Drill It Kill It</h1>
          <Drills drills={ this.state.drills}/>
      </div>
    );
  }
}

export default App;
