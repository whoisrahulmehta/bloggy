import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Featured() {
  const navigate = useNavigate();

  return (
    <div className="Featured" data-scroll data-scroll-section data-scroll-speed=".3">
      <section className="heading">
        <h1>Featured Blogs !</h1>
      </section>
      <section className="fea">
        {[
          {
            heading: "Exploring the Hidden Gems of Japan",
            author: "Alice Johnson",
            content:
              "Discover the lesser-known beautiful places in Japan that you must visit.",
          },
          {
            heading: "The Future of Artificial Intelligence",
            author: "Bob Smith",
            content:
              "An in-depth look at how AI is shaping our world and what to expect in the coming years.",
          },
          {
            heading: "10 Tips for a Healthy Lifestyle",
            author: "Carla Brown",
            content:
              "Simple and effective tips to maintain a healthy and balanced lifestyle.",
          },
          {
            heading: "The Ultimate Guide to Photography",
            author: "David Wilson",
            content:
              "Everything you need to know to get started with photography and take stunning photos.",
          },
          {
            heading: "Understanding the Stock Market",
            author: "Evelyn Davis",
            content:
              "A comprehensive guide to understanding how the stock market works and how to invest wisely.",
          },
          {
            heading: "Understanding the psyche of women",
            author: "Rahul Mehta",
            content:
              "Women have a diverse psyche as compared to Men. Women are not easy to understand.",
          },
        ].map((fb, i) => (
          <motion.div className="card" key={i} initial={{opacity:0 , rotateX:"180deg"}} whileInView={{rotateX:0 ,opacity:1}} transition={{duration:2}}>
            <h2>{fb.heading}</h2>
            <p className="fbbody">{fb.content}</p>
            <h4>{fb.author}</h4>
            <p className="hoveree">
              <p> <FontAwesomeIcon icon={faPen}/> By {fb.author}</p>
              {/* <p >goto Blogs for more</p> */}

            </p>
          </motion.div>
        ))}
      </section>
      <div className="btn">
        <button className="rm" onClick={()=>navigate('/blogs')}>Read More Now -</button>
      </div>
    </div>
  );
}

export default Featured;
