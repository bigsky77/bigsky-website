import Head from 'next/head'
import Link from "next/link";
import Header from '../components/header'
import Footer from '../components/footer'
import NavBar from '../components/navbar'
import Game from '../app/game/Game'
import RegisterShip from '../app/game/RegisterShip'
import { useState } from 'react';

const Dapp = () => {
  const [isRegister, updateRegister] = useState(false); 

  return(
    <div class="h-screen bg-dark-cyan">
      <NavBar/>
        { isRegister ? (
          <Game/>
        ) : (
          <RegisterShip isRegister={isRegister} updateRegister={updateRegister}/>
        )}
      <Footer/>
    </div>
  )
}

export default Dapp 
