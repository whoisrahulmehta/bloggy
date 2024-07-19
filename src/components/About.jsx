import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Footer from "./Footer";
import Frame from "./Frame";

function About() {
  return (
    <div className="About">
      <Navbar />
      <section className="heading">
        <p>Bloggy </p>
        <p>A Marketplace</p>
        <p>Known For Quality</p>
      </section>
      <section className="intro">
        {[
          "About Our Team",
          "At Bloggy, we are a passionate team of writers, editors, and tech enthusiasts dedicated to bringing you the best handpicked blogs from around the world. Our mission is to curate a diverse array of high-quality content that caters to your unique" +
            " interests and preferences. With a deep commitment to excellence and a love for storytelling, we work tirelessly to ensure that every piece of content you discover on Bloggy is insightful, engaging, and relevant." +
            " Join us on this journey as we explore the world's most captivating stories and ideas together.",
        ].map((a, i) => (
          <p className="Aasec" key={i}>
            {a}
          </p>
        ))}
      </section>
      <section className="image">
        <div className="cardimg">BLOGGY</div>
      </section>
      <div className="mq">
        <marquee>
          We here Showcase The Best Stories Of The World The best Blogs At One
          Place
        </marquee>
      </div>
      <h1>
        We share latest Blogs from around the worl, piled up into this website
        for you, So you don't have to wander here and there.
      </h1>
      <section className="sldier">
        <Card />
      </section>
      <div className="slidetext">
        {[
          {
            member: "Alice Johnson",
            thought:
              "Working at Bloggy has been an incredible journey. I love being able to share amazing stories from around the world with our readers.",
          },
          {
            member: "Bob Smith",
            thought:
              "Curating content for Bloggy is a rewarding experience. It's exciting to see how our diverse topics resonate with our audience.",
          },
          {
            member: "Carla Brown",
            thought:
              "At Bloggy, we strive for excellence in every article we publish. It feels great to be part of a team that values quality and creativity.",
          },
          {
            member: "David Wilson",
            thought:
              "Being a part of Bloggy allows me to explore and share my passions with a global audience. It's a fulfilling and inspiring role.",
          },
          {
            member: "Evelyn Davis",
            thought:
              "I am proud to be part of a team that is dedicated to delivering top-notch content. Bloggy is not just a job, it's a community.",
          },
        ].map((a, i) => (
          <div className="pa" key={i}>
            <p>{a.thought}</p>
            <p>{a.member}</p>
          </div>
        ))}
      </div>
      <section className="slidingpara">
        <Frame />
      </section>
      <Footer />
    </div>
  );
}

export default About;
