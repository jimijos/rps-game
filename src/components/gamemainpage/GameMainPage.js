import React,{useState, useContext} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './GameMainPage.css';

// import Header from "../header/Header";
import Basic from "../gamescenes/basic/Basic";
// import RulesButton from '../rules/RulesButton';
// import BasicRules from '../rules/basicrules/BasicRules'


const GameMainPage = () => {
    return(
        <div className='mainpage'>
            <Basic />
        </div>
    )
}


export default GameMainPage;