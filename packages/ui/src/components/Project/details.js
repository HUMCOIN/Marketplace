import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import {
  Carousel,
  Container,
  Badge,
  Row,
  Col,
  Jumbotron
} from "react-bootstrap";

import { mockProjects } from "../../data/projects.data";
import { sdgs } from "../../data/sdgs.data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyCheckAlt } from "@fortawesome/free-solid-svg-icons";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";

import "./main.scss";

export function Details() {
  const { hash } = useRouteMatch().params;
  // this is going to be changed - we are going to retrieve the
  // project information from a store - or a get call to ipfs
  const project = mockProjects.filter(p => p.id == hash).pop();

  const style = {
    backgroundImage: `url(${project.photoURL})`,
    backgroundRepeat: "space",
    backgroundPositionX: "center"
  };
  console.log(project);
  return (
    <>
      {/* <Jumbotron className="jumbotron" fluid>
        <Container>
          <Row className="justify-content-center">
            <h1>{project.name}</h1>
          </Row>
          <Row className="justify-content-center">
            <p>
              {project.statement}
            </p>
          </Row>
        </Container>
      </Jumbotron> */}
      <Row className="detail">
        <Col xs="5">
          <Jumbotron fluid style={style}>
            <Container className="titleDetail">
              <h1 className="bold">{project.name}</h1>
              <p className="regular">{project.statement}</p>
            </Container>
          </Jumbotron>
        </Col>
        <Col xs="7">
          <Container className="detailMargin">
            <Row className="marginRow">
              <Col xs="4">
                <Row className="justify-content-center">
                  <label className="bold">Budget</label>
                </Row>
                <Row className="justify-content-center">
                  <span className="icon">
                    <FontAwesomeIcon
                      icon={faMoneyCheckAlt}
                      size="5x"
                      className="icon"
                    />
                  </span>
                </Row>
                <Row className="justify-content-center marginTopRow">
                  <h5 className="regular">${project.budget}</h5>
                </Row>
              </Col>
              <Col xs="4">
                <Row className="justify-content-center">
                  <label className="bold">Implementer</label>
                </Row>
                <Row className="justify-content-center">
                  <span className="icon">
                    <FontAwesomeIcon
                      icon={faUserTie}
                      size="5x"
                      className="icon"
                    />
                  </span>
                </Row>
                <Row className="justify-content-center marginTopRow">
                  <h5 className="regular">{project.implementer}</h5>
                </Row>
              </Col>
              <Col xs="4">
                <Row className="justify-content-center">
                  <label className="bold">Duration</label>
                </Row>
                <Row className="justify-content-center">
                  <span className="icon">
                    <FontAwesomeIcon
                      icon={faStopwatch}
                      size="5x"
                      className="icon"
                    />
                  </span>
                </Row>
                <Row className="justify-content-center marginTopRow">
                  <h5 className="regular">{project.duration} days</h5>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col xs="4">
                <Row className="justify-content-center">
                  <label className="bold">Investment Type</label>
                </Row>
                <Row className="justify-content-center">
                  <span className="icon">
                    <FontAwesomeIcon
                      icon={faReceipt}
                      size="5x"
                      className="icon"
                    />
                  </span>
                </Row>
                <Row className="justify-content-center marginTopRow">
                  <h5 className="regular">{project.revenueModality}</h5>
                </Row>
              </Col>
              <Col xs="4">
                <Row className="justify-content-center">
                  <label className="bold">Location</label>
                </Row>
                <Row className="justify-content-center">
                  <span className="icon">
                    <FontAwesomeIcon
                      icon={faGlobeAmericas}
                      size="5x"
                      className="icon"
                    />
                  </span>
                </Row>
                <Row className="justify-content-center marginTopRow">
                  <h5 className="regular">{project.region}</h5>
                </Row>
              </Col>
              <Col xs="4">
                <Row className="justify-content-center">
                  <label className="bold">SGDs</label>
                </Row>
                <Row className="justify-content-center">
                  <span className="icon">
                    <FontAwesomeIcon
                      icon={faLayerGroup}
                      size="5x"
                      className="icon"
                    />
                  </span>
                </Row>
                <Row className="justify-content-center marginTopRow">
                  <h5 className="regular">{project.sdgs}</h5>
                </Row>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      {/* <Carousel>
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
    </Carousel> */}

      {/* <div className="detail" style={style}>

      </div>
      <div className="parallax"></div>

      <div className="detail">
        Scroll Up and Down this page to see the parallax scrolling effect.
        This div is just here to enable scrolling.
        Tip: Try to remove the background-attachment property to remove the scrolling effect.
</div>

      <div className="parallax"></div> */}

      {/* /* <Container>
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
      {project.sdgs.map(sdg => (
        <Badge variant="dark">{sdgs[sdg]}</Badge>
      ))}
    </Container>  */}
    </>
  );
}
