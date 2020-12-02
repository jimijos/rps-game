import React from 'react';
import './RulesButton.css';
//sub-components

const RulesButton = ({handleClick}) => {
    //if basic show basic rules if advanced show advanced rules

    return <button className='basicrules' name= 'basic' onClick={handleClick}>RULES</button>
}

export default RulesButton;