import React,{useState, createContext} from "react";
import "./styles.css";
//components
import Header from "./components/header/Header";
import GameBoard from "./components/gameboard/GameBoard";
import RulesButton from './components/rules/RulesButton';
import BasicRules from './components/rules/basicrules/BasicRules'
// export const themeContext = createContext();
// export const themeUpdateContext = createContext();

export default function App() {
  const [rulesClicked, setRulesClicked] = useState(false);
  const showRules = () => {
    setRulesClicked(!rulesClicked);
    }   
  return (
  //  <themeContext.Provider value={rulesClicked}>
  //    <themeUpdateContext.Provider value={showRules}>
    <div className="App">  
      <Header />
      <GameBoard />
      <RulesButton handleClick={showRules}/>
      <BasicRules rulescard={rulesClicked} handleClick={showRules}/>
    </div>
  //   </themeUpdateContext.Provider>
  // </themeContext.Provider>
  );
}
