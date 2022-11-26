import Head from 'next/head'
import Link from "next/link";
import Header from '../components/header'
import Footer from '../components/footer'
import NavBar from '../components/navbar'
import Game from '../app/game/Game'
import RegisterShip from '../app/game/RegisterShip'
import { useState } from 'react';
import Grid from '../components/grid'

const Dapp = () => {
  const [isRegister, updateRegister] = useState(false); 

  return(
    <div class="h-screen bg-dark-cyan">
      <NavBar/>
        <div class="flex flex-grow justify-center">
           { isRegister ? (
             <Game/>
           ) : (
             <RegisterShip isRegister={isRegister} updateRegister={updateRegister}/>
           )}
         <Grid/>
        </div>
      <Footer/>
    </div>
  )
}

export default Dapp 
