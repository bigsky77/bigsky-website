import Head from 'next/head'
import Link from "next/link";
import Header from '../components/header'
import Footer from '../components/footer'
import NavBar from '../components/navbar'

const Dapp = () => {
  return(
    <div class="h-screen bg-dark-cyan">
      <NavBar/>
      <Footer/>
    </div>
  )
}

export default Dapp 
