import React, { useState } from "react";
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';

function NavigationBar() {

    return <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">
            <img
                src="/humcoin-logo.png"
                height="50"
                alt="Humcoin logo"
            />
            Turning decisions and investment into impact
        </Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#Login">Register/Login</Nav.Link>
            <Nav.Link href="#Portofolio">Portofolio</Nav.Link>
            <Nav.Link href="#Search">Search/Filter</Nav.Link>
            <Nav.Link href="#Mission">Mission</Nav.Link>
            <Nav.Link href="#Team">Team</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
        </Form>
    </Navbar>

}

export default NavigationBar;