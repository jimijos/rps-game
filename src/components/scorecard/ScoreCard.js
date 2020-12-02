import React,{useContext} from "react";
import "./ScoreCard.css";
import {gameDataContex} from '../../gamedatastore/GameDataProvider';

const ScoreCard = () => {
    const {
        userScore
    } = useContext(gameDataContex);
  return (
    <div className="scorecard">
      <h3>SCORE</h3>
      <p>{userScore}</p>
    </div>
  );
};

export default ScoreCard;
