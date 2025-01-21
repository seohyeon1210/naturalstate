import Container from 'react-bootstrap/Container';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import React from "react";
import { Link } from "react-router-dom";
import './SecondHeader.css';

function SecondHeader({ userType }) {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">홈</Nav.Link>
                        <Nav.Link as={Link} to="/recommendedproduct">전체</Nav.Link>
                        <NavDropdown title="카테고리" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/products/fruits">과일</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/products/vegetables">채소</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/products/grains">곡물</NavDropdown.Item>
                        </NavDropdown>
                        {userType === "store" && (

                            <Nav.Link as={Link} to="/productwrite">상품 등록</Nav.Link>
                        )}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default SecondHeader;
