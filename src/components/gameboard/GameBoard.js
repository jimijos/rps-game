import React,{useContext} from "react";
import "./GameBoard.css";
import Basic from "../gamescenes/basic/Basic";
import PlayBoard from '../playboard/PlayBoard'
import { choContext,  houseChoiceContext} from '../../App';



const GameBoard = () => {
 const userChoice = useContext(choContext);
 const houseChoice = useContext(houseChoiceContext);

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
