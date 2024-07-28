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
    <div
      className="Yellowdiv py-0"
    >
      <div className="row sm:h-[33%] h-[fit-content] font-[500]">
        <p className="intro font-[600]">
          Bloggy is a marketplace cum collection of the best and most populor
          stories & content of around the globe{" "}
          <FontAwesomeIcon icon={faGlobeAsia} />.
          <br />
          We are providing you the most advanced and reached platform for your
          blogs.
        </p>
      </div>
      <div className="row flex sm:h-[40%] h-[fit-content] sm:flex-row flex-col justify-center items-center sm:py-10 py-14">
        <div className="columns sm:w-[30%] w-[100%] sm:h-[100%] h-[fit-content] sm:px-0 px-7 gap-2" >
          <p className="text-3xl py-1">What we can offer you :</p>
        </div>
        <div className="columns sm:w-[30%] w-[100%] sm:px-0 px-9 py-2">
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
        <div className="columns sm:w-[30%] w-[100%] sm:px-0 px-7">
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
            <a
              href="#"
              key={i}
              className="links w-full flex flex-row justify-center items-center gap-[30px]"
            >
              <span>{a.name}</span> <span>{a.icon}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="row flex sm:h-[40%] h-[fit-content] sm:flex-row flex-col justify-center items-center sm:py-10 py-14">
        <div className="columns sm:w-[30%] w-[100%] sm:h-[100%] h-[fit-content] sm:px-0 px-7">
          <p>Hi From one of our user / writer </p>
          {/* <a href= "#">Read More</a> */}
        </div>
        <div className="columns sm:w-[30%] w-[100%] sm:h-[100%] h-[fit-content] sm:px-0 px-7">
          <p className="userimg w-full h-full flex flex-row justify-center sm:items-center items-start">
            <img
            className="w-full h-full"
              src="https://github.com/whoisrahulmehta/assetsforwebsites/raw/26418d60f1cbffe11f7968ca93d7d156ba549cd5/bloggy/userimg.jpg"
              alt="userimg"
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Yellowdiv;
