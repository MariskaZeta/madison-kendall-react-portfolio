import React from "react";

function About() {
  return (
    <section>
       <div id="about">
          <h1 className="page-header">About Me</h1>
       </div>
       <div className="center">
          <img
             src={require("../../assets/images/Madison.JPG")}
             alt="about-me-photo"
             className="photo"
          />
      </div>
      <div>
         <p>
            Hi! Welcome to my portfolio!
             I am a full stack web developer based in Denver, Colorado.
             I love minimal design. I love running, singing, and golfing in my free time.
         </p>
      </div>
    </section>
  );
}

export default About;
