import { motion } from "framer-motion";
import React, { useState } from "react";
import { BsBellFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
// import About from "./About";

function Navbar() {
  
 

  const [expand, setExpand] = useState("off");


  const toggleExpand = () => {
    setExpand(expand === "off" ? "on" : "off");
  };
 
  const options = [
    { id: 1, name: "Bloggy", path: "/" },
    { id: 2, name: "Blogs", path: "/blogs" },
    { id: 3, name: "Create", path: "/create" },
    { id: 4, name: "About", path: "/about" },
    { id: 5, name: "Services", path: "/services" },
  ];

  return (
    <>
        <nav className="w-[100%] sm:h-[7vh] h-[10vh] fixed top-[0%]   flex flex-row justify-between items-center px-[3%] pe-[5%] font-[500]">
        <div className="brand md:w-[25%] sm:w-[20%] w-[70%] font-[700] flex flex-row justify-center items-center italic">
          <span className="w-[20%] h-[100%] imageLogo p-[1%] xl:p-[5%] sm:text-[4rem] text-[3rem]">
            {/* <FaWolfPackBattalion size="3rem" /> */}
          </span>
          <span className="whitespace-nowrap uppercase">
           BLOGS MArketPlace
          </span>
        </div>
        <div className="navmenu sm:w-[60%] md:w-[50%]  hidden sm:flex flex-row justify-evenly items-center h-[100%]">
          {options.map((op, oI) => (
            <NavLink
              to={op.path}
              key={oI}
              className={`menuNavLink  text-md uppercase h-[100%] font-[600] flex flex-row justify-evenly items-center px-[1%] order-[${op.id}]`}
            >
              {op.name}
            </NavLink>
          ))}
        </div>
        <div className="toggleMenu sm:hidden  gap-[35%]  flex flex-row justify-center items-center h-[100%]">
          <button className="menuNavLink  px-[12%]" onClick={toggleExpand} >
            <GiHamburgerMenu color={`${expand === "on" ? "red" : "white"}`} />
          </button>
        </div>
      </nav>
      {expand === "on" ? (
        <motion.div className="expMenu z-[900] fixed top-[7%] sm:hidden flex flex-col justify-start items-center h-[100vh] w-[100%] py-[10vh]  backdrop-blur-md "
        initial={{x:-200}}
        animate={{x:0}}
        exit={{x:-200}}
        transition={{duration:.4}}
        >
          <div className="navmenu w-[100%]  sm:hidden flex flex-col justify-start items-center h-[50%] py-[0%]">
            {options.map((op, oI) => (
              <NavLink
                to={op.path}
                key={oI}
                onClick={toggleExpand}
                className="menuNavLink  text-white font-[600] text-md uppercase h-[100%] w-[100%]  flex flex-row justify-evenly items-center px-[1%]"
              >
                {op.name}
              </NavLink>
            ))}
          </div>
        </motion.div>
      ) : (
        ""
      )}
    </>
  );
}

export default Navbar;
