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
        <div class="flex justify-center">
          <div class="absolute md:top-64 top-64">
            <h1 class="text-center font-neue text-6xl md:text-9xl text-magentaVibrant">BigSky</h1>
            <br></br>
            <br></br>
            <h1 class="text-center font-neue text-6xl md:text-9xl text-magentaVibrant">🤖</h1>
              <div class="font-italics pt-8 text-2xl md:text-6xl text-goldVibrant">
               <Typewriter options={{skipAddStyles: true}} onInit={(typewriter) => {
                  typewriter.typeString('Attention Is All You Need!')
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
    </div>
  )
}

















