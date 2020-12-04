import React,{useState, useContext } from "react";
import "./styles.css";
//components
import GameMainPage from './components/gamemainpage/GameMainPage'
import Header from './components/header/Header'
import RulesButton from './components/rules/RulesButton';
import BasicRules from './components/rules/basicrules/BasicRules';
import Reset from './components/reset/Reset';
import GameSceneSelector from './components/gamescenenselector/GameSceneSelector';
import PlayBoard from "./components/playboard/PlayBoard";
//Contexts
import {gameDataContex} from './gamedatastore/GameDataProvider';



export default function App() {
  const {
    userChoice,
    houseChoice
} = useContext(gameDataContex);

  const [rulesClicked, setRulesClicked] = useState(false);
  const showRules = () => {
    setRulesClicked(!rulesClicked);
    } 

  return (
      <div className="App"> 
        <Header />
        {(userChoice && houseChoice)? <PlayBoard /> : <GameMainPage />}
        <GameSceneSelector />
        <Reset />
        <RulesButton handleClick={showRules}/>
        <BasicRules rulescard={rulesClicked} handleClick={showRules}/>
      </div>
  );
}


























  // const choiceHandler = ({target:{classList}}) => {
  //   setUser(() => classList[1])
  //   setHouse(getRandomElement(choices))
  //   setCho('')
  //   // console.log(userChoice, 1)
  // }