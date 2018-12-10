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
        >Lear n' Play</NavLink>
        <NavLink
          to="/vocabulary"
          className="sidebar-link"
          activeClassName="navLink-selected"
        >Your Vocabluary</NavLink>
        <NavLink
          to="/tests"
          className="sidebar-link"
          activeClassName="navLink-selected"
        >Tests</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;