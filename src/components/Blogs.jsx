import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Featured from "./Featured";
import { FaGlobe } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "./Footer";

function Blogs() {
  const dispatch = useDispatch;
  const blogs = useSelector((state) => state.blog.blogs);

  console.log(blogs);
  return (
    <div className="Blogs sm:pt-10 pt-24">
      <Navbar />
      <div className="heading">
        <p className="headingLine flex flex-row items-center justify-end gap-4 text-xl sm:text-3xl">
          <span>Blogs handpicked from accross the </span>
          <span>
            {" "}
            <FaGlobe color="blue" />
          </span>
        </p>
      </div>
      <div className="blogsCo">
        {blogs.map((blog, index) => (
          <div className="card sm:w-[80%] w-full sm:text-[1rem] text-[0.9rem]"  key={index}>
            <h2>{blog.heading}</h2>
            <p className="fbbody">{blog.summary}</p>
            <h4>{blog.author}</h4>
            <p className="hoveree">
              <Link to={`/blogs/${blog.id}`}>
                Read More form : {blog.author}
              </Link>
            </p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Blogs;
