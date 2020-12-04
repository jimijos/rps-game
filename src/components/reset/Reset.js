import React, {useContext} from 'react';
import './Reset.css';
import {gameDataContex} from '../../gamedatastore/GameDataProvider';

const Reset = () => {
    const {
        setUserScore,
        setUserChoice,
        setHouseChoice
    } = useContext(gameDataContex);
    const resetHandler = () => {
        setUserScore(0);
        sessionStorage.setItem('userScoreData', 0);
        setUserChoice('');
        setHouseChoice('');
    }

    return <button className='reset' name= 'basic' onClick={resetHandler}>RESET</button>
}

export default Reset;