import React from "react"; 
import "./TextContainer.css";

const TextContainer = (props) => {
    return (
      <div className={props.class + " text-container"}>
          {props.children}
      </div>
    )
}

export default TextContainer;