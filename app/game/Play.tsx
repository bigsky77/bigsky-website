import React, { useState, useEffect } from 'react';

const Play = ({turn, updateTurn}: props) => {
    async function startPlay() {
  
  }

  async function pause() {
   }

  async function reset() {
   }

  return( 
    <div class="flex justify-center pt-6">
     <div class="absolute top-28 border border-solid border-2 border-magentaVibrant rounded-lg px-24 py-2.5">
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
    </div>
  </div>
  )
}

export default Play
