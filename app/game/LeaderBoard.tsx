import { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core'
import { Contract } from "@ethersproject/contracts";
import { Web3Provider } from '@ethersproject/providers'
import {ethers} from 'ethers'
import { hooks, metaMask } from '../connectors/metaMask'
import { address } from '../../address.ts'
import {formatAddress} from '../../lib/helpers'

const { abi } = require('../../../bigsky-contracts/out/BigSky.sol/BigSky.json');
const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider, useENSNames} = hooks

const LeaderBoard = () => {
  const [leaderboard, updateLeaderBoard] = useState(null);
  const { active, library, account } = useWeb3React<Web3Provider>();   
        
  useEffect(() => {
    const fetchLeaderBoard = async() => {
        const provider = await new ethers.providers.Web3Provider(window.ethereum);
        const bigsky = await new Contract(address, abi, provider);
          
        let eventfilter = bigsky.filters.GameOver();
        let eventData = await bigsky.queryFilter(eventfilter);
          updateLeaderBoard(eventData);

          console.log('leader board', eventData)
        } 
    fetchLeaderBoard();
  }, []);

 if(leaderboard){
  return(
    <div class="overflow-y-auto max-h-48 relative">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Rank
                </th>
                <th scope="col" class="py-3 px-6">
                    Address
                </th>
                <th scope="col" class="py-3 px-6">
                    Games Played
                </th>
                <th scope="col" class="py-3 px-6">
                    Stars Captured
                </th>
                <th scope="col" class="py-3 px-6">
                    High Score
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                1
                </th>
                <td class="py-4 px-6">
                {formatAddress(leaderboard[1].args.playerAddress)} 
                </td>
                <td class="py-4 px-6">
                {leaderboard[1].args.gamesPlayed.toNumber()}
                </td>
                <td class="py-4 px-6">
                {leaderboard[1].args.starsCaptured.toNumber()}
                </td>
                <td class="py-4 px-6">
                {leaderboard[1].args.highScore.toNumber()}
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                2
                </th>
                 <td class="py-4 px-6">
                {formatAddress(leaderboard[7].args.playerAddress)} 
                </td>
                <td class="py-4 px-6">
                {leaderboard[7].args.gamesPlayed.toNumber()}
                </td>
                <td class="py-4 px-6">
                {leaderboard[7].args.starsCaptured.toNumber()}
                </td>
                <td class="py-4 px-6">
                {leaderboard[7].args.highScore.toNumber()}
                </td>
                </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                3
                </th>
                 <td class="py-4 px-6">
                {formatAddress(leaderboard[1].args.playerAddress)} 
                </td>
                <td class="py-4 px-6">
                {leaderboard[1].args.gamesPlayed.toNumber()}
                </td>
                <td class="py-4 px-6">
                {leaderboard[1].args.starsCaptured.toNumber()}
                </td>
                <td class="py-4 px-6">
                {leaderboard[1].args.highScore.toNumber()}
                </td>
                </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                4
                </th>
                 <td class="py-4 px-6">
                {formatAddress(leaderboard[1].args.playerAddress)} 
                </td>
                <td class="py-4 px-6">
                {leaderboard[1].args.gamesPlayed.toNumber()}
                </td>
                <td class="py-4 px-6">
                {leaderboard[1].args.starsCaptured.toNumber()}
                </td>
                <td class="py-4 px-6">
                {leaderboard[1].args.highScore.toNumber()}
                </td>
                </tr>
<tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                5
                </th>
                 <td class="py-4 px-6">
                {formatAddress(leaderboard[1].args.playerAddress)} 
                </td>
                <td class="py-4 px-6">
                {leaderboard[1].args.gamesPlayed.toNumber()}
                </td>
                <td class="py-4 px-6">
                {leaderboard[1].args.starsCaptured.toNumber()}
                </td>
                <td class="py-4 px-6">
                {leaderboard[1].args.highScore.toNumber()}
                </td>
            </tr>
        </tbody>
      </table>
    </div>  
    )
  } else {
      return (null)
  }
}

export default LeaderBoard
