import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Footer from "./Footer";
import Frame from "./Frame";

function About() {
  return (
    <div className="About">
      <Navbar />
      <section className="heading ">
        <p className="sm:text-[6rem] text-[4rem] ">Bloggy </p>
        <p className="sm:text-[6rem] text-[2.5rem] ">A Marketplace</p>
        <p className="sm:text-[6rem] text-[2.5rem] ">Known For Quality</p>
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
      <section className="w-full  flex flex-col items-center justify-start order-3 px-4">
        <span>About Bloggy </span>
        Welcome to Bloggy, your ultimate destination for insightful, inspiring,
        and engaging content on a wide range of topics. At Bloggy, we believe in
        the power of words and the magic they can create when shared
        thoughtfully and passionately. Our mission is to foster a community
        where knowledge, ideas, and experiences are exchanged freely, creating a
        space that is as informative as it is captivating.
        <span>Our Vision</span>
        Bloggy was born from a desire to create a platform that celebrates the
        diversity of human thought and expression. We envision a world where
        everyone has a voice and the ability to share their unique perspective.
        Whether it's the latest trends in technology, timeless travel tales,
        in-depth analyses of current events, or heartfelt personal stories,
        Bloggy is here to connect readers and writers through the beauty of the
        written word. Our Content At Bloggy, we are committed to delivering
        high-quality, well-researched, and engaging content across various
        genres. Our team of dedicated writers and contributors bring their
        expertise and passion to every article, ensuring that our readers always
        find something of value. Here's a glimpse of what you can expect:
        <span>Technology:</span> Stay updated with the latest advancements and
        trends in the tech world. From AI breakthroughs to gadget reviews, we
        cover it all. Travel: Explore new destinations and cultures through our
        travel stories and guides. Whether you're a seasoned traveler or
        planning your first adventure, you'll find inspiration and practical
        tips here. Lifestyle: Dive into articles that enhance your day-to-day
        living. From wellness tips and recipes to fashion advice and home decor
        ideas, we aim to enrich your lifestyle. <span> Current Events:</span>{" "}
        Get insightful analyses and opinions on the latest happenings around the
        world. We strive to provide balanced perspectives on the issues that
        matter most. Personal Stories: Read heartfelt narratives and experiences
        shared by our diverse community of writers. These stories aim to
        connect, inspire, and resonate on a personal level.{" "}
        <span>Our Community</span> Bloggy is more than just a blog; it's a
        community of curious minds and passionate individuals. We encourage our
        readers to engage with our content, share their thoughts, and contribute
        their own stories. Your voice matters to us, and we believe that every
        story has the power to inspire and create change. Join Us Whether you're
        here to read, learn, or share, Bloggy welcomes you with open arms.
        Subscribe to our newsletter to stay updated on the latest posts, follow
        us on social media to join the conversation, and don't hesitate to reach
        out if you have something to share. Thank you for being a part of
        Bloggy. Together, let's explore the world through words and celebrate
        the endless possibilities they bring.
      </section>
      <Card />
      <Frame />
      <Footer />
    </div>
  );
}

export default About;
