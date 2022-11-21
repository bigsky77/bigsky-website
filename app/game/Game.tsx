import React, { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core'
import type { Web3ReactHooks } from '@web3-react/core'
import { Contract } from "@ethersproject/contracts";
import { Web3Provider } from '@ethersproject/providers'
import {ethers} from 'ethers'
import { hooks, metaMask } from '../connectors/metaMask'
import { address } from '../../address.ts'
import swr from 'srw'

const { abi } = require('abi/bigsky.json');
const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider, useENSNames} = hooks

export default function Game() {  
  const [positionX, updatePostionX] = useState(0);
  const [positionY, updatePostionY] = useState(0);
 
  async function updateState() {
     const provider = new ethers.providers.Web3Provider(window.ethereum);
     const { active, library, account } = useWeb3React<Web3Provider>();
     
     const bigsky = new Contract(address, abi, provider);
     
     const loadCurrentPosition = async () => { 
        const position = await bigsky.getPosition();   
        return position;
     };

     useEffect(() => {
       async function fetchPosition() {
        const currentPosition = await loadCurrentPosition();
        updatePostionX(currentPosition[0]._hex);
        updatePostionY(currentPosition[1]._hex);

        console.log(currentPosition[0]._hex);
        console.log(currentPosition[1]._hex);
     }
       fetchPosition();
       addSmartContractListener();
     }, []);

     function addSmartContractListener(){
      bigsky.on("PlayerMover", (error, data) => {
        if (error) {
          console.log('error')
        } else {
          console.log(data.returnValues[1]);
          console.log('hello')
        }
      });
     }
  }
  updateState();

  return(
    <div>
      <p class="font-neue text-4xl text-magentaVibrant">{positionX} {positionY}</p>
    </div>
  )

}
