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
  const [positionX, updatePositionX] = useState(0);
  const [positionY, updatePositionY] = useState(0);
 
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
        updatePositionX(currentPosition[0].toNumber());
        updatePositionY(currentPosition[1].toNumber());
     }
       fetchPosition();
       addSmartContractListener();
     }, []);

     function addSmartContractListener(){
      bigsky.on("PlayerMover", (_positionX, _positionY) => {
          console.log('Player moves to position', _positionX.toNumber())
          console.log('Player moves to position', _positionY.toNumber())

          updatePositionX(_positionX.toNumber());
          updatePositionY(_positionY.toNumber());
      });
     }
  }
  updateState();

  return(
    <div class="absolute border border-solid border-indian-red border-2 inset-0 flex justify-center items-center z-10"
         style = {{top: '40px', left: '40px', height: '485px', width: '750px'}}       
      >
      <p class="absolute font-neue text-4xl text-magentaVibrant"
         style = {{top: positionY * 100 + 'px', left: positionX * 100 + 'px'}}
      >
        {positionX} {positionY}
      </p>
    </div>
  )

}
