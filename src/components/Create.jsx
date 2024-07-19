import React, { useState } from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { addBlog } from "../store/features/blogSlice";
// import { useHistory } from "react-router-dom"; // If you plan to use history for navigation

function Create() {
  const dispatch = useDispatch() ;
  // const blogs = useSelector((state)=>state.blog.blogs)
  const [newData, setNewData] = useState({
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
  }

  return (
    <div className="create">
      <Navbar />
      <h1>Let's showcase your thoughts!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="author">
          What is your Name?
          <input
            type="text"
            id="author"
            name="author"
            placeholder="Your Name"
            value={newData.author}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="heading">
          What is the Title of your Blog?
          <input
            type="text"
            id="heading"
            name="heading"
            placeholder="My First Blog"
            value={newData.heading}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="summary">
          Write a Summary of your blog!
          <textarea
            id="summary"
            name="summary"
            value={newData.summary}
            onChange={(e) => handleChange(e)}
            placeholder="Add the short summary of your blog here so readers can have a brief idea of your blog's theme."
          ></textarea>
        </label>
        <label htmlFor="content">
          Let's begin writing your blog here!
          <textarea
            id="content"
            name="content"
            value={newData.content}
            onChange={(e) => handleChange(e)}
            placeholder="Write The Blog Here! Best Wishes"
          ></textarea>
        </label>
        <button type="submit">Submit Your Blog</button>
      </form>
    </div>
  );
}

export default Create;
