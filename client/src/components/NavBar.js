import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css"
const NavBar = () => {
  return (
    <div className="navbar">
    <nav>
      <ul className="list">
        <li className="list-item">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/newactivity">Add Activity</NavLink>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default NavBar;
