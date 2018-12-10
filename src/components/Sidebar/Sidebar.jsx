import React from 'react';
import { NavLink } from 'react-router-dom';

import './Sidebar.css';

export const Sidebar = () => {
    return (
        <aside className="Sidebar-div">
            <nav className="Sidebar-nav">
                <NavLink
                    exact to="/"
                    className="Sidebar-link"
                    activeClassName="NavLink-selected"
                >Lear n' Play</NavLink>
                <NavLink
                    to="/vocabulary"
                    className="Sidebar-link"
                    activeClassName="NavLink-selected"
                >Your Vocabluary</NavLink>
                <NavLink
                    to="/tests"
                    className="Sidebar-link"
                    activeClassName="NavLink-selected"
                >Tests</NavLink>
            </nav>
        </aside>
    );
};

export default Sidebar;