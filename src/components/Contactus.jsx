import React, { useState } from "react";
import Navbar from "./Navbar";

function Contactus() {
  const [result, setResult] = React.useState("");
  const [name , stename] = useState('');
const [sent , setSent] =useState(false)
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e412f675-c579-4e4f-bfcf-b14799096740");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setSent(true);
      setTimeout(()=>setSent(false),4000);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="ContactUs">
  {sent &&     <p className="tip">You Will soon receive a response {name} ! </p>}
      <Navbar />
      <section className="letter">
        <h1>
          Contact Team <b> Bloggy </b>
        </h1>
       <form onSubmit={onSubmit}>

       <p>
          <span>
            Hello my name is{" "}
            <input type="hidden" name="access_key" value="e412f675-c579-4e4f-bfcf-b14799096740"></input>
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Your Name"
              onChange={(e)=>stename(e.target.value)}
            />
            .
          </span>
          <span>
            I belong to{" "}
            <input
              type="text"
              name="state"
              id="state"
              placeholder="Himachal Pradesh"
            />{" "}
            state of{" "}
            <input
              type="text"
              name="country"
              id="country"
              placeholder="India"
            />
            .
          </span>
          <span>
            I am a{" "}
            <input
              type="text"
              name="profession"
              id="profession"
              placeholder="Business Owner"
            />
            .
          </span>
          <span>
            You can contact me at my email :{" "}
            <input
              type="email"
              name="mail"
              id="mail"
              placeholder="bloggy@bloggy.com"
            />
          </span>
          <span>
            Or can directly call me on my phone :{" "}
            <input
              type="phone"
              name="mobile"
              id="mobile"
              placeholder="+91 72788-66777"
            />
            .
          </span>
        </p>
          <button type="submit" onSubmit={onSubmit}>Get A Response</button>
       </form>
        <p>Regards !</p>
        <p>
        </p>
      </section>
    </div>
  );
}

export default Contactus;
