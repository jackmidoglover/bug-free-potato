import React from "react"; 
import "./TextContainer.css";

const TextContainer = (props) => {
    return (
      <div class={props.class + " text-container"}>
          {props.children}
      </div>
    )
}

export default TextContainer;