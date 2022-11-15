import Sphynx from '../public/sphynx.jpg.png'
import Image from 'next/image'

const Header = () => {
  return(
    <div class="border-solid border-b-2 border-burned-gold">
      <Image src={Sphynx} height={100} width={100}/>    
    </div>
  )

}

export default Header
