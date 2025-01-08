import React from "react";
import { Row, Col, Image, Form, Button, Card } from "react-bootstrap";
import "./CartList.css";

const CartList = ({ items, onQuantityChange, onDelete }) => {
    return (
        <Card className="p-3 cart-list">
            <Row className="mb-2 align-items-center">
                <Col xs={1}>
                    <Form.Check type="checkbox" />
                </Col>
                <Col>모두선택</Col>
            </Row>
            {items.map((item) => (
                <Card key={item.id} className="mb-3 shadow-sm cart-item position-relative">
                    <Button
                        variant="light"
                        className="delete-btn"
                        size="sm"
                        onClick={() => onDelete(item.id)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </Button>
                    <Row className="align-items-center">
                        <Col xs={1} className="text-center">
                            <Form.Check type="checkbox" />
                        </Col>
                        <Col xs={2}>
                            <Image src={item.image} alt={item.name} fluid rounded />
                        </Col>
                        <Col xs={6}>
                            <h6 className="item-name">{item.name}</h6>
                            <p className="text-muted small">{item.option}</p>
                            <p className="text-info small">무료배송 | 일반배송</p>
                        </Col>
                        <Col xs={3}>
                            <div className="quantity-controls">
                                <Button
                                    variant="outline-secondary"
                                    size="sm"
                                    onClick={() =>
                                        onQuantityChange(item.id, Math.max(1, item.quantity - 1))
                                    }
                                >
                                    -
                                </Button>
                                <Form.Control
                                    type="number"
                                    value={item.quantity}
                                    size="sm"
                                    className="mx-2 text-center"
                                    onChange={(e) =>
                                        onQuantityChange(item.id, Math.max(1, +e.target.value))
                                    }
                                    style={{ width: "60px" }}
                                />
                                <Button
                                    variant="outline-secondary"
                                    size="sm"
                                    onClick={() =>
                                        onQuantityChange(item.id, item.quantity + 1)
                                    }
                                >
                                    +
                                </Button>
                            </div>
                            <p className="fw-bold mt-2">{(item.price * item.quantity).toLocaleString()}원</p>
                        </Col>
                    </Row>
                </Card>
            ))}
        </Card>
    );
};

export default CartList;
