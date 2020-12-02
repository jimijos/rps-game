import React,{useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./styles.css";
//components
import GameMainPage from './components/gamemainpage/GameMainPage'
import Header from './components/header/Header'
import RulesButton from './components/rules/RulesButton';
import BasicRules from './components/rules/basicrules/BasicRules';
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
            render={(props) => (<GameMainPage />)}/>
      <Route
            exact
            path={`/${userChoice}`}
            render={userChoice? (props) => (<PlayBoard />) : (props) => (<GameMainPage />)}/>
            <Redirect exact from={`/${userChoice}`} to="/" />
      </Switch>
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