import React, { useState } from 'react';
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

const { abi } = require('abi/bigsky.json');

const Play = () => {
  const contractAddress = 'PLACEHOLDER';
  const { account, active, library} = useWeb3React<Web3Provider>()
  
  async function StartGame() {
      if(!(active && account && library)) return
    
      const bigsky = new Contract(abi, contractAddress) 
      bigsky.startGame().catch('error', console.error);
    } 

  return(
    <div>
      <button onClick={StartGame} class="text-gray-900 bg-white hover:border-burned-gold border animate-pulse-slow border-magentaVibrant focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"> 
        Play
      </button>
    </div>
  )
}

export default Play
