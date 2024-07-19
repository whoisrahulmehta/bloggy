import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

function Frame() {
  
  return (
    <motion.div className="Frame" initial={{scale:'0'}} whileInView={{scale:1}} transition={{duration:1}}>  
      <div className="Yellowdiv">
        <h1> Explore </h1>
        <h1> The Awesome </h1>
        <h1> Bloggy's World </h1>
      </div>
      <button className="btn" ><Link to="/create" >Lets Write Something</Link></button>
    </motion.div>
  );
}

export default Frame;
