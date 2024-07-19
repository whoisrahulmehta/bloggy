import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Featured from "./Featured";
import { FaGlobe } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Blogs() {
  const dispatch = useDispatch;
  const blogs = useSelector((state) => state.blog.blogs);
  console.log(blogs);
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} className="Blogs">
      <Navbar />
      <div className="heading">
        <p className="headingLine">
          Blogs handpicked from accross the globe <FaGlobe color="blue" />
        </p>
      </div>
      <div className="blogsCo">
        {
          blogs.map((blog, index)=>(
            <div className="card" key={index}>
            <h2>{blog.heading}</h2>
            <p className="fbbody">{blog.summary}</p>
            <h4>{blog.author}</h4>
            <p className="hoveree"><Link to = {`/blogs/${blog.id}`} >Read More form : {blog.author}</Link></p>
          </div>
          ))
        }
      </div>
    </motion.div>
  );
}

export default Blogs;