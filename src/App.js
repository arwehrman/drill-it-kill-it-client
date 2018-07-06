import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Drills from './containers/Drills';
import Drill from './containers/Drill'
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact'
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <NavBar />
          <div>
          <Route exact path='/' component={Home} />
          <Route path='/drills' component={Drills} />
          <Route path='/contact' component={Contact} />
          <Route path='/drills/:drillId' component={Drill} />
        </div>
          <Footer />
      </div>
    </Router>
    );
  }
}

export default App;
