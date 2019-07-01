import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => (
  <div  className="navigation">
    <Link to="/">Home</Link>
    <Link to="/drills">Drills</Link>
    <Link to="/contact">Contact</Link>
  </div>
);

export default NavBar;
