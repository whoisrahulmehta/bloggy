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
    <>
      <footer className="w-full sm:h-[80vh] h-[60vh] flex flex-col ">
        <div className="top px-10">
          <section className="A w-full md:text-[12rem] text-[4rem] italic font-[600]">
            <span className="text-emerald-900">H</span>and
            <span className="text-emerald-900">p</span>icked
          </section>
          <section className="A w-full sm:text-[5rem] text-[3rem] italic font-[600]">
            <span className="text-emerald-900">From</span> Around The{" "}
            <span className="text-emerald-900">Globe</span>
          </section>

          <section className="B flex sm:flex-row flex-col justify-between">
            <h1 className="text-[4rem] text-yellow-300 font-[400] uppercase flex flex-col justify-center items-center">
              Explore{" "}
            </h1>
            <div className="links w-[70%] flex sm:flex-row flex-col   justify-between">
              <div className="social sm:h-auto  h-[15vh]">
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
                  <p key={i}>
                    <a href="#"  className="flex flex-row items-center">
                      {a.name}____ {a.icon}
                    </a>
                  </p>
                ))}
              </div>
              <div className="address">
                <p>3200 Fulkerth Rd, Turlock, CA 95380, United States</p>
                <p>whoisrahulmehta@gmail.com</p>
              </div>
            </div>
          </section>
        </div>
        <div className="bottom flex flex-row justify-evenly items-center text-sm w-full bg-emerald-600 py-4">
          <p className="brand " style={{ color: "gold" }}>
            Bloggy
          </p>
          <p>Powered By : Rahul Mehta</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
