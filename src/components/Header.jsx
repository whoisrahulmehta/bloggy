import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";


function Header() {
  
  return (
    <header 
 
    className="flex flex-col justify-center items-center" >
      <section className="title">
        <p className="search"><input type="text" placeholder="Search" id="search" name="search" /> </p>
        <p className="brand" style={{color:"gold", fontWeight:"600", textTransform:"capitalize"}}><marquee>Welcome to the Bloggy !</marquee></p>
        <p className="search" style={{fontSize:"0.8rem "}}>
          <a href="#"><FontAwesomeIcon icon={faBell}/>
            </a>
        </p>
      </section>
      <motion.section className="banner sm:px-[3%] px-[5%] text-justify" initial={{opacity:0, y:100}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:"linear"}}>
        <b>
          Welcome to the <strong>marketplace</strong> for your Blogs
        </b>
        <i className="px-[8%]">You can read blogs here or you can write yours as well !</i>
      </motion.section>
    </header>
  );
}

export default Header;
