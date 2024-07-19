import React from "react";
import {
  FaBeer,
  FaFacebook,
  FaFacebookF,
  FaGithubAlt,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import Navbar from "./Navbar";
function Footer() {
  return (
    <footer>
      <div className="top">
        <section className="A">Handpicked from around the Globe - </section>
        <section className="B">
          <h1>Explore </h1>
          <div className="links">
            <div className="social">
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
           <p key={i}>  <a href="#" >
              {a.name} {a.icon}
            </a></p>
          ))}
            </div>
          </div>
          <div className="address">
            <p>3200 Fulkerth Rd, Turlock, CA 95380, United States</p>
            <p >whoisrahulmehta@gmail.com</p>
          </div>
        </section>
      </div>
      <div className="bottom">
        <p className="brand " style={{color:"gold"}}>Bloggy</p>
        <p>Since 1999</p>
        <p>Powered By : Rahul Mehta</p>
      </div>
    </footer>
  );
}

export default Footer;
