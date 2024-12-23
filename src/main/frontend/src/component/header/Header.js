import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";

const Header = () => {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home">그대로</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Cart</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;