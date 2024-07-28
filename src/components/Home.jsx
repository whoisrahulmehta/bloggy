import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Landing from "./Landing";
import Yellowdiv from "./Yellowdiv";
import Playingcard from "./Playingcard";
import Reviews from "./Reviews";
import Featured from "./Featured";
import Card from "./Card";
import Frame from "./Frame";
import Footer from "./Footer";
import LocomotiveScroll from "locomotive-scroll";



function Home() {
  const locomotiveScroll = new LocomotiveScroll();

  useEffect(() => {
    return () => console.log("unmounted homwe");
  }, []);
  return (
    <div className="App "  data-scroll data-scroll-container>
      <Navbar />
      <Header />
      <Landing />
      <Yellowdiv />
      <Playingcard />
      <Featured />
      <Reviews />
      <Card />
      <Frame />
      <Footer />
    </div>
  );
}

export default Home;
