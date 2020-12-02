import React,{ useContext } from 'react';
import './PlayAgain.css';
import {Link} from 'react-router-dom';
import { getGameResult, calculateScore } from '../../utilityfunctions/utils';
import {gameDataContex} from '../../gamedatastore/GameDataProvider';

const PlayAgain = () => {
    const {
        userScore,
        userChoice,
        houseChoice,
        updateUserScore,
    } = useContext(gameDataContex);

    let result = getGameResult(userChoice, houseChoice);
    
    // useEffect(() => {
    //     // updateUserScore(calculateScore(userScore, result));
    //     clickHandler();
    // }, [clickHandler])
      const clickHandler = () => {
        updateUserScore(calculateScore(userScore, result));
      }

    return (<div className='playagain visible' >
                <h1>{result.text}</h1>
                <Link to='/'>
                    <button onClick={clickHandler}>Play Again</button>
                </Link>
           </div>)
}

export default PlayAgain; 