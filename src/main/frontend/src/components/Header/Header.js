import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = ({ isLoggedIn, onLogout }) => {
    return (
        <Navbar bg="light" expand="lg" id="custom-navbar">
            <Container>
                <Navbar.Brand as={Link} to="/">그대로</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/cart" className="nav-link-right">장바구니</Nav.Link>
                        {isLoggedIn ? (
                            <Nav.Link onClick={onLogout} className="nav-link-right">로그아웃</Nav.Link>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/login" className="nav-link-right">로그인</Nav.Link>
                                <Nav.Link as={Link} to="/join" className="nav-link-right">회원가입</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
