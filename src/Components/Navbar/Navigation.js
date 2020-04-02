import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

function Navigation() {

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home" className="logo">СеМиСеЈаде.мк</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#Restaurants">Restaurants</Nav.Link>
                    <Nav.Link href="#About">About</Nav.Link>
                    <Nav.Link href="#Contact">Contact</Nav.Link>
                </Nav>
                <Form inline className="mr-auto">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search Food</Button>
                </Form>
                <Nav>
                    <Nav.Link href="#logIn">Log In</Nav.Link>
                    <Nav.Link eventKey={2} href="#register">Register</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}


export default Navigation;