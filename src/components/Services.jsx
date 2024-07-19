import React from 'react'
import Navbar from "./Navbar";
import Yellowdiv from "./Yellowdiv";
import Playingcard from "./Playingcard";
import Footer from './Footer';

function Services() {
  return (
    <div className='Services' style={{background:"black"}}>
      <Navbar />
      <Yellowdiv />
      <Playingcard />
      <Footer />
    </div>
  )
}

export default Services
