import React from "react";

function Resume() {
  return (
        <section>
            <div className="center">
                <h1 className="page-header">My Resume</h1>
            </div>
            <div>
                 <h5>Front End Proficiencies</h5>
                 <ol>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>HTML5</li>
                    <li>version control/Git</li>
                    <li>responsive design</li>
                 </ol>
                 <br></br>
                 <h5>Back End Proficiencies</h5>
                 <ol>
                     <li>APIs</li>
                     <li>NodeJS</li>
                     <li>Express</li>
                     <li>Model View Controller (MVC)</li>
                     <li>REST</li>
                     <li>Progressive Web Applications (PWA) </li>
                 </ol>
               <br></br>
                 <h5>Database Proficiencies<h5>
                 <ol>
                     <li>MySQL</li>
                     <li>Sequelize</li>
                     <li>NoSQL</li>
                     <li>MongoDB</li>
                     <li>Mongoose</li>
                 </ol>
            </div>
      </section>
  );
}

export default Resume;
