import {React,useEffect,useState} from 'react'
import Navbar2 from '../components/Navbar2'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export const Home = () => {
  return (
    <div>
        <Navbar2 />
        <Hero/>
        <Footer/>
    </div>
  )
}

export default Home