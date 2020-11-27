import React,{useState} from "react";
import "./styles.css";
//components
import Header from "./components/header/Header";
import GameBoard from "./components/gameboard/GameBoard";
import RulesButton from './components/rules/RulesButton';
import BasicRules from './components/rules/basicrules/BasicRules'

export default function App() {
  const [rulesClicked, setRulesClicked] = useState(false);
  const showRules = ({target: {name}}) => {
    console.log(name);
    setRulesClicked(!rulesClicked);
    console.log(rulesClicked);
    }   
  return (
    <div className="App"> 
      <Header />
      <GameBoard />
      <RulesButton handleClick={showRules}/>
      <BasicRules rulescard={rulesClicked} handleClick={showRules}/>
    </div>
  );
}
