import React from "react";
import "./Advanced.css";
import CircularComponent from "../../circularcomponent/CircularComponent";



const Advanced = () => {

  return (
    <div className="advanced-container" > 
      <div className="advanced-top">
        <CircularComponent hoverable source="advanced" componentName="scissor" />
      </div>
      <div className="advanced-middle">
        <CircularComponent hoverable source="advanced" componentName="spock" />
        <CircularComponent hoverable source="advanced" componentName="paper" />
      </div>
      <div className="advanced-bottom">
        <CircularComponent hoverable source="advanced" componentName="lizard" />
        <CircularComponent hoverable source="advanced" componentName="rock" />
      </div>
    </div>
  );
};

export default Advanced;