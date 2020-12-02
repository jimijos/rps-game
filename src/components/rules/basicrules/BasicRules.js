import React,{useContext} from 'react';
import './BasicRules.css';
import basicRulesImage from '../../../assets/image-rules.svg';
import advRulesImage from '../../../assets/image-rules-bonus.svg';
import { gameDataContex } from '../../../gamedatastore/GameDataProvider';


const BasicRules = ({rulescard, handleClick}) => {
    const {
        isAdvanced
        } = useContext(gameDataContex); 
    return <div className={rulescard? 'rules-container visible' : 'rules-container hidden'}>
        <div className='card'>
            <div className='card-header'>
                <h2>RULES</h2>
                <button onClick={handleClick}>X</button>
            </div>
            <div className='card-img'>
                <img src={isAdvanced? advRulesImage : basicRulesImage} alt='gamerules'/>
            </div>
        </div>
    </div>
}


export default BasicRules;