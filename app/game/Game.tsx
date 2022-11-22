import React, { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core'
import type { Web3ReactHooks } from '@web3-react/core'
import { Contract } from "@ethersproject/contracts";
import { Web3Provider } from '@ethersproject/providers'
import {ethers} from 'ethers'
import { hooks, metaMask } from '../connectors/metaMask'
import { address } from '../../address.ts'
import Player from './Player'
import Enemy from './Enemy'
import Star from './Star'

const { abi } = require('abi/bigsky.json');
const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider, useENSNames} = hooks

export default function Game() {  
     const [ship, updateShip] = useState();
     const [stars, updateStars] = useState([]);
     const [enemies, updateEnemies] = useState();
     const [turn, updateTurn] = useState();
  
    async function updateState() {
     const provider = new ethers.providers.Web3Provider(window.ethereum);
     const { active, library, account } = useWeb3React<Web3Provider>();
     
     const bigsky = new Contract(address, abi, provider);

     useEffect(() => {
       async function fetchStars() {
           let eventfilter = bigsky.filters.StarLocations()
           let event = await bigsky.queryFilter(eventfilter)
           console.log('star array positionX', event[0].args._stars[0].positionX.toNumber());
           console.log('star array positionY', event[0].args._stars[0].positionY.toNumber());
           
           const arr = [] 
           
           for (let i = 0; i < 16; i++){
                  let x = event[0].args._stars[i].positionX.toNumber();
                  let y = event[0].args._stars[i].positionY.toNumber();
                  arr.push(x, y)
             }
           updateStars(arr);
        }
       fetchStars();
       addSmartContractListener();
     }, []);

     function addSmartContractListener(){
      bigsky.on("TurnComplete", (turn, ship, enemy) => {
          console.log('turn', turn.toNumber());
          console.log('ship position', ship);
          console.log('enemy position', enemy);
  
          updateTurn(turn.toNumber());
          updateShip(ship);
          updateEnemies(enemy);
      });
     }

  }
  updateState();

  return(
    <div class="absolute inset-0 flex justify-center items-center z-10"
         style = {{top: '40px', left: '40px', height: '485px', width: '750px'}}>
         <p class="absolute font-neue text-4xl text-white"
            style = {{top: stars[0] * 40 + 'px', left: stars[1] * 40 + 'px'}}
         >
          * 
         </p>

         <p class="absolute font-neue text-4xl text-magentaVibrant"
            style = {{top: stars[0] * 40 + 'px', left: stars[1] * 40 + 'px'}}
         >
          * 
         </p>
        
        <p class="absolute font-neue text-4xl text-magentaVibrant"
            style = {{top: stars[2] * 40 + 'px', left: stars[3] * 40 + 'px'}}
         >
          * 
         </p>
        
        <p class="absolute font-neue text-4xl text-magentaVibrant"
            style = {{top: stars[4] * 40 + 'px', left: stars[5] * 40 + 'px'}}
         >
          * 
         </p>
         <p class="absolute font-neue text-4xl text-magentaVibrant"
            style = {{top: stars[6] * 40 + 'px', left: stars[7] * 40 + 'px'}}
         >
          * 
         </p>
        
        <p class="absolute font-neue text-4xl text-magentaVibrant"
            style = {{top: stars[8] * 40 + 'px', left: stars[9] * 40 + 'px'}}
         >
          * 
         </p>
        
        <p class="absolute font-neue text-4xl text-magentaVibrant"
            style = {{top: stars[10] * 40 + 'px', left: stars[11] * 40 + 'px'}}
         >
          * 
         </p>
         
         <p class="absolute font-neue text-4xl text-magentaVibrant"
            style = {{top: stars[12] * 40 + 'px', left: stars[13] * 40 + 'px'}}
         >
          * 
         </p>
        
        <p class="absolute font-neue text-4xl text-magentaVibrant"
            style = {{top: stars[14] * 40 + 'px', left: stars[15] * 40 + 'px'}}
         >
          * 
         </p>
        
        <p class="absolute font-neue text-4xl text-magentaVibrant"
            style = {{top: stars[16] * 40 + 'px', left: stars[17] * 40 + 'px'}}
         >
          * 
         </p>
         <p class="absolute font-neue text-4xl text-magentaVibrant"
            style = {{top: stars[18] * 40 + 'px', left: stars[19] * 40 + 'px'}}
         >
          * 
         </p>
        
        <p class="absolute font-neue text-4xl text-magentaVibrant"
            style = {{top: stars[20] * 40 + 'px', left: stars[21] * 40 + 'px'}}
         >
          * 
         </p>
        
        <p class="absolute font-neue text-4xl text-magentaVibrant"
            style = {{top: stars[22] * 40 + 'px', left: stars[23] * 40 + 'px'}}
         >
          * 
         </p>
         <p class="absolute font-neue text-4xl text-magentaVibrant"
            style = {{top: stars[24] * 40 + 'px', left: stars[25] * 40 + 'px'}}
         >
          * 
         </p>
        
        <p class="absolute font-neue text-4xl text-magentaVibrant"
            style = {{top: stars[26] * 40 + 'px', left: stars[27] * 40 + 'px'}}
         >
          * 
         </p>
          <p class="absolute font-neue text-4xl text-magentaVibrant"
            style = {{top: stars[28] * 40 + 'px', left: stars[29] * 40 + 'px'}}
         >
          * 
         </p>
        
        <p class="absolute font-neue text-4xl text-magentaVibrant"
            style = {{top: stars[30] * 40 + 'px', left: stars[31] * 40 + 'px'}}
         >
          * 
         </p>
    </div>
  )
}
