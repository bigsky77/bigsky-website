import Grid from './grid'
import Player from './sprites/player'
import Enemies from './sprites/enemies'
import Stars from './sprites/stars'

const GameBox = ({stars, enemies, ship}: props) => {
  return(
    <div>
      <Player ship={ship} />
      <Enemies enemies={enemies} />
      <Stars stars={stars} /> 
      <Grid /> 
    </div>
  )
}

export default GameBox 
