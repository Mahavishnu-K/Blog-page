import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h2>Bloggy.it</h2>
      <div className="nav-items">
        <NavLink to="/" className={({ isActive }) => isActive ? "navbar-options active" : "navbar-options"}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "navbar-options active" : "navbar-options"}>
          About
        </NavLink>
        <NavLink to="/product" className={({ isActive }) => isActive ? "navbar-options active" : "navbar-options"}>
          Product
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "navbar-options active" : "navbar-options"}>
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
