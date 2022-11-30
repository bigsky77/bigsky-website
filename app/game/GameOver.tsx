import React, { useState, useEffect } from 'react';

const GameOver = ({endGameData, newGame}: props) => {
    const [endGame, updateEndGame] = useState({score: '0', highscore: '', starsCaptured: '', gamesPlayed: ''});
  
    useEffect(() => {
      async function fetchEndGameData() {
        let score = endGameData[0].args.score.toNumber();
        let highscore = endGameData[0].args.highScore.toNumber();
        let starsCaptured = endGameData[0].args.starsCaptured.toNumber();
        let gamesPlayed = endGameData[0].args.gamesPlayed.toNumber();   

        updateEndGame({score, highscore, starsCaptured, gamesPlayed});
      }
      fetchEndGameData();
    },[]);

   return(
    <div>
      <div class="absolute top-36 left-80 w-60 h-75 bg-dark-cyan border border-double border-magentaVibrant rounded-md border-4 z-10">
         <p class="flex justify-center pt-5 font-neue">Game Over!</p>
           <p class="flex justify-left pt-2 pl-2 font-neue">Player Score: {endGame.score} </p>
           <p class="flex justify-left pt-5 pl-2 font-neue">High Score: {endGame.highscore} </p>
           <p class="flex justify-left pt-5 pl-2 font-neue">Stars Captured: {endGame.starsCaptured} </p>
           <p class="flex justify-left pt-5 pl-2 font-neue">Games Played: {endGame.gamesPlayed} </p>
           <p class="flex justify-center pt-2 pb-4">
           <button onClick={newGame} 
                   class="flex justify-center mt-2 pl-2 pt-1 pr-2 bg-magentaVibrant font-neue rounded-lg">
             Play Again 🚀
           </button>
           </p>
        </div>
      </div>
    )
}

export default GameOver
