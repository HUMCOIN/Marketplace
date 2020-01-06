import React from "react";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";

function NavigationBar() {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="/">
        <img src="/assets/images/humcoin-logo.png" height="50" alt="Humcoin logo" />
        {/* Turning decisions and investment into impact */}
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/login">Register/Login</Nav.Link>
        <Nav.Link href="/new">Create new project</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-primary">Search</Button>
      </Form>
    </Navbar>
  );
}

export default NavigationBar;
