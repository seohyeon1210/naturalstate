import React from 'react';
import Card from 'react-bootstrap/Card';
import MainProductImage from '../../assets/default.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Main() {
    return (
        <Container>
            <Row xs={1} md={3} className="g-3">
                {Array.from({ length: 3 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src={MainProductImage} />
                            <Card.Body>
                                <Card.Title>상품명</Card.Title>
                                <Card.Text>
                                    상품 가격
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Main;