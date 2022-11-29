import Grid from './grid'
import Sprites from '../../components/sprites'
import React, { useState, useEffect, useRef } from 'react';
import ScoreBar from '../../components/ScoreBar'
import Play from "./Play"
import GameOver from './GameOver'

const GameBox = ({endGameData, turnData, updateRegister}: props) => {
  const [stars, updateStars] = useState([]);
  const [ship, updateShip] = useState({positionX: 0, positionY: 0});
  const [turn, updateTurn] = useState(0);
  const [pause, setPause] = useState(false);

  const increaseTurn = () => {
    if(turn < 30){
      updateTurn((turn) => turn + 1);
      } else {
      updateTurn((turn) => 30);
      }
  }

  const decreaseTurn = () => {
    if(turn > 0){
    updateTurn((turn) => turn - 1);
    } else {
        updateTurn((turn) => 0)
      }
  }
  
  const reset = () => updateTurn((turn) => 0);
  
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
        <Play increaseTurn={increaseTurn} decreaseTurn={decreaseTurn} reset={reset} />
          <div class="absolute left-28">
            <div class="absolute top-20 left-80 z-10">
              {turn < 30 ? 
                <Sprites stars={stars} ship={ship} turn={turn} /> 
                :
                <GameOver updateRegister={updateRegister} endGameData={endGameData}/>
              }
            </div>
          </div>
        <ScoreBar turn={turn}/>
      </div>
   )
}

export default GameBox 


