import Grid from './grid'
import Sprites from '../../components/sprites'
import React, { useState, useEffect } from 'react';
import ScoreBar from '../../components/ScoreBar'
import Play from "./Play"
import GameOver from './GameOver'

const GameBox = ({contractData, turnData, turn, updateRegister}: props) => {
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
      <Play/>
        <div class="absolute left-28">
          <div class="absolute top-20 left-80 z-10">
            {turn < 30 ? 
              <Sprites stars={stars} ship={ship} turn={turn} /> 
            :
              <GameOver updateRegister={updateRegister} contractData={contractData}/>
            }
          </div>
        </div>
      <ScoreBar turn={turn}/>
    </div>
  )
}

export default GameBox 


