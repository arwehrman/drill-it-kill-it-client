import React, { Component } from 'react';
import Drills from './containers/Drills'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      drills: []
    }
  }
  
  componentDidMount() {
    fetch('http://localhost:3001/api/drills')
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
