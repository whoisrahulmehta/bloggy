import React from 'react'

function Social() {
  return (
    <>
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
            <a href="#" key={i}>
              {a.name} {a.icon}
            </a>
          ))}
    </>
  )
}

export default Social
