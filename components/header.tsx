import Sphynx from '../public/sphynx.jpg.png'
import Image from 'next/image'
import Link from "next/link"
import ConnectWallet from './app/wallet.js'

const Header = () => {
  return(
    <div class="pb-12">
      <div class="border-solid border-b-2 border-burned-gold ">
        <Image src={Sphynx} height={100} width={100}/>    
          <button class="absolute right-5 top-7 border-double border-burned-gold border-4 font-neue text-burned-gold hover:border-indian-red">
            connect wallet
          </button>
          <button class="absolute right-48 top-7 border-double border-burned-gold border-4 font-neue text-burned-gold hover:border-indian-red">
            ethereum
          </button>
      </div>
    </div>
  )

}

export default Header
