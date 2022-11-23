
const Player = (props: ship) => {
  return(
    <div>
        <p class="absolute font-neue text-3xl text-magentaVibrant"
            style = {{top: props.ship[0] * 40 + 100 + 'px', left: props.ship[1] * 40 + 'px'}}
         >
          🚀 
         </p>
    </div>
  )
}

export default Player
