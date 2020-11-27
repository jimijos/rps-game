import React from "react";
import "./Basic.css";
import CircularComponent from "../../circularcomponent/CircularComponent";
const Basic = () => {
  return (
    <div className="basic"> 
      <div className="basic-top">
        <CircularComponent source="basic" componentName="paper" />
        <CircularComponent source="basic" componentName="scissor" />
      </div>
      <div className="basic-bottom">
        <CircularComponent source="basic" componentName="rock" />
      </div>
    </div>
  );
};

export default Basic;
