import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function Project(props) {

  // import the information for the current project sent down
  const currentProject = useState(props)[0].projects;

  const name = currentProject.name;
  const description = currentProject.description;
  const image = currentProject.image;
  const appLink = currentProject.deployed;
  const gitLink = currentProject.github;

  return (
        <Card style={{ width: "18rem" }}>
            <Card.Img
                variant="top"
                src={require(`../../assets/images/${image}`)}
                className="card-image"
            />
            <div className="center">
                <Card.Body className="card-body">
                    <Card.Title className="card-title">{name}</Card.Title>
                    <Card.Text className="card-text">{description}</Card.Text>

                    <Card.Link href={appLink} target="_blank" className="card-link">
                    {name} App
                    </Card.Link>
                    <br></br>
                    <Card.Link href={gitLink} target="_blank" className="card-link">
                    {name} GitHub
                    </Card.Link>
                </Card.Body>
            </div>
        </Card>
  );
}

export default Project;
