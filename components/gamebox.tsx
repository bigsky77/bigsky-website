import Grid from './grid'
import Sprites from '../../components/sprites'
import React, { useState, useEffect } from 'react';
import ScoreBar from '../../components/ScoreBar'
import Play from ".Play"

const GameBox = ({contractData, turnData, updateRegister}: props) => {
  const [stars, updateStars] = useState([]);
  const [ship, updateShip] = useState({positionX: 0, positionY: 0});
  const [turn, updateTurn] = useState(0);
  
  const incrimentTurn = () => {
    updateTurn(turn + 1)
    console.log('turn', turn)
    };

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
      <Play incrimentTurn={incrimentTurn}/>
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

const GameOver = ({contractData, updateRegister}: props) => {
  const [endGame, updateEndGame] = useState({score: '0', highscore: '', starsCaptured: '', gamesPlayed: ''});
  
    async function fetchEndGameData() {
      let eventfilter = contractData.filters.GameOver();
      let eventData = await contractData.queryFilter(eventfilter);

      let score = eventData[0].args.score.toNumber();
        console.log('final score', score);
      let highscore = eventData[0].args.highScore.toNumber();
      let starsCaptured = eventData[0].args.starsCaptured.toNumber();
      let gamesPlayed = eventData[0].args.gamesPlayed.toNumber();
      
      updateEndGame({score, highscore, starsCaptured, gamesPlayed});
    }

    fetchEndGameData();

  async function newGame(){
      updateRegister(false);
    }

  return(
    <div>
      <div class="absolute top-36 left-80 w-60 h-75 bg-dark-cyan border border-double border-magentaVibrant rounded-md border-4 z-10">
        <p class="flex justify-center pt-5 font-neue">Game Over!</p>
        <p class="flex justify-left pt-2 pl-2 font-neue">Player Score: {endGame.score} </p>
        <p class="flex justify-left pt-5 pl-2 font-neue">High Score: {endGame.highscore} </p>
        <p class="flex justify-left pt-5 pl-2 font-neue">Stars Captured: {endGame.starsCaptured} </p>
        <p class="flex justify-left pt-5 pl-2 font-neue">Games Played: {endGame.gamesPlayed} </p>
        <p class="flex justify-center pt-2 pb-4">
          <button onClick={newGame} class="flex justify-center mt-2 pl-2 pt-1 pr-2 bg-magentaVibrant font-neue rounded-lg">
            Play Again 🚀
          </button>
        </p>
      </div>
    </div>
  )
}
