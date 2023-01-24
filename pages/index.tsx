import Head from 'next/head'
import Link from "next/link";
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import Sphynx from '../public/sphynx.jpg'
import Photo35 from '../public/photo35.jpg'
import Typewriter from 'typewriter-effect';
import death_machine from '../public/death_machine.png'

export default function Home() {
  return (
    <div class="h-screen bg-dark-cyan">
      <Header/>
        <div class="flex justify-center">
          <div class="absolute md:top-80 top-64">
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeK8NzmvEhpMRwhFWaUfWx7Lu_pqAPQcpnzFc8te4ZBA6-fYg/viewform?usp=sf_link">
            <Image src={death_machine}/>
            </Link>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

















