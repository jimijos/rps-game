import React,{useState, createContext } from 'react';


export const gameDataContex = createContext();

const GameDataProvider = ({children}) => {
    const getInitialScore = () => {
        let initialScore = 0;
        if(sessionStorage.getItem('userScoreData')) {
          initialScore = parseInt(sessionStorage.getItem('userScoreData'), 10)
        }
        return initialScore;
      }
      const [userScore, setUserScore] = useState(() => {
        const initialScore = getInitialScore();
        return initialScore;
      });
      // update user score
      const updateUserScore = (score) => {
          setUserScore(score);
          sessionStorage.setItem("userScoreData", score);
      }

    ////
    const [userChoice, setUserChoice] = useState('');
    const [houseChoice, setHouseChoice] = useState('');
    const [gameResult, setGameResult] = useState({});
    const [isAdvanced, setIsAdvanced] = useState(false);
    let store = {
        userScore,
        setUserScore,
        userChoice,
        setUserChoice,
        houseChoice,
        setHouseChoice,
        gameResult,
        setGameResult,
        updateUserScore,
        isAdvanced,
        setIsAdvanced
    }
    return (
        <gameDataContex.Provider value={store}>
            {children}
        </gameDataContex.Provider>
    )
}



export default GameDataProvider;