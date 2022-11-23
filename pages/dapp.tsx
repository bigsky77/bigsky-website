import Head from 'next/head'
import Link from "next/link";
import Header from '../components/header'
import Footer from '../components/footer'
import NavBar from '../components/navbar'
import Game from '../app/game/Game'

const Dapp = () => {
  return(
    <div class="h-screen bg-dark-cyan">
      <NavBar/>
        <Game />
      <Footer/>
    </div>
  )
}

export default Dapp 
