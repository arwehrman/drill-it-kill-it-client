import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Drills from './containers/Drills';
import DrillShow from './containers/DrillShow';
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
          <br/>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/drills' component={Drills} />
              <Route exact path='/drills/:id' component={DrillShow}/>
              <Route path='/contact' component={Contact} />
            </Switch>
          <Footer />
      </div>
    </Router>
    );
  }
}

export default App;
