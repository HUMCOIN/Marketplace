import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { ProjectCard } from "../Project";
// Projects Mock Data
import { mockProjects } from "../../data/projects.data";

export function HomePage() {
  const [ projects, setProjects ] = useState([])

  useEffect(() => {
    setProjects(mockProjects)
  }, [projects])

  return (
    <Container>
      <Row>
        {projects.map(project => (
          <Col key={project.id}>
            <ProjectCard info={project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
