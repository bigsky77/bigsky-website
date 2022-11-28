const Sprites = ({ship, stars }: props) => {

  const starRows = [];
    for (let i = 0; i < 32; i += 2){
        starRows.push(<p class="absolute font-neue text-3xl text-magentaVibrant"
              style = {{top: stars[i + 1] * 44.5 + 'px', left: stars[i] * 44.5 + 'px'}}
           >⭐️ <p class="text-sm text-indian-red">({stars[i]},{stars[i + 1]})</p></p>)
      }
      
  const shipRows = [];
    for (let i = 0; i < 1; i++){
        shipRows.push(<p class="absolute font-neue text-3xl text-magentaVibrant"
              style = {{top: ship[i + 1] * 44.5 + 'px', left: ship[i] * 44.5 + 'px'}}
           >🚀<p class="text-sm">({ship[i]},{ship[i + 1]})</p></p>)
      }

  return(
    <div class="absolute z-10"
         style = {{top: '60px', left: '67px', height: '430px', width: '695px'}}>
        <p>{starRows}</p>
        <p>{shipRows}</p>
    </div>
  )
}

export default Sprites 
