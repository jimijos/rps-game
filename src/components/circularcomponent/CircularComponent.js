import React from "react";
import "./CircularComponent.css";

//images
import paperIcon from "../../assets/icon-paper.svg";
import scissorIcon from "../../assets/icon-scissors.svg";
import rockIcon from "../../assets/icon-rock.svg";
// import spockIcon from "../../assets/icon-spock.svg";
// import lizardIcon from "../../assets/icon-lizard.svg";

const CircularComponent = ({ componentName }) => {
  const returnImage = (componentName) => {
    switch (componentName) {
      case "paper":
        return <img src={paperIcon} className={`circleIcon`} alt="paper" name={componentName}/>;

      case "scissor":
        return (
          <img src={scissorIcon} className={`circleIcon`} alt="scissor" name={componentName}/>
        );

      case "rock":
        return <img src={rockIcon} className={`circleIcon`} alt="rock" name={componentName}/>;
      default:
        return null;
    }
  };
  return (
    <div className={`circularcomponent ${componentName}`} name={componentName}>
      <div className={`innerCircle ${componentName}`} name={componentName}>
        {returnImage(componentName)}
      </div>
    </div>
  );
};

export default CircularComponent;
