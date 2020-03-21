import React from "react";
import "./PortfolioCard.css";

const PortfolioCard = ( props ) => {
    return (
        <div>
        <div className="col s12 m6 l6">
        <div className="card">
          <div className="card-image overlay-container">
            <img className="portfolio-img" src={props.imagePath} alt={props.title} />
            <div className="overlay">
              <div className="portfolio-text">
            <h3 className="project-title center dark-purple-text">{props.title}</h3>
              <p className="project-description center"><strong>Tech Stack:</strong>
              {props.technologies.map(technology => 
                { return <span className="tech" key={props.id + 245}> {technology.name}</span>
                }
                )}
              </p>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon class="svg-sm" fill="#ebebeb" points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"/>
            <polygon class="svg--lg" fill="#ebebeb" points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100" />
            </svg>
          </div>
          <div className="card-action">
    <a className="btn-large star" href={props.projectLink}>Open</a>
    <a className="btn-large star" href={props.repoLink}><i className="material-icons left">code</i>See Code</a>
          </div>
        </div>
      </div>
      </div>
    )
};

export default PortfolioCard;