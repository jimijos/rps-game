import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import GameDataProvider from './gamedatastore/GameDataProvider';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <GameDataProvider>
      <App />
    </GameDataProvider>
  </React.StrictMode>,
  rootElement 
);
