import React from "react";
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';

export function ProjectCard(props) {
  const {
    name,
    photoURL,
    statement,
    implementer,
    region,
    sdgs,
    budget,
    duration,
    revenueModality
} = props.info
    console.log(photoURL)
    return (
        <Card style={{ width: '18rem' }}>
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
            <Button variant="primary">View</Button>
            </Card.Footer>
        </Card>
    )
}