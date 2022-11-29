import { Flipper, Flipped } from 'react-flip-toolkit'
import React, { useState } from 'react'

const Sprites = ({ship, stars, turn }: props) => {

  const starRows = [];
    for (let i = 0; i < stars.length; i++){
        if(stars){
          starRows.push(<p class="absolute font-neue text-3xl text-magentaVibrant"
              style = {{top: stars[i].positionY * 44.5 + 'px', 
                        left: stars[i].positionX * 44.5 + 'px'}}
           >⭐️ <p class="text-sm text-indian-red">({stars[i].positionX},{stars[i].positionY})</p></p>)} else {
               return null
             }
      }
      
  const shipRows = [];
    for (let i = 0; i < 1; i++){
        shipRows.push(
          <Flipped flipId="ship">
            <p class="absolute font-neue text-3xl text-magentaVibrant"
             style = {{top: ship.positionY * 44.5 + 'px', left: ship.positionX * 44.5 + 'px'}}>
               🚀
            <p class="text-sm">({ship.positionX},{ship.positionY})</p></p>
          </Flipped>
        )
      }

  return(
    <div class="absolute z-10"
         style = {{top: '60px', left: '67px', height: '430px', width: '695px'}}>
          <p>{starRows}</p>
      <Flipper flipKey={turn}>
          <p>{shipRows}</p>
      </Flipper>
    </div>
  )
}

export default Sprites 
