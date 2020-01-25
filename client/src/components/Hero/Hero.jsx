import React from "react";
import "./hero.css";

const Navbar = (props) => {
    return (
        <div className="fog">
            <div className="s12 hero-gradient">
                
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" className="svg-triangle">
                    <polygon className="svg-sm" fill="white" points="0,0 0,0 8,40 14,20 24,40 27,40 25,55 30,0 48,80 55,20 65,80 56,90 70,20 88,85 95,30 100,0 100,100 0,100" />
                    <polygon className="svg-lg" fill="white" points="0,80 0,0 8,60 14,20 20,70 24,38 27,55 26,55 30,0 45,100 55,20 65,80 56,90 70,20 80,60 94,70 100,100 0,100" />
                </svg>
            </div>
            <div className="fog-container">
            <div className="fog-img fog-img-first"></div>
            <div className="fog-img fog-img-second"></div>                
            </div>
            <div className="hero-title">
                    <h2>Developer.  Artist.</h2> <br /> <span> Mountain woman. Moon child. </span>
                </div>
        </div>
    )
}

export default Navbar;