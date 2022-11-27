import React, { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core'
import { Contract } from "@ethersproject/contracts";
import { Web3Provider } from '@ethersproject/providers'
import {ethers} from 'ethers'
import { hooks, metaMask } from '../connectors/metaMask'
import { address } from '../../address.ts'

import GameBox from '../../components/gamebox'
import GameBar from '../../components/gamebar'
import ScoreBar from '../../components/scorebar'

const { abi } = require('../../../bigsky-contracts/out/BigSky.sol/BigSky.json');
const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider, useENSNames} = hooks

export default function Game({contractData} :props) {  
  const [stars, updateStars] = useState(0);
  const [ship, updateShip] = useState(0);
  const [turn, updateTurn] = useState(1);
  const [score, updateScore] = useState(0);
  const [eventData, updateEventData] = useState(null);
  const [balance, updateBalance] = useState(100);

  async function fetchTurnUpdate() {
     let eventfilter = contractData.filters.TurnComplete();
     let eventData = await contractData.queryFilter(eventfilter);
     updateEventData(eventData);

     const starsArr = [];
     const shipArr = [];
     
     let newScore = eventData[turn].args.playerScore.toNumber();
      console.log('score', newScore);
      updateScore(newScore);

     let newBalance = eventData[turn].args.ships.balance.toNumber();
      console.log('balance', newBalance);
      updateBalance(newBalance);

     let shipX = eventData[turn].args.ships.positionX.toNumber();
     let shipY = eventData[turn].args.ships.positionY.toNumber();
       shipArr.push(shipX, shipY)
     
     for (let i = 0; i < 16; i++){
        let x = eventData[turn].args.allStars[i].positionX.toNumber();
        let y = eventData[turn].args.allStars[i].positionY.toNumber();
          if(eventData[turn].args.allStars[i].isActive == true){
            starsArr.push(x, y)
          } 
      }
      
     updateStars(starsArr);
     updateShip(shipArr);
  }

  fetchTurnUpdate();

  if (eventData){
      return(
        <div>
          <GameBar updateTurn={updateTurn} turn={turn} />
          <GameBox stars={stars} ship={ship} />  
          <ScoreBar turn={turn} score={score} balance={balance} />
        </div>
      )
    } else {
      return(null)
    }
}
