import { faGlobeAsia } from "@fortawesome/free-solid-svg-icons/faGlobeAsia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  FaBeer,
  FaFacebook,
  FaFacebookF,
  FaGithubAlt,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

function Yellowdiv() {
  return (
    <div className="Yellowdiv" data-scroll data-scroll-section data-scroll-speed=".3">
      <div className="row">
        <p className="intro">
          Bloggy is a marketplace cum collection of the best and most populor
          stories & content of around the globe{" "}
          <FontAwesomeIcon icon={faGlobeAsia} />.
          <br />
          We are providing you the most advanced and reached platform for your
          blogs.
        </p>
      </div>
      <div className="row">
        <div className="columns">
          <p>What we can offer you :</p>
        </div>
        <div className="columns">
          <p>
            Welcome to Bloggy, your ultimate destination for discovering the
            best blogs from around the globe! At Bloggy, we curate a diverse
            array of handpicked content tailored specifically to your interests
            and preferences. Whether you're passionate about travel, technology,
            lifestyle, or any other topic, our platform ensures you always have
            access to top-quality articles that resonate with you. Dive into a
            world of personalized reading experiences and explore the stories
            that matter most, all in one place. Join our community and let
            Bloggy be your guide to the world's finest blogs.
          </p>
        </div>
        <div className="columns">
          <p>Social :</p>
          {[
            {
              name: "Instagram",
              url: "https://www.instagram.com",
              icon: <FaInstagram />,
            },
            {
              name: "Whatsapp",
              url: "https://www.whatsapp.com",
              icon: <FaWhatsapp />,
            },
            {
              name: "Facebook",
              url: "https://www.facebook.com",
              icon: <FaFacebookF />,
            },
            {
              name: "Github",
              url: "https://www.github.com",
              icon: <FaGithubAlt />,
            },
          ].map((a, i) => (
            <a href="#" key={i}>
              {a.name} {a.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="columns">
          <p>Hi From one of our user / writer</p>
          {/* <a href= "#">Read More</a> */}
        </div>
        <div className="columns">
          <p className="userimg">
            <img src= "https://github.com/whoisrahulmehta/assetsforwebsites/raw/26418d60f1cbffe11f7968ca93d7d156ba549cd5/bloggy/userimg.jpg" alt="userimg" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Yellowdiv;
