import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './style.css';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {
  render() {
    return (
      <Navbar bg="white" expand="lg" className="nav-home">
        <Container>
          <Navbar.Brand href="/">
            <img src="./images/henry-logo-white.png" alt="Henry the Pug" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <i className="fas fa-bars text-white"></i>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavLink
                to="/"
                activeStyle={{
                  fontWeight: "bold",
                  color: "White"
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="/game"
                activeStyle={{
                  fontWeight: "bold",
                  color: "White"
                }}
              >
                Game
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;
