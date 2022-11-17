import Sphynx from '../public/sphynx.jpg.png'
import Image from 'next/image'
import Link from "next/link"
import ConnectWallet from '../app/wallet.tsx'

const Header = () => {
  return(
    <div class="pb-12">
      <div class="border-solid border-b-2 border-burned-gold ">
        <Image src={Sphynx} height={100} width={100}/>    
          <Link href="/placeholder" class="absolute inline-flex items-center right-24 top-7 margin-2 w-36 text-xl border-solid rounded-md border-burned-gold border-2 font-neue text-burned-gold hover:border-indian-red hover:text-indian-red">
            <p class="mr-1 mt-1">&nbsp;&nbsp;Launch App</p>
          </Link>
      </div>
    </div>
  )
}

export default Header
