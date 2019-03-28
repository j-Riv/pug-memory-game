import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './style.css';

class Navigation extends React.Component {
  render() {
    return (
      <Navbar bg="white" expand="lg" className={window.location.pathname === "/" ? "nav-home" : "nav-game"}>
        <Container>
          <Navbar.Brand href="/">
            <img src="./images/henry-logo-white.png" alt="Henry the Pug" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <i className="fas fa-bars text-white"></i>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link
                href="/"
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
              >
                Home
            </Nav.Link>
              <Nav.Link
                href="/game"
                className={window.location.pathname === "/game" ? "nav-link active" : "nav-link"}
              >
                Game
            </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;
