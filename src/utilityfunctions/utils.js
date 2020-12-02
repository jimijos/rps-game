//images for getImage utility function
import paperIcon from "../assets/icon-paper.svg";
import scissorIcon from "../assets/icon-scissors.svg";
import rockIcon from "../assets/icon-rock.svg";
// import spockIcon from "../assets/icon-spock.svg";
// import lizardIcon from "../assets/icon-lizard.svg";



// returns a random element from given array;
//can get houseChoice from an array of ['paper', 'rock', 'scissor', 'spock', 'lizard']
export const choices = ['paper', 'rock', 'scissor'];
export const getRandomElement = (array) => {
    return array[Math.floor(Math.random()*array.length)];
}

//get the image for the circular compoent

export const returnImage = (componentName) => {
    switch (componentName) {
      case "paper":
        return <img src={paperIcon} className={`circleIcon ${componentName}`} alt="paper" name={componentName}/>;

      case "scissor":
        return (
          <img src={scissorIcon} className={`circleIcon ${componentName}`} alt="scissor" name={componentName}/>
        );

      case "rock":
        return <img src={rockIcon} className={`circleIcon ${componentName}`} alt="rock" name={componentName}/>;
      default:
        return null;
    }
  };

//get the game result object were value property can be used to calculate gameScore
//the function can be called inside a conditional to check for the availability of both userChoice and houseChoice before it runs
export const getGameResult = (userChoice, houseChoice) => {
    //if needed move this array out of function scope and export outside.
    const possibilities = {
        rock: {afraidOf:['paper', 'spock']},
        paper: {afraidOf:['scissor', 'lizard']},
        scissor: {afraidOf:['rock', 'spock']},
        spock: {afraidOf:['paper', 'lizard']},
        lizard: {afraidOf:['rock', 'scissor']},
    }
    if(userChoice === houseChoice){
        return  {
            'text': 'IT IS A TIE',
            'value': 'tie'
        }
    }else if(possibilities[userChoice].afraidOf.includes(houseChoice)){
        return   {
            'text': 'YOU LOSE',
            'value': 'lose'
        }
    } else {
        return  {
            'text': 'YOU WIN',
            'value': 'win'
        }
    }
} 

//evaluates the gameResult and returns the calculated user score
//gameresult is the returned value of getGameResult function
//no need to check for case 'tie' included it for readability
// if loser looses a point logic is not needed then only case win and default is enough for the results
export const calculateScore = (userScore, gameResult) => {
  
    switch(gameResult.value){
        case 'win':
            return userScore + 1;
        case 'tie':
            return userScore;
        case 'lose':
            if(userScore <= 0){
                return userScore;
            }else {
                return userScore -1;
            }
        default: 
            return userScore;
    }
}