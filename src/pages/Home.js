import React from 'react';
import Navigation from '../components/Navigation';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Banner from '../components/Banner';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
                <div className="pb-5">
                    <Banner style={{ backgroundImage: "url(/images/henry-cake-eater.jpg)" }}>
                        <Container>
                            <h1>Henry the Pug</h1>
                            <h6>The more you weigh, the harder you are to kidnap. Stay safe. Eat cake...</h6>
                        </Container>
                    </Banner>
                    <Container>
                        <Row>
                            <Col sm={12} className="text-center">
                                <h1>Memory Game</h1>
                                <p><b>Rules: </b>Click on an image to earn points, but don't click on any more than once!</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} className="text-center">
                                <Button variant="secondary"><Link to="/game" className="text-white">Play</Link></Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    };
}

export default Home;