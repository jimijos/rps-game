import React, { useContext } from "react";
import "./Basic.css";
import CircularComponent from "../../circularcomponent/CircularComponent";
// import {themeContext, themeUpdateContext} from '../../../App';


const Basic = () => {
  // const darkTheme = useContext(themeContext);
  // const toggleTheme = useContext(themeUpdateContext);
  // console.log(darkTheme, 1);
  //give onClick={toggleTheme} in any element.
  return (
    <div className="basic" > 
      <div className="basic-top">
        <CircularComponent hoverable source="basic" componentName="paper" />
        <CircularComponent hoverable source="basic" componentName="scissor" />
      </div>
      <div className="basic-bottom">
        <CircularComponent hoverable source="basic" componentName="rock" />
      </div>
    </div>
  );
};

export default Basic;
