import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

const About: React.FC = () => (
  <body>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>ATS🦧</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="./home">Home</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    <Jumbotron fluid>
      <Container>
        <h1>About Page</h1>
        <h3> this is a work in progress react application for Apes Together Strong
          <span role="img" aria-labelledby="monkey1">🐒</span>
Community</h3>
      </Container>
    </Jumbotron>
  </body>
);

export default About;
