import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function SecondHeader(){
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">홈</Nav.Link>
                        <Nav.Link href="#link">추천</Nav.Link>
                        <NavDropdown title="카테고리" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">과일</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                채소
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">곡물</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Something
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default SecondHeader;