import Grid from './grid'
import Sprites from '../../components/sprites'
import React, { useState, useEffect, useRef } from 'react';
import ScoreBar from '../../components/ScoreBar'
import Play from "./Play"
import GameOver from './GameOver'

const GameBox = ({endGameData, turnData, turn, newGame}: props) => {
  const [stars, updateStars] = useState([]);
  const [enemies, updateEnemies] = useState([]);
  const [ship, updateShip] = useState({positionX: 0, positionY: 0});
  
  useEffect(() => { 
    async function getPlayerPosition() {
      let positionX = turnData[turn].args.ships.positionX.toNumber(); 
      let positionY = turnData[turn].args.ships.positionY.toNumber(); 
        updateShip(oldState => {return{...oldState, positionX, positionY}});
      }

    async function getStarPosition() {
      const starArray = [];
      for(let i = 0; i < 16; i++){
        if(turnData[turn].args.allStars[i].isActive){
          let x = turnData[turn].args.allStars[i].positionX.toNumber(); 
          let y = turnData[turn].args.allStars[i].positionY.toNumber(); 
          const star = {positionX: x, positionY: y}
          starArray.push(star);
          }
        }
      updateStars(starArray);
    }

    async function getEnemyPosition() {
      const enemyArray = [];
      for(let i = 0; i < 3; i++){
        if(turnData[turn].args.allEnemies[i].isActive){
          let x = turnData[turn].args.allEnemies[i].positionX.toNumber(); 
          let y = turnData[turn].args.allEnemies[i].positionY.toNumber(); 
          const enemy = {positionX: x, positionY: y}
          enemyArray.push(enemy);
          }
        }
      updateEnemies(enemyArray);
    } 

    getPlayerPosition(); 
    getStarPosition();
    getEnemyPosition();
  }, [turn])
  
  return(
        <div>
           <Sprites stars={stars} ship={ship} turn={turn} enemies={enemies} /> 
        </div>
   )
}

export default GameBox 


