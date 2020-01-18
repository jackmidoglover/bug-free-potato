import React from "react";

const PortfolioCard = ( props ) => {
    return (
        <div>
        <div class="col s12 m6">
        <div class="card">
          <div class="card-image">
            <img className="portfolio-img" src={props.imagePath} alt={props.title} />
            <span class="card-title">{props.title}</span>
          </div>
     
          <div class="card-action">
    <a className="btn-large star" href={props.projectLink}>Open</a>
    <a className="btn-large star" href={props.repoLink}><i class="material-icons left">code</i>See Code</a>
          </div>
        </div>
      </div>
      </div>
  
//     <div class="col s12 m6">
//   <div class="card medium">
//     <div class="card-image waves-effect waves-block waves-light" id="image">
//       <img src={props.imagePath} alt="props.title" className="portfolio-img" />
//     </div>
//     <div class="card-content titleArea moon">
//       <span class="card-title activator moon"> {props.title} <i class="material-icons right">keyboard_arrow_up</i></span>
//     </div>
//       <div class="card-reveal">
//         <span class="card-title moon"> {props.title} <i class="material-icons right">close</i></span>
//         <p>{props.description}</p>
//         {/* <a class="waves-effect waves-light btn modal-trigger linkBtn" click="onModalClick($event)">Technologies</a> */}
        
//         <a class="btn star" href={props.projectLink}>Open {props.title}</a>
//         <a class="btn star" href={props.repoLink}><i class="material-icons left">code</i>See Code</a>
//       </div>
//     </div>
// </div>
    )
};

export default PortfolioCard;