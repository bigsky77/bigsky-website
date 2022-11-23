import React, { useState } from 'react';
import { useWeb3React } from '@web3-react/core'
import type { Web3ReactHooks } from '@web3-react/core'
import { hooks, metaMask } from '../connectors/metaMask'
import { Contract } from "@ethersproject/contracts";
import { Web3Provider } from '@ethersproject/providers'
import { address } from '../../address.ts'

const { abi } = require('abi/bigsky.json');
const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider, useENSNames} = hooks

const Play = () => {
  const provider = useProvider();
  const { library } = useWeb3React<Web3Provider>();

  async function StartGame() {
    const bigsky = new Contract(address, abi, provider.getSigner());
    bigsky.startGame();
  } 

  return(
    <div class="flex space-x-4">
      <button onClick={StartGame} class="text-gray-900 bg-white hover:border-burned-gold focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg font-neue font-2xl px-2.5 py-1.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"> 
        Play
      </button>
      <button onClick={StartGame} class="text-gray-900 bg-white hover:border-burned-gold focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg font-neue font-2xl px-2.5 py-1.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"> 
        Pause
      </button>
      <button onClick={StartGame} class="text-gray-900 bg-white hover:border-burned-gold focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg font-neue font-2xl px-2.5 py-1.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"> 
        Reset
      </button>
    </div>
  )
}

export default Play
