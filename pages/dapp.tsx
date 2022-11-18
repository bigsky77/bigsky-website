import Head from 'next/head'
import Link from "next/link";
import Header from '../components/header'
import Footer from '../components/footer'
import NavBar from '../components/navbar'
import GameBox from '../components/gamebox'

const Dapp = () => {
  return(
    <div class="h-screen bg-dark-cyan">
      <NavBar/>
        <GameBox/>
      <Footer/>
    </div>
  )
}

export default Dapp 
