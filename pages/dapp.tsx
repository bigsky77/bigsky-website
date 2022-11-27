import Head from 'next/head'
import Link from "next/link";
import Header from '../components/header'
import Footer from '../components/footer'
import NavBar from '../components/navbar'
import Game from '../app/game/Game'
import RegisterShip from '../app/game/RegisterShip'

import { useState, useEffect } from 'react';
import Grid from '../components/grid'
import { useWeb3React } from '@web3-react/core'
import { Contract } from "@ethersproject/contracts";
import { Web3Provider } from '@ethersproject/providers'
import {ethers} from 'ethers'
import { hooks, metaMask } from '../app/connectors/metaMask'
import { address } from '../address.ts'

const { abi } = require('../../bigsky-contracts/out/BigSky.sol/BigSky.json');
const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider, useENSNames} = hooks

const Dapp = () => {
  const [isRegister, updateRegister] = useState(false); 
  const [contractData, setContractData] = useState();
  
  const { active, library, account } = useWeb3React<Web3Provider>();   
        
  useEffect(() => {
    const fetchContract = async() => {
        const provider = await new ethers.providers.Web3Provider(window.ethereum);
        const bigsky = await new Contract(address, abi, provider);
        
        setContractData(bigsky);
      } 
      fetchContract();
    }, []);

  return(
    <div class="h-screen bg-dark-cyan">
      <NavBar/>
        <div class="flex flex-grow justify-center">
           { contractData && isRegister ? (
             <Game contractData={contractData}/>
           ) : (
             <RegisterShip isRegister={isRegister} updateRegister={updateRegister}/>
           )}
         <Grid/>
        </div>
      <Footer/>
    </div>
  )
}

export default Dapp 
