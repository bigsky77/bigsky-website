import Grid from '../../components/grid'
import React, { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core'
import type { Web3ReactHooks } from '@web3-react/core'
import { Contract } from "@ethersproject/contracts";
import { Web3Provider } from '@ethersproject/providers'
import {ethers} from 'ethers'
import { hooks, metaMask } from '../connectors/metaMask'
import { address } from '../../address.ts'

const { abi } = require('abi/bigsky.json');
const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider, useENSNames} = hooks

const RegisterShip = ({updateRegister}: props) => {
 const provider = useProvider();
 const { library } = useWeb3React<Web3Provider>();

  const handleSubmit = async (event) => {
     event.preventDefault();

     const bigsky = new Contract(address, abi, provider.getSigner());
     const shipAddress = event.target.address.value;
     let res = await bigsky.registerPlayer(shipAddress);
     
     console.log('ship address', res);
     updateRegister(true);
 }

  return(
    <div class="absolute top-96 w-1/4 z-10">
      <form onSubmit={handleSubmit}>   
        <div class="flex justify-center z-10">
          <input type="text" id="address" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-magentaVibrant rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-magentaVibrant dark:bg-gray-700 dark:border-magentaVibrant dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0x123...🏆" required/>
          <button type="RegisterShip" class="text-white absolute right-2.5 bottom-2.5 bg-magentaVibrant hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-magentaVibrant dark:hover:bg-blue-700 dark:focus:ring-blue-800">Launch Ship</button>
        </div>
      </form>
   </div>
  )
}

export default RegisterShip
