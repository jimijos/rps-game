import React from "react";
import "./GameBoard.css";
import Basic from "../gamescenes/basic/Basic";

//use conditional rendering to display basic game or advanced game
//this component acts as a container for intercative part of the game
const GameBoard = () => {
  return (
    <div className="gameboard">
      <Basic />
    </div>
  );
};

export default GameBoard; 
