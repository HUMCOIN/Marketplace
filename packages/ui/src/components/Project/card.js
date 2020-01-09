import React, { Fragment } from "react";
import { Col, Row, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

import { sdgs } from "../../data/sdgs.data";
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
    sdgs: projectSdgs,
    budget,
    duration,
    revenueModality
  } = props.info;

  return (
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
                <span className="blog-slider__text">
                  Implementer: {implementer}{" "}
                </span>
              </Row>
              <br></br>
              <Row className="blog-slider__text">
                <span className="blog-slider__text">{statement}</span>
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
                        ${budget}{" "}
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
                        {
                          // TODO: These sdg names must fit inside card space
                          //projectSdgs.map(sdg => <Badge>{sdgs[sdg]}</Badge>)
                        }
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
                        Location
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
                        Investment Type
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
              <p href="#" className="blog-slider__button bold">
                READ MORE
              </p>
            </Link>
          </Row>
        </Row>
      </div>
    </Fragment>
  );
}
