import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" data-bs-theme="light" id="custom-navbar">
            <Container>
                <Navbar.Brand as={Link} to="/">그대로</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="ms-auto">
                        <Nav.Link href="#store" className="nav-link-right">입점신청</Nav.Link>
                        <Nav.Link as={Link} to="/login" className="nav-link-right">로그인</Nav.Link>
                        <Nav.Link as={Link} to="/join" className="nav-link-right">회원가입</Nav.Link>
                        <Nav.Link href="#cs" className="nav-link-right">고객센터</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
};

export default Header;