import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import './GameSceneSelector.css';
import {gameDataContex} from '../../gamedatastore/GameDataProvider';

const GameSceneSelector = ({handleClick}) => {
    const {
        setUserScore,
        isAdvanced,
        setIsAdvanced
    } = useContext(gameDataContex);
    const resetHandler = () => {
        setUserScore(0);
        sessionStorage.setItem('userScoreData', 0);
        setIsAdvanced(!isAdvanced);
    }

    return <Link to='/'><button className='sceneselector' name= 'basic' onClick={resetHandler}>{isAdvanced? 'BASIC' : 'ADVANCED'}</button></Link>
}

export default GameSceneSelector;