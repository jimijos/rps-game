import React from 'react';
import './BasicRules.css';
import basicRulesImage from '../../../assets/image-rules.svg';


const BasicRules = ({rulescard, handleClick}) => {
    console.log(rulescard)
    return <div className={rulescard? 'rules-container visible' : 'rules-container hidden'}>
        <div className='card'>
            <div className='card-header'>
                <h2>RULES</h2>
                <button onClick={handleClick}>X</button>
            </div>
            <div className='card-img'>
                <img src={basicRulesImage} alt='gamerules'/>
            </div>
        </div>
    </div>
}


export default BasicRules;