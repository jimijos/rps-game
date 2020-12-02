import React,{useContext} from "react";
import {Link} from 'react-router-dom';
import "./CircularComponent.css";
import {returnImage, getRandomElement, getGameResult, calculateScore} from '../../utilityfunctions/utils'
import {gameDataContex} from '../../gamedatastore/GameDataProvider';



const CircularComponent = ({ componentName, choice }) => {
  let choices = ['rock', 'paper', 'scissor'];


  const {
    userChoice,
    setUserChoice,
    houseChoice,
    setHouseChoice,
    setGameResult
} = useContext(gameDataContex);
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
      <div className={`circularcomponent ${componentName} ${choice? choice : ''}`} name={componentName}>
        <div className={`innerCircle ${componentName}`} name={componentName}>
          {returnImage(componentName)}
        </div>
      </div>
      </Link>
    </div>
  );
};

export default CircularComponent;
