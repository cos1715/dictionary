import React from 'react';
import { NavLink } from 'react-router-dom';

import './Sidebar.css';

export const Sidebar = () => {
  return (
    <aside className="sidebar-div">
      <nav className="sidebar-nav">
        <NavLink
          exact to="/"
          className="sidebar-link"
          activeClassName="navLink-selected"
        >Learn</NavLink>
        <NavLink
          to="/vocabulary"
          className="sidebar-link"
          activeClassName="navLink-selected"
        >Vocabluary</NavLink>
        <NavLink
          to="/tests"
          className="sidebar-link"
          activeClassName="navLink-selected"
        >Play</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;