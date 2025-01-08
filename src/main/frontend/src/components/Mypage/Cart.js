import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CartList from './CartList';
import CartAmount from './CartAmount';
import DefaultImg from "../../assets/default.jpg";

function Cart () {
    const [items, setItems] = useState([
        {
            id: 1,
            name: '달달하고 맛있는 사과',
            price: 20000,
            quantity: 1,
            image: DefaultImg,
            option: '옵션 1',
        },
        {
            id: 2,
            name: '유기농 쌀',
            price: 15000,
            quantity: 2,
            image: DefaultImg,
            option: '옵션 2',
        },
    ]);

    const handleQuantityChange = (id, newQuantity) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const handleDelete = (id) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const totalItems = items.length;
    const shipping = 0;
    const discount = 14000;

    return (
        <Container>
            <Row className="mt-4">
                <Col md={8}>
                    <CartList
                        items={items}
                        onQuantityChange={handleQuantityChange}
                        onDelete={handleDelete}
                    />
                </Col>
                <Col md={4}>
                    <CartAmount
                        totalItems={totalItems}
                        totalPrice={totalPrice}
                        discount={discount}
                        shipping={shipping}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Cart;