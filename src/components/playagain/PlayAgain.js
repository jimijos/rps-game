import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import './PlayAgain.css';
import {updateUserChoiceContext, choContext, houseChoiceContext} from '../../App';
import { getGameResult } from '../../utilityfunctions/utils';


const PlayAgain = () => {
    const userChoice = useContext(choContext);
    const houseChoice = useContext(houseChoiceContext);
    const updateChoice = useContext(updateUserChoiceContext);
    const result = getGameResult(userChoice, houseChoice);
    console.log(result);

    return (<div className='playagain visible' >
                <h1>{result.text}</h1>
                <button onClick={updateChoice}>Play Again</button>
           </div>)
}

export default PlayAgain;