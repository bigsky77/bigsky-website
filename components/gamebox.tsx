import Grid from './grid'
import Player from './sprites/player'
import Enemies from './sprites/enemies'
import Sprites from './sprites'

const GameBox = ({score, stars, enemies, ship, turn, updateRegister}: props) => {
  return(
    <div>
      <div class="absolute left-28">
        <div class="absolute top-20 left-80 z-10">
          {turn < 30 ? 
            <Sprites stars={stars} enemies={enemies} ship={ship} /> 
          :
            <GameOver score={score} updateRegister={updateRegister}/>
          }
        </div>
      </div>
    </div>
  )
}

export default GameBox 

const GameOver = ({score, updateRegister}: props) => {
  
  async function newGame(){
      updateRegister(false);
    }

  return(
    <div>
      <div class="absolute top-36 left-80 w-60 h-60 bg-dark-cyan border border-indian-red border-4 z-10">
        <p class="flex justify-center pt-5 font-neue">Game Over!</p>
        <p class="flex justify-left pt-5 pl-2 font-neue">Player Score: {score} </p>
        <p class="flex justify-left pt-5 pl-2 font-neue">High Score: </p>
        <p class="flex justify-left pt-5 pl-2 font-neue">Stars Captured: </p>
        <p class="flex justify-center">
          <button onClick={newGame} class="flex justify-center mt-2 pl-2 pr-2 bg-grey-700 font-neue rounded-lg">
            Play Again
          </button>
        </p>
      </div>
    </div>
  )
}
