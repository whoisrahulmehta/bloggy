// import React from "react";

// function Navbar() {
//   const items = ["Home", "Contact", "Blogs", "Addblog" , "About", "Services"];
//   const user = ["Login", "Sign Up"];
//   return (
//     <nav>
//       <div className="menu">
//         {items.map((arr, index) => (
//           <p key={index}>{arr}</p>
//         ))}
//       </div>
//       <div className="user">
//         {user.map((uss, inx) => (
//           <p key={inx}>{uss}</p>
//         ))}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";
import About from "./About";

function Navbar() {
  return (
    <>
      <nav>
        <div
          className="abc"
          style={{
            color: "gold",
            fontSize: "25px",
            textTransform: "uppercase",
            fontStyle: "italic",
            fontWeight: "bold",
          }}
        >
          <NavLink to="/">Bloggy</NavLink>
        </div>
        <div className="links">
          {[
           {name: "Blogs", path:"/blogs" },
             {name: "Create", path:"/create"},
             {name:"About" , path: "/about"},
             {name: "Services", path:"/services"}
            ].map((a, i) => (
            <p className="linksItem" key={i}>
              <NavLink to={a.path}>{a.name}</NavLink>
            </p>
          ))}
        </div>
        <div className="user">
          {[{name:"Contact Us", path:"/contactus"}].map((a, i) => (
            <p className="userBtn" key={i}>
              <NavLink to={a.path}>{a.name}</NavLink>
            </p>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
