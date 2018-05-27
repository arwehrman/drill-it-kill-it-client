import React, { Component } from 'react';
import Drills from './containers/Drills';
import DrillForm from './containers/DrillForm'
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <div className="main">
        <DrillForm />
        <Drills />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
