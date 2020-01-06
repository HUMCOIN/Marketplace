import React, { useEffect, useState } from "react";
import { Container, Col, Row, CardGroup } from "react-bootstrap";
import { ProjectCard } from "../Project";
// Projects Mock Data
import { mockProjects } from "../../data/projects.data";
import "../Project/main.scss";

export function HomePage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(mockProjects);
  }, [projects]);

  return (
    <Container className="containerMargin">
      <CardGroup className="cardGroupMargins">
        {projects.map(project => (
          <div key={project.id}>
            <ProjectCard info={project} />
          </div>
        ))}
      </CardGroup>
    </Container>
  );
}
