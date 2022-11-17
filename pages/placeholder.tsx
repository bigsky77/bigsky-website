import Head from 'next/head'
import Link from "next/link";
import Image from 'next/image'
import Header from '../components/header.tsx'
import Footer from '../components/footer.tsx'
import Typewriter from 'typewriter-effect';
import NavBar from '../components/navbar.tsx'

const PlaceHolder = () => {
  return(
    <div class="h-screen bg-dark-cyan">
      <Header/>
        <div class="font-neue text-6xl text-center pt-60 pb-56">
          <Typewriter
          options={{
          strings: ['coming soon 💀'],
          autoStart: true,
          loop: true,
          pauseFor: 100000,
        }}
      />
        </div>
    </div>
  )
}

export default PlaceHolder
