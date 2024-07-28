import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

function Frame() {
  
  return (
    <motion.div className="Frame" initial={{scale:'0'}} whileInView={{scale:1}} transition={{duration:1}}>  
      <div className="Yellowdiv">
        <h1 className="sm:font-[600] font-[800]"> Explore </h1>
        <h1 className="sm:font-[600] font-[800]"> The Awesome </h1>
        <h1 className="sm:font-[600] font-[800]"> Bloggy's World </h1>
      </div>
      <button className="btn sm:w-[30%] w-half px-10" ><Link to="/create" >Lets Write Something</Link></button>
    </motion.div>
  );
}

export default Frame;
