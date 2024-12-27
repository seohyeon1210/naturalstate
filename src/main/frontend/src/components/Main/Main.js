import React from 'react';
import Card from 'react-bootstrap/Card';
import MainProductImage from '../../assets/default.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Main() {
    return (
        <Container>
            <Row>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={MainProductImage}/>
                        <Card.Body>
                            <Card.Title>상품명</Card.Title>
                            <Card.Text>
                                상품 가격
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={MainProductImage}/>
                        <Card.Body>
                            <Card.Title>상품명</Card.Title>
                            <Card.Text>
                                상품 가격
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={MainProductImage}/>
                        <Card.Body>
                            <Card.Title>상품명</Card.Title>
                            <Card.Text>
                                상품 가격
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={MainProductImage}/>
                        <Card.Body>
                            <Card.Title>상품명</Card.Title>
                            <Card.Text>
                                상품 가격
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={MainProductImage}/>
                        <Card.Body>
                            <Card.Title>상품명</Card.Title>
                            <Card.Text>
                                상품 가격
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={MainProductImage}/>
                        <Card.Body>
                            <Card.Title>상품명</Card.Title>
                            <Card.Text>
                                상품 가격
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Main;