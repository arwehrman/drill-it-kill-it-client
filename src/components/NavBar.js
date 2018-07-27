import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <div  className="navigation">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/drills">Drills</NavLink>
    <NavLink to="/contact">Contact</NavLink>
    <NavLink to="/drills/new">Add Drill</NavLink>
  </div>
);

export default NavBar;
