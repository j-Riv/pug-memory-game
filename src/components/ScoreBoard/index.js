import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './style.css';

class ScoreBoard extends React.Component {
    render() {
        return (
            <Navbar bg="black" expand="lg" className={window.location.pathname === "/" ? "nav-home" : "nav-game"}>
                <Container>
                    <Navbar.Brand href="/">
                        <img src="./images/henry-logo-white.png" alt="Henry the Pug" />
                    </Navbar.Brand>
                    <div className="ml-auto text-white">
                        {this.props.children}
                    </div>                    
                </Container>
            </Navbar>
        );
    }
}

export default ScoreBoard;
