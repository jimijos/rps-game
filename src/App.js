import React,{useState, createContext, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles.css";
//components
import Header from "./components/header/Header";
import GameBoard from "./components/gameboard/GameBoard";
import RulesButton from './components/rules/RulesButton';
import BasicRules from './components/rules/basicrules/BasicRules'
import {choices, getRandomElement} from './utilityfunctions/utils';
//Contexts
export const userChoiceContext = createContext();
export const updateUserChoiceContext = createContext()
//user and house choices
export const choContext = createContext();
export const houseChoiceContext = createContext();

export default function App() {
  const [userChoice, setUserChoice] = useState('');
  const [houseChoice, setHouseChoice] =useState('')
  const choiceHandler = ({target:{classList}}) => {
    setUserChoice(() => classList[1])
    setHouseChoice(getRandomElement(choices))
    setCho('')
    // console.log(userChoice, 1)
  }
  const [cho, setCho] = useState('')
  useEffect(() => {
    setCho(userChoice);
    // console.log(userChoice,'use')
  },[userChoice])
  const [rulesClicked, setRulesClicked] = useState(false);
  const showRules = () => {
    setRulesClicked(!rulesClicked);
    }   
  return (
  //  <themeContext.Provider value={rulesClicked}>
  //    <themeUpdateContext.Provider value={showRules}>
  <choContext.Provider value={cho}>
  <houseChoiceContext.Provider value={houseChoice}>
  <userChoiceContext.Provider value={userChoice}>
    <updateUserChoiceContext.Provider value={choiceHandler}>
    <Router>
      <div className="App">  
        <Header />
        <GameBoard />
        <RulesButton handleClick={showRules}/>
        <BasicRules rulescard={rulesClicked} handleClick={showRules}/>
      </div>
    </Router>
     </updateUserChoiceContext.Provider>
   </userChoiceContext.Provider>
   </houseChoiceContext.Provider>
   </choContext.Provider>
  //   </themeUpdateContext.Provider>
  // </themeContext.Provider>
  );
}
