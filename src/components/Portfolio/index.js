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
      name: "Social Network App Pro",
      description: "This application is an API that uses MongoDB and Mongoose to perform CRUD operations for a social network.",
      image: ,
      technologies: [
        "JavaScript",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "npm",
        "Node.js",
        "Insomnia"
      ],
      github: "https://github.com/MariskaZeta/social-network-app-pro",
      deployed:
    },
    {
      name: "Tech Blog Pro",
      description: "This application is a website used for tech bloggers to write and read about technical concepts, recent advancements, and new technologies.",
      image: ,
      technologies: [
        "HTML/CSS",
        "JavaScript",
        "Node.js",
        "MySQL2 package",
        "Sequelize package",
        "Express",
        "Express-handlebars package",
        "bcrypt package",
        "express-session package",
        "connect-session package",
        "dotenv package"
      ],
      github: "https://github.com/MariskaZeta/tech-blog-pro",
      deployed: "https://tech-blog-pro-mvc.herokuapp.com/"
    }
  ];
  
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
