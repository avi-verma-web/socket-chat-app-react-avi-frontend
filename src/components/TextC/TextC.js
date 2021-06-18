import React from "react";

import "./TextC.css";

const TextC = ({ users }) => {
  return (
    <div className="textContainer">
      <div>
        <h1>
          Chat Application{" "}
          <span role="img" aria-label="emoji">
            💬
          </span>
        </h1>
        <h2>Created with React, Express, Node and Socket.IO </h2>
        <h2>Author @ Avinash Verma </h2>
        <div className="linksSocial">
          <a href="https://www.linkedin.com/in/avinash-verma-ab0021b5/">
            Linkedin
          </a>
          <a href="https://github.com/avi-verma-web">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default TextC;
