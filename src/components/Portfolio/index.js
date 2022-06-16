import React from "react";
import Project from "../Project";

function Portfolio() {
  // storing all the projects I've done in JSON objects
  const projects = [
    {
      name: "It Takes a City",
      description: "This application was created to..",
      image: ,
      technologies: [
        "HTML/CSS",
        "JavaScript",
        "Express.js",
        "MySQL2",
        "dotenv",
        "Tailwind",
        "Auth0",
        "EJS"
      ],
      github: "https://github.com/cwarmbrunn/it-takes-a-city",
      deployed: "https://it-takes-a-city.herokuapp.com/"
    },
    {
      name: "It Takes a City",
      description: "This application was created to..",
      image: ,
      technologies: [
        "HTML/CSS",
        "JavaScript",
        "Express.js",
        "MySQL2",
        "dotenv",
        "Tailwind",
        "Auth0",
        "EJS"
      ],
      github: "https://github.com/cwarmbrunn/it-takes-a-city",
      deployed: "https://it-takes-a-city.herokuapp.com/"
    },
    {
      name: "It Takes a City",
      description: "This application was created to..",
      image: ,
      technologies: [
        "HTML/CSS",
        "JavaScript",
        "Express.js",
        "MySQL2",
        "dotenv",
        "Tailwind",
        "Auth0",
        "EJS"
      ],
      github: "https://github.com/cwarmbrunn/it-takes-a-city",
      deployed: "https://it-takes-a-city.herokuapp.com/"
    },
  ]
  return (
    <section>
        <div className="center">
            <h1 className="page-header">My Portfolio</h1>
        </div>
            <ul className="flex-row mobile-row">
                <li className="padding">
                     <Project projects={projects[0]}></Project>
                </li>
                <li className="padding">
                    <Project projects={projects[1]}></Project>
                </li>
            </ul>
            <ul className="flex-row mobile-row">
                <li className="padding">
                    <Project projects={projects[2]}></Project>
                </li>
                <li className="padding">
                    <Project projects={projects[3]}></Project>
                </li>
            </ul>
            <ul className="flex-row mobile-row">
                <li className="padding">
                    <Project projects={projects[4]}></Project>
                </li>
                <li className="padding">
                    <Project projects={projects[5]}></Project>
                </li>
            </ul>
        </div>
    </section>
  );
}

export default Portfolio;
