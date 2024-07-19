import React, { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Home from "./components/Home";
import { HashRouter, Route, Routes, useParams } from "react-router-dom";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Create from "./components/Create";
import Services from "./components/Services";
import Contactus from "./components/Contactus";
import Readmore from "./components/Readmore";

import LocomotiveScroll from "locomotive-scroll";
import Errorpage from "./components/Errorpage";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);
  // const id = useParams();

  return (
    <>
      {" "}
      <HashRouter>
        {loading ? (
          <Loading />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/create" element={<Create />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path={`/blogs/:id`} element={<Readmore />} />

            <Route path="/*" element={<Errorpage />} />
          </Routes>
        )}
      </HashRouter>
    </>
  );
}

export default App;
