import React, { useState, useEffect, useRef } from 'react';
import { useWeb3React } from '@web3-react/core'
import { Contract } from "@ethersproject/contracts";
import { Web3Provider } from '@ethersproject/providers'
import {ethers} from 'ethers'
import { hooks, metaMask } from '../connectors/metaMask'
import { address } from '../../address.ts'

import GameBox from './GameBox'
import GameOver from './GameOver'
import Play from './Play'
import ScoreBar from '../../components/scorebar'

const { abi } = require('../../../bigsky-contracts/out/BigSky.sol/BigSky.json');
const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider, useENSNames} = hooks

export default function Game({contractData, newGame} :props) {  
  const [turnData, updateTurnData] = useState(null);
  const [turn, updateTurn] = useState(0);
  const [endGameData, updateEndGameData] = useState(null);

  async function fetchTurnComplete() {
     let eventfilter = contractData.filters.TurnComplete();
     let eventData = await contractData.queryFilter(eventfilter);
       updateTurnData(eventData);
    }
  fetchTurnComplete();
  
  async function fetchGameOver() {
     let eventfilter = contractData.filters.GameOver();
     let eventData = await contractData.queryFilter(eventfilter);
       updateEndGameData(eventData);
    }
  fetchGameOver();
  
  if (turnData && endGameData){
    return(              
      <div>
        <Play turn={turn} updateTurn={updateTurn} />
            <div class="absolute left-28">
              <div class="absolute top-20 left-80 z-10">
                { turn < 30 ? (
                  <GameBox turnData={turnData} turn={turn} endGameData={endGameData} /> 
                ) : (
                  <GameOver newGame={newGame} endGameData={endGameData}/>
                )}
              </div>
            </div>
          <ScoreBar turn={turn}/>
      </div>
      )
    } else {
      return(null)
  }
}
