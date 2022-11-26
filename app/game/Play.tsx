import React, { useState, useEffect } from 'react';

const Play = (props) => {
 
  async function nextTurn() {
    const x = props.turn;
      if(x < 9){
          props.updateTurn(x + 1);
        } else {
          props.updateTurn(0);
      }
  }

  async function reset() {
      props.updateTurn(0);
    }

  return(
    <div class="flex space-x-4">
      <div>
      <button onClick={nextTurn} class="text-gray-900 bg-white hover:border-burned-gold focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg font-neue font-2xl px-2.5 py-1.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"> 
        Play
      </button>
     <button onClick={nextTurn} class="text-gray-900 bg-white hover:border-burned-gold focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg font-neue font-2xl px-2.5 py-1.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"> 
        Next
      </button>
      <button onClick={reset} class="text-gray-900 bg-white hover:border-burned-gold focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg font-neue font-2xl px-2.5 py-1.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"> 
        Reset
      </button>
    </div>
  </div>
  )
}

export default Play
