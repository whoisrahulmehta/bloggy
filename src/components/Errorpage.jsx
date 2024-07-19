import React from "react";
import { Link } from "react-router-dom";

function Errorpage() {
  return (
    <div className="Error">
      <p>OOPSSS ! You were not supossed to be here</p>
      <p>404</p>
      <p>Let's go back home </p>
      <Link to = "/">Back to Home</Link>
    </div>
  );
}

export default Errorpage;
