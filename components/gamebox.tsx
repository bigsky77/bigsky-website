import Grid from './grid'
import Player from './sprites/player'
import Enemies from './sprites/enemies'
import Sprites from './sprites'
import React, { useState } from 'react';

const GameBox = ({contractData, score, stars, enemies, ship, turn, updateRegister}: props) => {
  return(
    <div>
      <div class="absolute left-28">
        <div class="absolute top-20 left-80 z-10">
          {turn < 30 ? 
            <Sprites stars={stars} enemies={enemies} ship={ship} /> 
          :
            <GameOver updateRegister={updateRegister} contractData={contractData}/>
          }
        </div>
      </div>
    </div>
  )
}

export default GameBox 

const GameOver = ({contractData, updateRegister}: props) => {
  const [endGame, updateEndGame] = useState({score: '0', highscore: '', starsCaptured: '', gamesPlayed: ''});

  async function fetchEndGameData() {
    let eventfilter = contractData.filters.GameOver();
    let eventData = await contractData.queryFilter(eventfilter);
    console.log('event data', eventData);

    let finalScore = eventData.args.playerScore.toNumber();
    let highscore = eventData.args.highScore.toNumber();
    let starsCaptured = eventData.args.starsCaptured.toNumber();
    let gamesPlayed = eventData.args.gamesPlayed.toNumber();
    
    updateEndGame(finalScore, highscore, starsCaptured, gamesPlayed);
    }
  fetchEndGameData();

  async function newGame(){
      updateRegister(false);
    }

  return(
    <div>
      <div class="absolute top-36 left-80 w-60 h-60 bg-dark-cyan border border-magentaVibrant rounded-md border-2 z-10">
        <p class="flex justify-center pt-5 font-neue">Game Over!</p>
        <p class="flex justify-left pt-2 pl-2 font-neue">Player Score: {endGame.score} </p>
        <p class="flex justify-left pt-5 pl-2 font-neue">High Score: {endGame.highscore} </p>
        <p class="flex justify-left pt-5 pl-2 font-neue">Stars Captured: {endGame.starsCaptured} </p>
        <p class="flex justify-left pt-5 pl-2 font-neue">Games Played: {endGame.gamesPlayed} </p>
        <p class="flex justify-center pt-2">
          <button onClick={newGame} class="flex justify-center mt-2 pl-2 pt-1 pr-2 bg-magentaVibrant font-neue rounded-lg">
            Play Again 🚀
          </button>
        </p>
      </div>
    </div>
  )
}
