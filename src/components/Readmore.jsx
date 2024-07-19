import React from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FaPen } from "react-icons/fa";
function Readmore() {
  const { id } = useParams();

  const blogs = useSelector((state) => state.blog.blogs);
  const blog = blogs.find((blog) => blog.id === Number(id));

  return (
    <div className="Readmore">
      <Navbar />
      <div className="blog">
        <div className="heading">{blog.heading} 
        <p className="author"> <FaPen />By {blog.author}</p>

        </div>
        <div className="summary">
          <p style={{fontWeight:"bold" , textAlign:"center"}}>Summary</p> <p>{blog.summary}</p>
        </div>
        <div className="content">{blog.content}</div>
      </div>
    </div>
  );
}

export default Readmore;
