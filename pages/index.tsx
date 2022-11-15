import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header.tsx'
import Footer from '../components/footer.tsx'
import Sphynx from '../public/sphynx.jpg'
import Photo35 from '../public/photo35.jpg'

export default function Home() {
  return (
    <div class="h-screen bg-dark-cyan">
      <Header/>
        <div>
          <h1 class="text-center font-neue text-8xl text-indian-red">BigSky</h1>
          <Image src={Photo35} height={200} width={200}/>
          <Image src={Photo35} height={200} width={200}/>
          <Image src={Photo35} height={200} width={200}/>
        </div>
      <Footer/>
    </div>
  )
}
