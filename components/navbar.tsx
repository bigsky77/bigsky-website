import Sphynx from '../public/sphynx.jpg.png'
import Image from 'next/image'
import Link from "next/link"
import ConnectWallet from '../app/wallet.tsx'

const NavBar = () => {
  return(
    <div class="pb-12">
      <div class="border-solid border-b-2 border-burned-gold ">
        <Image src={Sphynx} height={100} width={100}/>    
        <ConnectWallet/>          
      </div>
    </div>
  )
}

export default NavBar
