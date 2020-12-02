import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import './Reset.css';
import {gameDataContex} from '../../gamedatastore/GameDataProvider';

const Reset = ({handleClick}) => {
    const {
        setUserScore
    } = useContext(gameDataContex);
    const resetHandler = () => {
        setUserScore(0);
        sessionStorage.setItem('userScoreData', 0)
    }

    return <Link to='/'><button className='reset' name= 'basic' onClick={resetHandler}>RESET</button></Link>
}

export default Reset;