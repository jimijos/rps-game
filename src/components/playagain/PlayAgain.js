import React,{ useContext } from 'react';
import './PlayAgain.css';
import { getGameResult, calculateScore } from '../../utilityfunctions/utils';
import {gameDataContex} from '../../gamedatastore/GameDataProvider';

const PlayAgain = () => {
    const {
        userScore,
        userChoice,
        setUserChoice,
        houseChoice,
        setHouseChoice,
        updateUserScore
    } = useContext(gameDataContex);

    let result = getGameResult(userChoice, houseChoice);

    // useEffect(() => {
    //     updateUserScore(calculateScore(userScore, result));
    // }, [userChoice])
    
    const clickHandler = () => {
        updateUserScore(calculateScore(userScore, result))
        setUserChoice('');
        setHouseChoice('');
    }

    return (<div className='playagain visible' >
                <h1>{result.text}</h1>
                    <button onClick={clickHandler}>Play Again</button>
           </div>)
}

export default PlayAgain;