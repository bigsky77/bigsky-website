import Sphynx from '../public/sphynx.jpg.png'
import Image from 'next/image'
import Link from "next/link"
import ChainSelector from '../app/chainselect'

const Header = () => {
      
    return(
      <div>
      <nav class="bg-gradient-to-r min-h-[90px] from-purple-800 to-purple900 border-burned-gold border-solid border-b-2 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div class="container flex flex-wrap items-center h-auto justify-between mx-auto">
         <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col pt-4 pb-4 pl-0 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
           </ul>
          </div>
        </div>
      </nav>
    </div>
 )
}

export default Header

