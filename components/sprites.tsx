const Sprites = ({ship, stars, enemies}: props) => {

  const starRows = [];
    for (let i = 0; i < stars.length; i++){
        starRows.push(<p class="absolute font-neue text-3xl text-magentaVibrant"
              style = {{top: stars[i] * 32.466 + 'px', left: stars[i + 1] * 44.94 + 'px'}}
           >⭐️ <p class="text-sm text-indian-red">({stars[i + 1]},{stars[i]})</p></p>)
      }
    
  const enemyRows = [];
    for (let i = 0; i < 3; i++){
        enemyRows.push(<p class="absolute font-neue text-3xl text-magentaVibrant"
              style = {{top: enemies[i] * 32.466 + 'px', left: enemies[i + 1] * 44.94 + 'px'}}
           >💀</p>)
      }
      
  const shipRows = [];
    for (let i = 0; i < 1; i++){
        shipRows.push(<p class="absolute font-neue text-3xl text-magentaVibrant"
              style = {{top: ship[i] * 32.466 + 'px', left: ship[i + 1] * 44.94 + 'px'}}
           >🚀<p class="text-sm">({ship[i + 1]},{ship[i]})</p></p>)
      }

  return(
    <div class="absolute border-solid border-4 border-indian-red overflow-hidden inset-0 flex justify-center items-center z-10"
         style = {{top: '20px', left: '40px', height: '480px', width: '750px'}}>
        <p>{starRows}</p>
        <p>{enemyRows}</p>
        <p>{shipRows}</p>
    </div>
  )
}

export default Sprites 
