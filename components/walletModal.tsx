import { useEffect, useState } from 'react'
import Script from 'next/script'
import MetaMaskCard from '../app/connectorCards/MetaMaskCard'
import WalletConnectCard from '../app/connectorCards/WalletConnectCard'
import CoinbaseWalletCard from '../app/connectorCards/CoinbaseWalletCard'

const WalletModal = () => {
 return(
         <div class="text-neue">
          <button type="button" data-modal-toggle="crypto-modal" class="text-gray-900 hover:border-burned-gold bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700">
            <svg aria-hidden="true" class="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>Connect Wallet</button>

          <div id="crypto-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 p-4 w-full md:inset-0 h-modal md:h-full">
              <div class="relative w-full max-w-md h-full md:h-auto">
                  <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                      <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="crypto-modal">
                          <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                          <span class="sr-only">Close modal</span>
                      </button>
                      <div class="py-4 px-6 rounded-t border-b dark:border-gray-600">
                          <h3 class="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
                              Connect wallet
                          </h3>
                      </div>
                      <div class="p-6">
                          <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Please connect wallet to continue.</p>
                          <ul class="my-4 space-y-3">
                              <li>
                                  <a class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                     <span class="flex-1 ml-3 whitespace-nowrap"><MetaMaskCard /></span>
                                  </a>
                              </li>
                              <li>
                                  <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                     <span class="flex-1 ml-3 whitespace-nowrap"><CoinbaseWalletCard /></span>
                                  </a>
                              </li>
                              <li>
                                  <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                    <span class="flex-1 ml-3 whitespace-nowrap"><WalletConnectCard /></span>
                                  </a>
                              </li>
                         </ul>
                    </div>
                  </div>
              </div>
          </div>
          <Script src="https://unpkg.com/flowbite@1.5.4/dist/flowbite.js"></Script>
      </div>
  )
}

export default WalletModal
