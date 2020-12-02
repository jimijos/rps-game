import React,{createContext, useContext, useState} from "react";
import "./GameBoard.css";
import Basic from "../gamescenes/basic/Basic";
import PlayBoard from '../playboard/PlayBoard'
import {gameDataContex} from '../../gamedatastore/GameDataProvider';



const GameBoard = () => {
  const {
    userScore,
    setUserScore,
    userChoice,
    houseChoice,
} = useContext(gameDataContex);



 if(userChoice && houseChoice){
  return  (<div className="gameboard">
              <div className='playboard-container'>
                <PlayBoard  userChoice={userChoice} houseChoice={houseChoice} />
              </div>
            </div>)
 }else{
          return (
            <div className="gameboard">
              <Basic />
            </div>
          );
      }
};

export default GameBoard; 
