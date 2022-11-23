
const Enemies = (props: enemies) => {
  return(
    <div>
        <p class="absolute font-neue text-3xl text-white"
            style = {{top: props.enemies[0] * 40 + 'px', left: props.enemies[1] * 40 + 'px'}}
         >
          💀  
         </p>
        
        <p class="absolute font-neue text-3xl text-white"
            style = {{top: props.enemies[2] * 40 + 'px', left: props.enemies[3] * 40 + 'px'}}
         >
          💀  
         </p>
         
         <p class="absolute font-neue text-3xl text-white"
            style = {{top: props.enemies[4] * 40 + 'px', left: props.enemies[5] * 40 + 'px'}}
         >
          💀  
         </p>
    </div>
  )
}

export default Enemies
