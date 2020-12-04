import React, {useContext} from 'react';
import './GameSceneSelector.css';
import {gameDataContex} from '../../gamedatastore/GameDataProvider';

const GameSceneSelector = () => {
    const {
        setUserChoice,
        setHouseChoice,
        isAdvanced,
        setIsAdvanced
    } = useContext(gameDataContex);
    const sceneHandler = () => {
        setIsAdvanced(!isAdvanced);
        setUserChoice('');
        setHouseChoice('');
    }

    return <button className='sceneselector' name= 'basic' onClick={sceneHandler}>{isAdvanced? 'BASIC' : 'ADVANCED'}</button>
}

export default GameSceneSelector;