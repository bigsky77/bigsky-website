import Head from 'next/head'
import Link from "next/link";
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import Sphynx from '../public/sphynx.jpg'
import Photo35 from '../public/photo35.jpg'
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <div class="h-screen bg-dark-cyan">
      <Header/>
        <div class="flex justify-center">
          <div class="absolute top-80">
            <h1 class="text-center font-neue text-9xl text-magentaVibrant">BigSky</h1>
              <div class="font-italics pt-8 text-6xl text-burned-gold">
               <Typewriter options={{skipAddStyles: true}} onInit={(typewriter) => {
                  typewriter.typeString('anything is possible...')
                  .callFunction(() => {
                    console.log('String typed out!');
                  })
                  .pauseFor(2500)
                  .start();
               }}
            />
           </div>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

















