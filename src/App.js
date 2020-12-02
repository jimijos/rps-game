import React,{useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
    userChoice
} = useContext(gameDataContex);

  const [rulesClicked, setRulesClicked] = useState(false);
  const showRules = () => {
    setRulesClicked(!rulesClicked);
    } 

  return (
    <Router>
      <div className="App"> 
      <Header />
      <Switch>
      <Route
            exact
            path="/"
            component={GameMainPage}/>
      <Route
            exact
            path={`/${userChoice}`}
            component={PlayBoard}/>
            <Route exact path='/paper' component={GameMainPage} />
            <Route path='/scissor' component={GameMainPage} />
            <Route path='/rock' component={GameMainPage} />
            <Route path='/spock' component={GameMainPage} />
            <Route path='/lizard' component={GameMainPage} />
      </Switch>
      <GameSceneSelector />
      <Reset />
      <RulesButton handleClick={showRules}/>
      <BasicRules rulescard={rulesClicked} handleClick={showRules}/>
      </div>
    </Router>
  );
}


























  // const choiceHandler = ({target:{classList}}) => {
  //   setUser(() => classList[1])
  //   setHouse(getRandomElement(choices))
  //   setCho('')
  //   // console.log(userChoice, 1)
  // }