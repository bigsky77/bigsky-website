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
  const [stars, updateStars] = useState();
  const [enemies, updateEnemies] = useState();
  const [turn, updateTurn] = useState();
  
  async function updateState() {
     const provider = new ethers.providers.Web3Provider(window.ethereum);
     const { active, library, account } = useWeb3React<Web3Provider>();
     
     const bigsky = new Contract(address, abi, provider);

     useEffect(() => {
       async function fetchPosition() {
           let eventfilter = bigsky.filters.StarLocations()
           let event = await bigsky.queryFilter(eventfilter)
           console.log('star array positionX', event[0].args._stars[0].positionX.toNumber());
           console.log('star array positionY', event[0].args._stars[0].positionY.toNumber());
           updateStars(event)
        }
       fetchPosition();
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
    </div>
  )
}
