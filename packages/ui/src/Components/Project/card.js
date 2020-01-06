import React from "react";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

export function ProjectCard(props) {
  const { id, name, photoURL, statement, implementer, region, sdgs, budget, duration, revenueModality } = props.info;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header as="h5">{name}</Card.Header>
      <Card.Img variant="top" src={photoURL} />
      <ListGroup className="list-group-flush">
        <ListGroupItem>{statement}</ListGroupItem>
        <ListGroupItem>Implementer: {implementer}</ListGroupItem>
        <ListGroupItem>Region: {region}</ListGroupItem>
        <ListGroupItem>Sdgs: {sdgs}</ListGroupItem>
        <ListGroupItem>Budget: {budget}</ListGroupItem>
        <ListGroupItem>Duration: {duration}</ListGroupItem>
        <ListGroupItem>RevenueModality: {revenueModality}</ListGroupItem>
      </ListGroup>
      <Card.Footer>
        <Link to={{
          pathname: `/details/${id}`,
          query: {
            test: 'test'
          }
        }}>
          <Button variant="primary">View</Button>
        </Link>
      </Card.Footer>
    </Card>
  );
}
