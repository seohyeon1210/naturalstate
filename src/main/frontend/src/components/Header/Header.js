import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Header.css";

const Header = ({ isLoggedIn, onLogout }) => {
    return (
        <Navbar bg="light" expand="lg" id="custom-navbar">
            <Container>
                <Navbar.Brand as={Link} to="/">그대로</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/cart" className="nav-link-right-icons">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi-basket3"
                                 viewBox="0 0 16 16">
                                <path
                                    d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6z"/>
                            </svg>
                        </Nav.Link>
                        {isLoggedIn ? (
                            <Nav.Link onClick={onLogout} className="nav-link-right">로그아웃</Nav.Link>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/login" className="nav-link-right">로그인</Nav.Link>
                                <Nav.Link as={Link} to="/join" className="nav-link-right">회원가입</Nav.Link>
                                <Nav.Link as={Link} to="/mypage" className="nav-link-right">마이페이지</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
