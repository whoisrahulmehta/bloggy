import { motion } from "framer-motion";
import React from "react";
import { FaStar } from "react-icons/fa";

function Card() {
  return (
    <div className="Card">
      {[
        { content: "Bloggy", rating: "", button: "Since 1999" },
        {
          content: "Maricopa",
          rating: <FaStar /> ,
          button: `Rating on Maricopa : 9`,
        },
        { content: <img src="https://github.com/whoisrahulmehta/assetsforwebsites/raw/26418d60f1cbffe11f7968ca93d7d156ba549cd5/bloggy/circlepic.png" alt="img"/>, rating: "", button: "Prime Content of the Year " },
      ].map((card, i)=>(
        <motion.div initial={{rotateY:'180deg', opacity:1}} whileInView={{opacity:1, rotateY:0}} transition={{duration:1}} className="cards" key={i}>
                <p className="name">{card.content}</p>
                <p className="button">{card.button}{card.rating}</p>
        </motion.div>
      ))
      }
    </div>
  );
}

export default Card;
