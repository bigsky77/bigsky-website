const Sprites = ({ship, stars, enemies}: props) => {
  const starRows = [];
    for (let i = 0; i < 16; i++){
        starRows.push(<p class="absolute font-neue text-3xl text-magentaVibrant"
              style = {{top: stars[i] * 28.47 + 'px', left: stars[i + 1] * 40 + 'px'}}
           >⭐️</p>)
      }
    
  const enemyRows = [];
    for (let i = 0; i < 2; i++){
        enemyRows.push(<p class="absolute font-neue text-3xl text-magentaVibrant"
              style = {{top: enemies[i] * 28.47 + 'px', left: enemies[i + 1] * 40 + 'px'}}
           >💀</p>)
      }
      
  const shipRows = [];
    for (let i = 0; i < 1; i++){
        shipRows.push(<p class="absolute font-neue text-3xl text-magentaVibrant"
              style = {{top: ship[i] * 28.47 + 'px', left: ship[i + 1] * 40 + 'px'}}
           >🚀</p>)
      }

  return(
    <div class="absolute inset-0 flex justify-center items-center z-10"
         style = {{top: '40px', left: '40px', height: '485px', width: '750px'}}>
        <p>{starRows}</p>
        <p>{enemyRows}</p>
        <p>{shipRows}</p>
    </div>
  )
}

export default Sprites 
