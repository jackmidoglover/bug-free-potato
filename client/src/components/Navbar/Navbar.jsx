import React from "react"; 
import "./Navbar.css";
import { SideNav, SideNavItem } from "react-materialize";

const Navbar = (props) => {
    return (
        <nav>
    <div className="nav-wrapper grey lighten-2">
    <img src="./assets/images/wreath.svg" alt="Floral Wreath" /><a href="/" className="brand-logo purple-text text-darken-4">Jacq Glover</a>
    
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href={props.pageLink} className="purple-text text-darken-4"><strong>{props.page}</strong></a></li>
        <li><a href="https://www.linkedin.com/in/jackmidoglover/" className="purple-text text-darken-4"><strong>LinkedIn</strong></a></li>
      </ul>
      <SideNav id="sideNav" options={{ 
      closeOnClick: true }}
      trigger={<i className="material-icons">menu</i>}>
      <SideNavItem className="sideNav-links"
        href="/projects">
          Projects
        </SideNavItem>
        <SideNavItem className="sideNav-links" 
        href="https://www.linkedin.com/in/jackmidoglover/">
          Linked In
        </SideNavItem>
        </SideNav>
      {/* <ul class="sidenav" id="mobile-demo">
      <li><a href={props.pageLink} className="purple-text text-darken-4"><strong>{props.page}</strong></a></li>
        <li><a href="https://www.linkedin.com/in/jackmidoglover/" className="purple-text text-darken-4"><strong>LinkedIn</strong></a></li>
  </ul> */}
    </div>
  </nav>
    )
}

export default Navbar;