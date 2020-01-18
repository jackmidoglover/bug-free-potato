import React from "react";
import "./Footer.css";

const Footer = (props) => {
    return (
        <footer className="page-footer purple darken-3">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text center">Contact</h5>
              <p className="grey-text text-lighten-4 center">
                  Email: jack-mido-glover@gmail.com
              </p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text center">Links</h5>
              <ul class="list-inline center">
            <li><span style={{fontSize: '2' + 'em'}}><a href="https://github.com/jackmidoglover"><i class="fab fa-github"></i> </a></span></li>
            <li><span style={{fontSize: '2' + 'em'}}><a href="https://www.linkedin.com/in/jackmidoglover/"><i class="fab fa-linkedin-in"></i></a></span></li>
            <li><span style={{fontSize: '2' + 'em'}}><a href="https://stackoverflow.com/users/8811683/jacq-glover"><i class="fab fa-stack-overflow"></i></a></span></li>
            <li><span style={{fontSize: '2' + 'em'}}><a href="../../assets/images/Resume.pdf"><i class="far fa-file"></i></a></span></li>
          </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
          © 2020 Jacquelyne Glover
          <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
          </div>
        </div>
      </footer>
    )
}

export default Footer;