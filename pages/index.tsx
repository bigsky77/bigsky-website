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
          <h1 class="text-center font-neue text-9xl text-indian-red absolute left-40 bottom-36">BigSky </h1>
        </div>
    </div>
  )
}

















