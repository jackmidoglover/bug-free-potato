import React from "react"; 
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav>
    <div className="nav-wrapper grey lighten-2">
    <img src="./assets/images/crystal.svg" alt="Crystal" /><a href="/" className="brand-logo purple-text text-darken-4">Jacq Glover</a>
    
      <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li><NavLink exact to="/" className="purple-text text-darken-4" activeClassName="active"><strong>About</strong></NavLink></li>
        <li><NavLink exact to="/projects" className="purple-text text-darken-4" activeClassName="active"><strong>Projects</strong></NavLink></li>
        <li><a href="https://www.linkedin.com/in/jackmidoglover/" className="purple-text text-darken-4"><strong>LinkedIn</strong></a></li>
      </ul>
    </div>
  </nav>
    )
}

export default Navbar;