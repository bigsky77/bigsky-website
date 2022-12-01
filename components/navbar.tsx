import Sphynx from '../public/sphynx.jpg.png'
import Image from 'next/image'
import Link from "next/link"
import WalletModal from './walletModal'
import LeaderModal from './leadermodal'
import NetworkCard from '../app/connectorCards/NetworkCard'

const NavBar = () => {
      return(
      <nav class="bg-gradient-to-r from-purple-700 to-purple900 border-burned-gold border-solid border-b-2 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div class="container flex flex-wrap items-center h-auto justify-between mx-auto">
          <Link href="/" class="flex items-center">
              <Image src={Sphynx} class="absolute w-16 h-20 md:h-auto md:w-24 md:pb-1.5 left-1 pt-1 pb-2.5"/>
          </Link>
          <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col pt-4 pb-4 pl-0 mt-4 border border-red-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
              <li>
               <LeaderModal/>
              </li>
              <li>
               <WalletModal/>
              </li>
            </ul>
          </div>
        </div>
      </nav>
 )
}

export default NavBar
