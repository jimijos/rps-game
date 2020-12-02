import React, { useContext } from "react";
import './GameMainPage.css';
import Basic from "../gamescenes/basic/Basic";
import Advanced from '../gamescenes/advanced/Advanced';
import {gameDataContex} from '../../gamedatastore/GameDataProvider';

const GameMainPage = () => {
     const {
          isAdvanced
      } = useContext(gameDataContex);
      return isAdvanced? <div className='mainpage advanced'><Advanced /></div> :  <div className='mainpage'><Basic /></div>
    }


export default GameMainPage;