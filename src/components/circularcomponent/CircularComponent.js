import React,{useContext} from "react";
import {Link} from 'react-router-dom';
import "./CircularComponent.css";
import { returnImage, getRandomElement, getGameResult } from '../../utilityfunctions/utils'
import {gameDataContex} from '../../gamedatastore/GameDataProvider';




const CircularComponent = ({ componentName, choice }) => { 
  const {
    userChoice,
    setUserChoice,
    houseChoice,
    setHouseChoice,
    setGameResult,
    isAdvanced
} = useContext(gameDataContex);

  let choices = isAdvanced? ['rock', 'paper', 'scissor', 'lizard', 'spock'] : ['rock', 'paper', 'scissor'];
  

  ////
  let namechoice = componentName;
  const clickHandler = (e) => {
    setUserChoice(namechoice);
    setHouseChoice(getRandomElement(choices));
    setGameResult(getGameResult(userChoice, houseChoice));
  }
  return (
    <div className='notclickable'>
      <Link
        to={{
          pathname:`/${namechoice}`
        }}
        onClick={clickHandler}
      >
      <div className={`circularcomponent ${isAdvanced? 'advanced' : 'basic'} ${componentName} ${choice? choice : ''}`} name={componentName}>
        <div className={`innerCircle ${isAdvanced? 'advanced' : 'basic'} ${componentName}`} name={componentName}>
          {returnImage(componentName)}
        </div>
      </div>
      </Link>
    </div>
  );
};

export default CircularComponent;
