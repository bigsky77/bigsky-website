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
  const [turn, updateTurn] = useState(0);
  
  useEffect(() => {
    let counter = 0;
    const intervalId = setInterval(() => {
        if(turn < 30){
            counter++;
            updateTurn(counter);
          } else {
            updateTurn(0); 
            }  
        }, 100)
    
    return () => clearInterval(intervalId);
  }, [])

  async function fetchTurnComplete() {
     let eventfilter = contractData.filters.TurnComplete();
     let eventData = await contractData.queryFilter(eventfilter);
       updateTurnData(eventData);
  }
  fetchTurnComplete();
  
  if (turnData){
      return(
        <div>
          <GameBox turnData={turnData} turn={turn}/> 
        </div>
      )
    } else {
      return(null)
  }
}
