import React, { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core'
import type { Web3ReactHooks } from '@web3-react/core'
import { Contract } from "@ethersproject/contracts";
import { Web3Provider } from '@ethersproject/providers'
import {ethers} from 'ethers'
import { hooks, metaMask } from '../connectors/metaMask'
import { address } from '../../address.ts'

import GameBox from '../../components/gamebox'
import GameBar from '../../components/gamebar'
import ScoreBar from '../../components/scorebar'

const { abi } = require('abi/bigsky.json');
const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider, useENSNames} = hooks

export default function Game() {  
    const [ship, updateShip] = useState([]);
    const [stars, updateStars] = useState([]);
    const [enemies, updateEnemies] = useState([]);
    const [turn, updateTurn] = useState([]);
    const [turnData, updateTurnData] = useState();
  
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
       
      async function fetchTurnData() {
          let eventfilter = bigsky.filters.TurnComplete();
          let turn = await bigsky.queryFilter(eventfilter);

          const turnArr = [];
          const shipArr = [];
          const enemyArr = [];

          for (let j = 0; j < 10; j++){
                let shipX = turn[j].args.ship.positionX.toNumber();
                let shipY = turn[j].args.ship.positionY.toNumber();
                  shipArr.push(shipX, shipY)
                
                let turns =  turn[j].args._turn.toNumber();
                  turnArr.push(turns)

              for(let x = 0; x < 3; x++){
                let enemyX = turn[j].args._enemies[x].positionX.toNumber();
                let enemyY = turn[j].args._enemies[x].positionY.toNumber();
                  enemyArr.push(enemyX, enemyY)
                }
            }

            updateTurnData(turn[0])
            updateShip(shipArr)
            updateTurn(turnArr)
            updateEnemies(enemyArr)
        }

       fetchTurnData();
       fetchStars();
     }, []);
  }
  updateState();

  return(
    <div>
      <GameBar />
      <GameBox stars={stars} ship={ship} enemies={enemies} />  
      <ScoreBar turn={turn[0]} />
    </div>
  )
}
