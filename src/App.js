import React, { Component } from 'react';
import Drills from './containers/Drills'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">Drill It Kill It</h1>
          <Drills />
      </div>
    );
  }
}

export default App;
