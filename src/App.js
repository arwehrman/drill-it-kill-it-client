import React, { Component } from 'react';
import Drills from './containers/Drills';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navigation />
        <Drills />
        <Footer />
      </div>
    );
  }
}

export default App;
