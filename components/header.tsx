import Sphynx from '../public/sphynx.jpg.png'
import Image from 'next/image'
import Link from "next/link"

const Header = () => {
  return(
    <div class="pb-12">
      <div class="border-solid border-b-2 border-burned-gold ">
        <Image src={Sphynx} height={100} width={100} class=" left-10"/>    
          <div class="font-neue text-burned-gold hover:text-indian-red text-xl">
              <Link href="/dapp" class="absolute inline-flex items-center right-24 top-7 margin-2 w-36 ">
                <div class="border-solid rounded border-burned-gold border-2 hover:border-indian-red">
                  <p class="mr-1 mt-1">&nbsp;&nbsp;Launch App</p>
                </div>
              </Link>
          </div>
      </div>
    </div>
  )
}

export default Header
