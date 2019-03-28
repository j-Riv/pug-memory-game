import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './style.css';

class ImgCard extends React.Component {
    render() {
        return (
            <Col xs={6} sm={6} md={3} lg={3} className="card-wrapper">
                <Card onClick={() => this.props.onSelect()}>
                    <Card.Body>
                        <img className="w-100" src={`.${this.props.img.src}`} alt={`Henry-${this.props.img.id}`} />
                    </Card.Body>
                </Card>
            </Col>
        );
    }
}

export default ImgCard;
