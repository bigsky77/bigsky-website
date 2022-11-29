import React, { useState, useEffect, useRef } from 'react';
import { useWeb3React } from '@web3-react/core'
import { Contract } from "@ethersproject/contracts";
import { Web3Provider } from '@ethersproject/providers'
import {ethers} from 'ethers'
import { hooks, metaMask } from '../connectors/metaMask'
import { address } from '../../address.ts'

import GameBox from './GameBox'

const { abi } = require('../../../bigsky-contracts/out/BigSky.sol/BigSky.json');
const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider, useENSNames} = hooks

export default function Game({contractData, updateRegister} :props) {  
  const [turnData, updateTurnData] = useState(null);
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
          <GameBox turnData={turnData} endGameData={endGameData}/> 
        </div>
      )
    } else {
      return(null)
  }
}
