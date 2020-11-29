import React from 'react';
import './PlayBoard.css'
import CircularComponent from "../circularcomponent/CircularComponent";
import PlayAgain from '../playagain/PlayAgain';


const PlayBoard = ({userChoice, houseChoice }) => {

    console.log(userChoice, houseChoice);
    return <div className='playboard' >
        <div className='playboard-card'>
            <h2>YOU PICKED</h2>
        { userChoice?<CircularComponent hoverable source="basic" componentName={userChoice}/> : null}
       </div>
        <PlayAgain />
        <div className='playboard-card'>
            <h2>THE HOUSE PICKED</h2>
        { houseChoice?<CircularComponent hoverable source="basic" componentName={houseChoice}/> : null}
       </div>
    </div>
}


export default PlayBoard;