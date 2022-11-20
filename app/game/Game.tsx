import React, { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core'
import type { Web3ReactHooks } from '@web3-react/core'
import { Contract } from "@ethersproject/contracts";
import { Web3Provider } from '@ethersproject/providers'
import { hooks, metaMask } from '../connectors/metaMask'
import { address } from '../../address.ts'

const { abi } = require('abi/bigsky.json');
const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider, useENSNames} = hooks

export default function Game() {  
  const [positionX, updatePostionX] = useState(1);
  const [positionY, updatePostionY] = useState(1);
  
  const provider = useProvider();
  const { active, library, account } = useWeb3React<Web3Provider>();
  
  const getPosition = () => {
    if(!(active && account && library)) return 
      const bigsky = new Contract(address, abi);
      const position = bigsky.getPosition();

      updatePostionX(position.x);
      updatePostionY(position.y);
  }

  return(
    <div>
      <p class="font-neue text-8xl text-magentaVibrant">Coming Soon!</p>
    </div>
  )

}
