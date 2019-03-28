import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
import './style.css';

class ScoreBoard extends React.Component {
    render() {
        return (
            <Navbar bg="black" expand="lg" className="nav-game">
                <Container>
                    <Navbar.Brand>
                        <Link to="/" className="text-white"><img src="./images/henry-logo-white.png" alt="Henry the Pug" /></Link>
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
