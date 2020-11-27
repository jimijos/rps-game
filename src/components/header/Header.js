import React from "react";
import "./Header.css";
//sub components
import ScoreCard from "../scorecard/ScoreCard";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ScoreCard />
    </div>
  );
};

export default Header;

//linear-gradient(#1E3555, #161F40)
