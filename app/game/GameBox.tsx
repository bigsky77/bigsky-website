import Grid from './grid'
import Sprites from '../../components/sprites'
import React, { useState, useEffect, useRef } from 'react';
import ScoreBar from '../../components/ScoreBar'
import Play from "./Play"
import GameOver from './GameOver'

const GameBox = ({endGameData, turnData, turn, newGame}: props) => {
  const [stars, updateStars] = useState([]);
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

    getStarPosition();
    getPlayerPosition(); 
  }, [turn])
  
  return(
        <div>
           <Sprites stars={stars} ship={ship} turn={turn} /> 
        </div>
   )
}

export default GameBox 


