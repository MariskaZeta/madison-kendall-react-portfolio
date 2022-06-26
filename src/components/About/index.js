import React from "react";

function About() {
  return (
    <section>
       <div id="about">
          <h1 className="page-header">About Me</h1>
       </div>
       <div className="center">
          <img
             src={require("../../assets/images/MadisonKendall.jpg")}
             alt="about-me-photo"
             className="photo"
          />
      </div>
      <div>
         <p>
            Hi! Welcome to my portfolio!
             I am a full stack software engineer based in Denver, Colorado.
             I love minimal design. I love running, singing, and playing golf in my free time.
         </p>
      </div>
    </section>
  );
}

export default About;
