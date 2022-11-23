import Grid from './grid'
import Player from './sprites/player'
import Enemies from './sprites/enemies'
import Stars from './sprites/stars'

const GameBox = ({stars, enemies, ship}: props) => {
  return(
    <div>
      <div class="absolute left-24">
        <div class="absolute top-32 left-96 z-10">
          <Player ship={ship} />
          <Enemies enemies={enemies} />
          <Stars stars={stars} /> 
        </div>
      </div>
      <Grid /> 
    </div>
  )
}

export default GameBox 
