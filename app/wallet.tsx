import Link from "next/link";
import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { formatAddress } from "../lib/helpers";
import { connectorsByName, Metamask } from "./connectors";
import {ethers} from 'ethers'

const ConnectWallet = (props: any) => {   
  
  const connectMetamask = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.send('eth_requestAccounts', []); 
    const signer = provider.getSigner();
    
    showResult(true)
  };

  const getLibrary = (provider) => {
    const library = new ethers.providers.Web3Provider(provider);
    library.pollingInterval = 8000; 
    return library;
  };

  return(
    <div> 
    {connectMetamask} 
    </div>
  )
}

export default ConnectWallet
