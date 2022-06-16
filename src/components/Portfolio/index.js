import React from "react";
import Project from "../Project";

function Portfolio() {
  // storing all the projects I've done in JSON objects
  const projects = [
    {
      name: "It Takes A City",
      description: "An application that provides information for people in need of resources (e.g. food, shelters, etc.).",
      image:"ItTakesACity-Screenshot2.png",
      technologies: [
        "HTML/CSS",
        "JavaScript",
        "Express.js",
        "MySQL2",
        "dotenv",
        "Tailwind",
        "Auth0",
        "EJS",
        "Heroku"
      ],
      github: "https://github.com/cwarmbrunn/it-takes-a-city",
      deployed: "https://it-takes-a-city.herokuapp.com/",
    },
    {
      name: "Social Network App Pro",
      description: "This application is an API that uses MongoDB and Mongoose to perform CRUD operations for a social network.",
      image: "ItTakesACity-Screenshot2.png",
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
    },
    {
      name: "Tech Blog Pro",
      description: "This application is a website used for tech bloggers to write and read about technical concepts, recent advancements, and new technologies.",
      image: "ItTakesACity-Screenshot2.png",
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
        "dotenv package",
        "Heroku"
      ],
      github: "https://github.com/MariskaZeta/tech-blog-pro",
      deployed: "https://tech-blog-pro-mvc.herokuapp.com/",
    },
    {
      name: "e-commerce company back-end",
      description: "This application is the back-end of an e-commerce site. Using an Express.js API that uses Sequelize to interact with the data inside of the MySQL database.",
      image: "ItTakesACity-Screenshot2.png",
      technologies: [
        "Express",
        "MySQL2",
        "Sequelize",
        "Node.js",
        "Insomnia",
        "dotenv",
        "Npm"
      ],
      github: "https://github.com/MariskaZeta/e-commerce-company-back-end",
    },
    {
      name: "Note Taker Pro",
      description: "This application can be used to write, save, and delete notes. It uses an Express.js back end and it saves and retrieves note data from a JSON file.",
      image: "ItTakesACity-Screenshot2.png",
      technologies: [
        "HTML/CSS",
        "JavaScript",
        "Node.js",
        "Express.js",
        "Bootstrap",
        "Heroku"
      ],
      github: "https://github.com/MariskaZeta/note-taker-pro",
      deployed: "https://thawing-forest-88059.herokuapp.com/",
    },
    {
      name: "Auto Dev Team Profiler",
      description: "This application is a back end application using Node.js. It uses the inquirer npm package to get the user input to dynamically create a team profile. Users will go through questions about the type of employee that will be added to the team.",
      image: "ItTakesACity-Screenshot2.png",
      technologies: [
        "HTML/CSS",
        "JavaScript",
        "Node.js",
        "Jest",
        "Inquirer npm package"
      ],
      github: "https://github.com/MariskaZeta/auto-dev-team-profiler",
    },
  ];

  return (
    <section>
        <div className="center">
            <h1 className="page-header">My Portfolio</h1>
        </div>
        <div>
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
