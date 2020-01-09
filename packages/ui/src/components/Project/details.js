import React from 'react'
import { useRouteMatch, Link } from "react-router-dom";
import { Carousel, Container, Badge, Row, Col } from "react-bootstrap";

import { mockProjects } from "../../data/projects.data";
import { sdgs } from "../../data/sdgs.data";

import "./main.scss";

export function Details() {
  const { hash } = useRouteMatch().params
  // this is going to be changed - we are going to retrieve the
  // project information from a store - or a get call to ipfs
  const project = mockProjects.filter(p => p.id == hash).pop()
  console.log(project)
  return (
    <Container>
      <Container>
        <Row className="justify-content-start titleRow">
          <Col xs="3" className="spanRow">
            <span className="bold fontLarge">{project.name}</span>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={project.photoURL}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container>
        <div className="bold fontLarge">Project Details</div>
        <span className="bold fontLarge">Statement</span>
        <p>{project.statement}</p>
        <span className="bold fontLarge">Location</span>
        <p>{project.region}</p>
        <span className="bold fontLarge">Duration</span>
        <p>{project.duration}</p>
        <span className="bold fontLarge">Budget</span>
        <p>{project.budget} $</p>
        <span className="bold fontLarge">Implementer</span>
        <p>{project.implementer}</p>
        <div className="bold fontLarge">Sustainable Development Goals</div>
        {project.sdgs.map(sdg => <Badge variant="dark">{sdgs[sdg]}</Badge>)}
      </Container>
    </Container>
  )
}