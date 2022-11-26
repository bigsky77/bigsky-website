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

export default function Game({contract} :props) {  
  const [stars, updateStars] = useState(0);
  const [ship, updateShip] = useState(0);
  const [enemies, updateEnemies] = useState(0);
  const [turn, updateTurn] = useState(0);
  const [score, updateScore] = useState(0);
  
  const [turnData, updateTurnData] = useState([0]);

  async function getContractData() {
     const provider = new ethers.providers.Web3Provider(window.ethereum);
     const { active, library, account } = useWeb3React<Web3Provider>();   
     const bigsky = new Contract(address, abi, provider);

    async function fetchTurnUpdate() {
         let eventfilter = bigsky.filters.TurnComplete();
         let eventData = await bigsky.queryFilter(eventfilter);
           updateTurnData(eventData);

          const starsArr = [];
          const shipArr = [];
          const enemyArr = [];
          
          let newScore = turnData[turn].args.playerScore.toNumber();
            updateScore(newScore);

          let shipX = turnData[turn].args.ship.positionX.toNumber();
          let shipY = turnData[turn].args.ship.positionY.toNumber();
             shipArr.push(shipX, shipY)
          
          for (let i = 0; i < 16; i++){
            if(turnData[turn].args.allStars[i].isActive == true){
              let x = turnData[turn].args.allStars[i].positionX.toNumber();
              let y = turnData[turn].args.allStars[i].positionY.toNumber();
                starsArr.push(x, y)
              }
            }
  
          for(let x = 0; x < 2; x++){
            let enemyX = turnData[turn].args.enemies[x].positionX.toNumber();
            let enemyY = turnData[turn].args.enemies[x].positionY.toNumber();
              enemyArr.push(enemyX, enemyY)
          }
          
          updateStars(starsArr);
          updateShip(shipArr);
          updateEnemies(enemyArr);
    }

    fetchTurnUpdate();
  }
  getContractData();

  return(
    <div>
      <GameBar updateTurn={updateTurn} turn={turn} />
      <GameBox stars={stars} ship={ship} enemies={enemies} />  
      <ScoreBar turn={turn} score={score} />
    </div>
  )
}
