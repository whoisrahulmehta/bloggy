import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";

function Landing() {
  return (
    <>
      <div className="welnote" >
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ opacity: 1, width: "60%" }}
          transition={{ duration: 2 }}
          className="texted"
        >
          {["We Have the", "Best Ever Blogs", "Available for You With Us"].map(
            (a, i) => (
              <div className="tex" key={i}>
                {i === 1 && (
                  <span className="empty">
                    {" "}
                    <FontAwesomeIcon icon={faNewspaper} />{" "}
                  </span>
                )}
                {i === 0 && (
                  <p className="vertical">
                    {" "}
                    <span style={{ color: "gold", fontSize: "14px" }}>
                      W.
                    </span>{" "}
                    <span className="verText">The Best Content</span>
                  </p>
                )}
                {a}
              </div>
            )
          )}
        </motion.div>
        <div className="imgArea">
          <img
            src="https://github.com/whoisrahulmehta/assetsforwebsites/raw/26418d60f1cbffe11f7968ca93d7d156ba549cd5/bloggy/bookpicture.png"
            alt="books"
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
