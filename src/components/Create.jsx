import React, { useState } from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { addBlog } from "../store/features/blogSlice";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom"; // If you plan to use history for navigation

function Create() {
  const time =new Date();
  const navigate =useNavigate();
  const dispatch = useDispatch() ;
  // const blogs = useSelector((state)=>state.blog.blogs)
  const [newData, setNewData] = useState({
    id: time,
    author: "",
    heading: "",
    summary: "",
    content: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   if(newData){
    console.log(newData);
    dispatch(addBlog({
      id: Date.now(),
      heading: newData.heading,
      author: newData.author,
       summary : newData.summary,
       content: newData.content
    })
  )
   }
   navigate('/blogs');
  }

  return (
    <div className="create pt-20">
      <Navbar />
      <h1>Let's showcase your thoughts!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="author" className="sm:w-[70%] w-[97%] flex sm:flex-row flex-col items-center justify-center">
          What is your Name?
          <input
            type="text"
            id="author"
            name="author"
            placeholder="Your Name"
            value={newData.author}
            onChange={(e) => handleChange(e)}
            className="sm:w-[40%] w-[100%]"
          />
        </label>
        <label htmlFor="heading" className="sm:w-[70%] w-[97%] flex sm:flex-row flex-col items-center justify-center">
          What is the Title of your Blog?
          <input
            type="text"
            id="heading"
            name="heading"
            placeholder="My First Blog"
            value={newData.heading}
            onChange={(e) => handleChange(e)}
            className="sm:w-[40%] w-[100%]"
          />
        </label>
        <label htmlFor="summary" className="sm:w-[70%] w-[97%] flex sm:flex-row flex-col items-center justify-center">
          Write a Summary of your blog!
          <textarea
            id="summary"
            name="summary"
            value={newData.summary}
            onChange={(e) => handleChange(e)}
            className="sm:w-[40%] w-[100%]"
            placeholder="Add the short summary of your blog here so readers can have a brief idea of your blog's theme."
          ></textarea>
        </label>
        <label htmlFor="content" className="sm:w-[70%] w-[97%] flex sm:flex-row flex-col items-center justify-center">
          Let's begin writing your blog here!
          <textarea
            id="content"
            name="content"
            value={newData.content}
            onChange={(e) => handleChange(e)}
            className="sm:w-[40%] w-[100%]"
            placeholder="Write The Blog Here! Best Wishes"
          ></textarea>
        </label>
        <button type="submit" >Submit Your Blog</button>
      </form>
    </div>
  );
}

export default Create;
