import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Iframe from 'react-iframe'

const Home: React.FC = () => (
  <body>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>ATS🦧</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="./about">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Jumbotron fluid>
      <Container>
        <h5>Welcome to Apes Together Strong!</h5>
        <Iframe url="https://www.lexaloffle.com/bbs/widget.php?pid=picodino"
          width="420" 
          height="400"
          display="inline"
          overflow = "hidden"
          position="relative"
          allowFullScreen />
        <a href="https://www.lexaloffle.com/bbs/?tid=40759">Game by Yolwoocle</a>
      </Container>
    </Jumbotron>
  </body>

);

export default Home;
