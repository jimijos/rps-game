import React, {useContext} from "react";
import "./Header.css";
//sub components
import ScoreCard from "../scorecard/ScoreCard";
import logo from "../../assets/logo.svg";
import advlogo from '../../assets/logo-bonus.svg'
import {gameDataContex} from '../../gamedatastore/GameDataProvider';

const Header = () => {
  const {
    isAdvanced
    } = useContext(gameDataContex); 
  return (
    <div className="header">
      <div className="logo">
        <img src={isAdvanced? advlogo : logo} alt="logo" />
      </div>
      <ScoreCard />
    </div>
  );
};

export default Header;

//linear-gradient(#1E3555, #161F40)
