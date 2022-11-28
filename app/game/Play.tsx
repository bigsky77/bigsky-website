import React, { useState, useEffect } from 'react';

const Play = (props) => {
  const [play, updatePlay] = useState(true);
  var turnCounter = 1;
  
  useEffect(() => {
    if(play == true){
        const intervalId = setInterval(() => {
          if(turnCounter < 30){
              turnCounter += 1;
              props.updateTurn(turnCounter);
            } else {
              turnCounter = 30;
              props.updateTurn(30);
              updatePlay(false);
              } 
      }, 100)
        return () => clearInterval(intervalId);
      }
    }, [])

  async function startPlay() {
      turnCounter = 1;
      updatePlay(true);
      props.updateTurn(turnCounter)
      console.log('play state', play)
  }

  async function pause() {
      updatePlay(false);
      props.updateTurn(props.turn)
      console.log('play state', play)
    }

  async function reset() {
      turnCounter = 1;
      props.updateTurn(turnCounter);
      console.log('turn', props.turn)
    }

  return(
    <div class="flex">
      <div class="space-x-4">
      <button onClick={startPlay} class="text-gray-900 bg-white hover:border-burned-gold focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg font-neue font-2xl px-2.5 py-1.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"> 
        Play
      </button>
     <button onClick={pause} class="text-gray-900 bg-white hover:border-burned-gold focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg font-neue font-2xl px-2.5 py-1.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"> 
        Pause
      </button>
      <button onClick={reset} class="text-gray-900 bg-white hover:border-burned-gold focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg font-neue font-2xl px-2.5 py-1.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"> 
        Reset
      </button>
    </div>
  </div>
  )
}

export default Play
