import Play from "../app/game/Play"

const GameBar = (props) => {

  return(
    <div class="flex justify-center pt-6">
     <div class="absolute top-28 border border-solid border-2 border-magentaVibrant rounded-lg px-24 py-2.5">
      <Play updateTurn={props.updateTurn} turn={props.turn}/> 
     </div>
    </div>
  )
}

export default GameBar
