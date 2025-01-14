import Container from 'react-bootstrap/Container';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import React from "react";
import { Link } from "react-router-dom";
import './SecondHeader.css';

function SecondHeader(){
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">홈</Nav.Link>
                        <Nav.Link as={Link} to="/recommendedproduct">추천</Nav.Link>
                        <NavDropdown title="카테고리" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/fruitsproduct">과일</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/vegetablesproduct">
                                채소
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/grainsproduct">곡물</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/productwrite">글 쓰기</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default SecondHeader;