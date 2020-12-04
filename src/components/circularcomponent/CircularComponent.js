import React,{useContext} from "react";
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
      <div onClick={clickHandler} className={`circularcomponent ${isAdvanced? 'advanced' : 'basic'} ${componentName} ${choice? choice : ''}`} name={componentName}>
        <div onClick={clickHandler} className={`innerCircle ${isAdvanced? 'advanced' : 'basic'} ${componentName}`} name={componentName}>
          {returnImage(componentName, clickHandler)}
        </div>
      </div>
    </div>
  );
};

export default CircularComponent;
