import React, { useState, useEffect } from 'react';

const Play = (props) => {
  const [play, updatePlay] = useState(true);
  var turnCounter = 1;

  useEffect(() => {
    if(play == true){
        const intervalId = setInterval(() => {
          if(turnCounter >= 29){
              turnCounter = 1;
              props.updateTurn(1);
            } else {
              turnCounter++;
              props.updateTurn(turnCounter);
              }
      }, 500)
        return () => clearInterval(intervalId);
      } else {
          null
        }
    }, [])

  async function startPlay() {
      updatePlay(true);
      props.updateTurn(props.turn)
      console.log('play state', play)
  }

  async function pause() {
      updatePlay(false);
      props.updateTurn(props.turn)
      console.log('play state', play)
    }

  async function reset() {
      props.updateTurn(1);
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
