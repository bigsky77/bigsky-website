import Head from 'next/head'
import Link from "next/link";
import Image from 'next/image'
import Header from '../components/header.tsx'
import Footer from '../components/footer.tsx'

const PlaceHolder = () => {
  return(
    <div class="h-screen bg-dark-cyan">
      <Header/>
        <div class="font-neue text-6xl text-center pt-60 pb-56">
          coming soon 💀
        </div>
    </div>
  )
}

export default PlaceHolder
