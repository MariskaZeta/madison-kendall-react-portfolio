import React from "react";
import Project from "../Project";

function Portfolio() {
  // storing all the projects I've done in JSON objects
  const projects = [
    {
      name: "It Takes A City Too",
      description: "An application that provides information for people in need of resources (e.g. food, shelters, etc.).",
      image:"it-takes-a-city-too-screenshot.png",
      github: "https://github.com/cwarmbrunn/it-takes-a-city-too",
      deployed: "http://it-takes-a-city-to.herokuapp.com/",
    },
    {
      name: "What's For Dinner",
      description: "A user friendly application that allows users to find out what to eat and drink for dinner.",
      image: "whats-for-dinner-screenshot.png",
      github: "https://github.com/marathonsandsushi/whatsForDinner",
      deployed: "https://marathonsandsushi.github.io/whatsForDinner/",
    },
    {
      name: "Tech Blog Pro",
      description: "This is a website used for tech bloggers to write and read about technical concepts, recent advancements, and new technologies.",
      image: "tech-blog-pro-screenshot.png",
      github: "https://github.com/MariskaZeta/tech-blog-pro",
      deployed: "https://tech-blog-pro-mvc.herokuapp.com/",
    },
    {
      name: "Password Generator",
      description: "This is a web-application which creates a randomly generated password.",
      image: "password-gen-screenshot.png",
      github: "https://github.com/marathonsandsushi/password-generator",
      deployed: "https://marathonsandsushi.github.io/password-generator/",
    },
    {
      name: "Note Taker Pro",
      description: "This app can be used to write, save, and delete notes. It uses an Express.js back end, and saves and retrieves note data from a JSON file.",
      image: "note-taker-pro-screenshot.png",
      github: "https://github.com/MariskaZeta/note-taker-pro",
      deployed: "https://thawing-forest-88059.herokuapp.com/",
    },
    {
      name: "Weather Forecast Dashboard",
      description: "Users can search for the weather forecast for a city. It will show the weather for the current and for the next upcoming five days.",
      image: "weather-forecast-dashboard-screenshot.png",
      github: "https://github.com/marathonsandsushi/weather-forecast-dashboard",
      deployed: "https://marathonsandsushi.github.io/weather-forecast-dashboard/",
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
