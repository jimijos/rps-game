import React, { useContext } from 'react';
import './PlayBoard.css'
import CircularComponent from "../circularcomponent/CircularComponent";
import PlayAgain from '../playagain/PlayAgain';
import Basic from '../gamescenes/basic/Basic';
import {gameDataContex} from '../../gamedatastore/GameDataProvider';


const PlayBoard = () => {
    const {
        userChoice,
        houseChoice,
    } = useContext(gameDataContex);

    if(userChoice && houseChoice){  
        return(
        <div className='playboard' >
        <div className='playboard-card'>
            <h2>YOU PICKED</h2>
        { userChoice?<CircularComponent hoverable source="basic" componentName={userChoice} choice='user'/> : null}
       </div>
        <PlayAgain />
        <div className='playboard-card'>
        <div className='circular-spot'></div>
            <h2>THE HOUSE PICKED</h2>
        { houseChoice?<CircularComponent hoverable source="basic" componentName={houseChoice} choice='house'/> : null}
       </div>
    </div>
            )
        }
     else {
        return(
                <Basic />
           )
        }
}


export default PlayBoard;