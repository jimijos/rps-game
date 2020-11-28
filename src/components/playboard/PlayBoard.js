import React from 'react';
import './PlayBoard.css'
import CircularComponent from "../circularcomponent/CircularComponent";


const PlayBoard = ({userChoice, houseChoice}) => {
    return <div className='playboard' >
       { userChoice?<CircularComponent /> : null}
       { houseChoice?<CircularComponent /> : null}
    </div>
}


export default PlayBoard;