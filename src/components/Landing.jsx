import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";

function Landing() {
  return (
    <>
      <div
      className="welnote sm:h-[270px] h-[30vh] flex sm:flex-row  justify-center items-center py-10">
        <p className="vertical sm:right-0 right-1 sm:w-[1.5%] w-[5%]">
          {" "}
          <span style={{ color: "gold", fontSize: "14px" }}>W.</span>{" "}
          <span className="verText">The Best Content</span>
        </p>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ opacity: 1, width: "100%" }}
          transition={{ duration: 2 }}
          className="texted sm:text-[3rem] font-[700] italic px-[1%] text-2xl h-[50%] sm:h-[100%]"
        >
          {["We Have the", "Best Ever Blogs", "Available for You With Us"].map(
            (a, i) => (
              <motion.div className="tex " key={i}>
                {i === 1 && (
                  <motion.span
                    className="empty"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "20%" }}
                    transition={{ duration: 1, ease: "linear" }}
                  >
                    {" "}
                    <FontAwesomeIcon icon={faNewspaper} />{" "}
                  </motion.span>
                )}
                {a}
              </motion.div>
            )
          )}
        </motion.div>
        <div className="imgArea sm:h-[100%] h-[0%] sm:w-[50%] w-[0%]">
          <img
            src="https://github.com/whoisrahulmehta/assetsforwebsites/raw/26418d60f1cbffe11f7968ca93d7d156ba549cd5/bloggy/bookpicture.png"
            alt="books"
            className="
            w-[100%]
            h-[100%]
            object-cover
            "
          />
        </div>
      </div>
      <div className="line">
        {[
          "Writers From Worldwide",
          "Handpicked For Our Users",
          "Start Writing and Reading",
        ].map((a, i) => (
          <p className="lines" key={i}>
            {a}
          </p>
        ))}
      </div>
      <div className="mq" >
        <marquee>
          We here Showcase The Best Stories Of The World The best Blogs At One
          Place
        </marquee>
      </div>
    </>
  );
}

export default Landing;
