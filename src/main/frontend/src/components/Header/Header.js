import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand as={Link} to="/">그대로</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/join">회원가입</Nav.Link>  {/* 회원가입 링크 */}
                    <Nav.Link href="#pricing">Cart</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;