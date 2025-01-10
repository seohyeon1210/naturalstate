import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col md={6} className="mb-3 mb-md-0">
                        <h5>고객센터</h5>
                        <p>
                            <strong>전화:</strong> 1234-5678 <br/>
                            <strong>이메일:</strong> support@natrualstate.com <br/>
                            <strong>운영시간:</strong> 월-금 09:00 ~ 18:00 (주말/공휴일 휴무)
                        </p>
                    </Col>
                    <Col md={6} className="text-md-end">
                        <p>
                            <Link to="/storejoin">입점신청</Link>
                        </p>
                        <p>
                            <Link to="/customerservice">고객센터</Link>
                        </p>
                        <p>
                            <Link to="/webterms">개인정보 처리방침</Link>
                        </p>
                        <p>
                            파트너 개인정보 처리방침
                        </p>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col className="text-center">
                        <p className="mb-0">&copy; 2024 그대로. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;