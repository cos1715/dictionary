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
        ><i className="fas fa-language" /> Learn</NavLink>
        <NavLink
          to="/vocabulary"
          className="sidebar-link"
          activeClassName="navLink-selected"
        ><i className="fas fa-book-open" /> Vocabluary</NavLink>
        <NavLink
          to="/tests"
          className="sidebar-link"
          activeClassName="navLink-selected"
        ><i className="fas fa-medal" /> Play</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;