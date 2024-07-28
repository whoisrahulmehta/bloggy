import React from 'react'
import Navbar from "./Navbar";
import Yellowdiv from "./Yellowdiv";
import Playingcard from "./Playingcard";
import Footer from './Footer';
import Reviews from './Reviews';
import Featured from './Featured';

function Services() {
  return (
    <div className='Services pt-[25vh] flex flex-col justify-start items-center gap-64' style={{background:"black"}}>
      <Navbar />
      <Yellowdiv />
      <Reviews />
      <Playingcard />
      <Featured />
      <Footer />
    </div>
  )
}

export default Services
