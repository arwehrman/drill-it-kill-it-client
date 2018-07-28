import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => (
  <div  className="navigation">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/drills">Drills</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </div>
);

export default NavBar;
