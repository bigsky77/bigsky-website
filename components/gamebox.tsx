import Grid from './grid'
import Player from './sprites/player'
import Enemies from './sprites/enemies'
import Sprites from './sprites'

const GameBox = ({stars, enemies, ship}: props) => {
  return(
    <div>
      <div class="absolute left-24">
        <div class="absolute top-20 left-80 z-10">
          <Sprites stars={stars} enemies={enemies} ship={ship} /> 
        </div>
      </div>
    </div>
  )
}

export default GameBox 
