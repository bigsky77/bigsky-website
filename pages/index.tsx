import Head from 'next/head'
import Link from "next/link";
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header.tsx'
import Footer from '../components/footer.tsx'
import Sphynx from '../public/sphynx.jpg'
import Photo35 from '../public/photo35.jpg'
import Rotator from '../public/rotator.tsx'

export default function Home() {
  return (
    <div class="h-screen bg-dark-cyan">
      <Header/>
        <div>
          <h1 class="text-center font-neue text-8xl text-indian-red">BigSky</h1>
            <h1 class="text-center font-italics text-4xl text-burned-gold pt-6">legendary technology for a limitless future</h1>
          <div class="grid-cols-3 span-14 flex justify-center space-x-24  content-center font-neue text-burned-gold pt-24">
            <Link href="arcade/arcade" class="border-solid border-burned-gold border-4 hover:border-indian-red">
              <Image src={Photo35} height={200} width={200}/>
              arcade
            </Link>  
            <Link href="writing/writing" class="border-solid  border-burned-gold border-4 hover:border-indian-red">
              <Image src={Photo35} height={200} width={200}/>
              writing
            </Link>  
            <Link href="death-machine/death-machine" class="border-solid  border-burned-gold border-4 hover:border-indian-red">
              <Image src={Photo35} height={200} width={200}/>
              death-machine 
            </Link>  
          </div>
        </div>
      <Footer/>
    </div>
  )
}

















