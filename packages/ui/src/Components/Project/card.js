import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./main.scss";
// import Swipperwi from 'swiper';

export function ProjectCard(props) {
  const {
    id,
    name,
    photoURL,
    statement,
    implementer,
    region,
    sdgs,
    budget,
    duration,
    revenueModality
  } = props.info;

  return (
    // <Card style={{ width: "18rem" }}>
    //   <Card.Header as="h5">{name}</Card.Header>
    //   <Card.Img variant="top" src={photoURL} />
    //   <ListGroup classNameNameNameName="list-group-flush">
    //     <ListGroupItem>{statement}</ListGroupItem>
    //     <ListGroupItem>Implementer: {implementer}</ListGroupItem>
    //     <ListGroupItem>Region: {region}</ListGroupItem>
    //     <ListGroupItem>Sdgs: {sdgs}</ListGroupItem>
    //     <ListGroupItem>Budget: {budget}</ListGroupItem>
    //     <ListGroupItem>Duration: {duration}</ListGroupItem>
    //     <ListGroupItem>RevenueModality: {revenueModality}</ListGroupItem>
    //   </ListGroup>
    //   <Card.Footer>
    //     <Link to={{
    //       pathname: `/details/${id}`,
    //       query: {
    //         test: 'test'
    //       }
    //     }}>
    //       <Button variant="primary">View</Button>
    //     </Link>
    //   </Card.Footer>
    // </Card>
    <Fragment>
      <div className="blog-slider">
        <div className="blog-slider__wrp swiper-wrapper">
          <div className="blog-slider__item swiper-slide">
            <div className="blog-slider__img">
              <img src={photoURL} alt="" />
            </div>
            <div className="blog-slider__content">
              <Row className="blog-slider__title">
                <span className="blog-slider__title">{name}</span>
              </Row>
              <br></br>
              <Row className="blog-slider__text">
                <span className="blog-slider__text">{statement} </span>
              </Row>
              <br></br>
              <br></br>
              <Row className="blog-slider__text">
                <Row>
                  <Col xs="4" className="box">
                    <Row className="justify-content-center">
                      <label className="bold" htmlFor="budget">
                        Budget
                      </label>
                    </Row>
                    <Row className="justify-content-center">
                      <span className="blog-slider__text" id="budget">
                        {budget}${" "}
                      </span>
                    </Row>
                  </Col>
                  <Col xs="4" className="box">
                    <Row className="justify-content-center">
                      <label className="bold" htmlFor="budget">
                        SDGs
                      </label>
                    </Row>
                    <Row className="justify-content-center">
                      <span className="blog-slider__text" id="budget">
                        {sdgs}{" "}
                      </span>
                    </Row>
                  </Col>
                  <Col xs="4" className="box">
                    <Row className="justify-content-center">
                      <label className="bold" htmlFor="budget">
                        Duration
                      </label>
                    </Row>
                    <Row className="justify-content-center">
                      <span className="blog-slider__text" id="budget">
                        {duration}{" "}
                      </span>
                    </Row>
                  </Col>
                </Row>
              </Row>
              <Row className="blog-slider__text">
                <Row>
                  <Col xs="6" className="box">
                    <Row className="justify-content-center">
                      <label className="bold" htmlFor="budget">
                        Region
                      </label>
                    </Row>
                    <Row className="justify-content-center">
                      <span className="blog-slider__text" id="budget">
                        {region}{" "}
                      </span>
                    </Row>
                  </Col>
                  <Col xs="6" className="box">
                    <Row className="justify-content-center">
                      <label className="bold" htmlFor="budget">
                        Revenue
                      </label>
                    </Row>
                    <Row className="justify-content-center">
                      <span className="blog-slider__text" id="budget">
                        {revenueModality}{" "}
                      </span>
                    </Row>
                  </Col>
                </Row>
              </Row>
            </div>
          </div>
        </div>
        <div className="blog-slider__pagination"></div>
        <Row className="blog-slider__text">
          <Row className="justify-content-end">
            <Link
              to={{
                pathname: `/details/${id}`,
                query: {
                  test: "test"
                }
              }}
            >
              <a href="#" className="blog-slider__button bold">
                READ MORE
              </a>
            </Link>
          </Row>
        </Row>
      </div>
    </Fragment>
  );
}
