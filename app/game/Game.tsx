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
  const [stars, updateStars] = useState(0);
  const [ship, updateShip] = useState(0);
  const [enemies, updateEnemies] = useState(0);
  const [turn, updateTurn] = useState(8);
  
  useEffect(() => {
        const intervalId = setInterval(() => {

        }, 1000)
        return () => clearInterval(intervalId);
    }, [])

  async function getContractData() {
     const provider = new ethers.providers.Web3Provider(window.ethereum);
     const { active, library, account } = useWeb3React<Web3Provider>();   
     const bigsky = new Contract(address, abi, provider);

    async function fetchStars() {
             let eventfilter = bigsky.filters.StarLocations()
             let event = await bigsky.queryFilter(eventfilter)

             const arr = [] 
             for (let i = 0; i < 16; i++){
                let x = event[0].args._stars[i].positionX.toNumber();
                let y = event[0].args._stars[i].positionY.toNumber();
                arr.push(x, y)
             }
             updateStars(arr);
      }

    async function fetchTurnUpdate() {
          let eventfilter = bigsky.filters.TurnComplete();
          let turnData = await bigsky.queryFilter(eventfilter);
          
          const shipArr = [];
          const enemyArr = [];
          
          let shipX = turnData[turn].args.ship.positionX.toNumber();
          let shipY = turnData[turn].args.ship.positionY.toNumber();
              shipArr.push(shipX, shipY)
                
          for(let x = 0; x < 2; x++){
            let enemyX = turnData[turn].args.enemies[x].positionX.toNumber();
            let enemyY = turnData[turn].args.enemies[x].positionY.toNumber();
              enemyArr.push(enemyX, enemyY)
          }

          updateShip(shipArr);
          updateEnemies(enemyArr);
    }

    fetchStars();
    fetchTurnUpdate();
  }
  getContractData();
  
    
  return(
    <div>
      <GameBar updateTurn={updateTurn} turn={turn} />
      <GameBox stars={stars} ship={ship} enemies={enemies} />  
      <ScoreBar turn={turn} score={100} />
    </div>
  )
}
