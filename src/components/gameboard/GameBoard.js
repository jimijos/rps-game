import React from "react";
import "./GameBoard.css";
import Basic from "../gamescenes/basic/Basic";
// import PlayBoard from '../playboard/PlayBoard'


//use conditional rendering to display basic game or advanced game
//this component acts as a container for intercative part of the game
const GameBoard = () => {

  return (
    <div className="gameboard">
      <Basic />
      {/* <PlayBoard  userChoice='lizard' houseChoice='paper'/> */}
    </div>
  );
};

export default GameBoard; 
