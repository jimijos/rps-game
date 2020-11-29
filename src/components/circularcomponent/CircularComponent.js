import React,{useContext} from "react";
import {Link} from 'react-router-dom';
import "./CircularComponent.css";
import {returnImage} from '../../utilityfunctions/utils'

// //images
// import paperIcon from "../../assets/icon-paper.svg";
// import scissorIcon from "../../assets/icon-scissors.svg";
// import rockIcon from "../../assets/icon-rock.svg";
// // import spockIcon from "../../assets/icon-spock.svg";
// // import lizardIcon from "../../assets/icon-lizard.svg";

//Context
import { userChoiceContext, updateUserChoiceContext, choContext } from '../../App';


const CircularComponent = ({ componentName }) => {
  const userChoice = useContext(userChoiceContext); 
  const userChoiceHandler = useContext(updateUserChoiceContext);
  const choUser = useContext(choContext);
  // console.log(userChoice, 1);
  // console.log(choUser, 2);
  return (
    <Link
      to={{
        pathname:`/`
      }}
      onClick={userChoiceHandler}
      name={componentName}
    >
    <div className={`circularcomponent ${componentName} win`} name={componentName}>
      <div className={`innerCircle ${componentName}`} name={componentName}>
        {returnImage(componentName)}
      </div>
    </div>
    </Link>
  );
};

export default CircularComponent;
