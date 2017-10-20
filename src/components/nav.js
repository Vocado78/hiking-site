import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav-container">
    <div className="nav">
    <h1 style={{letterSpacing:"0.03em", fontSize:"1.5em"}}>Hiking Trails in Sweden</h1>
    <ul className="nav-list">
      <li>
        <NavLink exact activeClassName='active' to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/about'>
          About
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/contact'>
          Contact
        </NavLink>
      </li>
    </ul>
    </div>
    </div>
  );
}

export default Nav;
