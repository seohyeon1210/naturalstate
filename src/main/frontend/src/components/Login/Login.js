import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import "./Login.css";

function Login({ onLogin }) {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = { userId, password };

        try {
            const response = await fetch("http://localhost:18080/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
                credentials: "include",
            });

            const result = await response.text();
            if (result === "Login successful!") {
                onLogin();
                alert("로그인 성공!");
                navigate("/"); // 메인 페이지로 이동
            } else {
                setErrorMessage(result);
            }
        } catch (error) {
            console.error("로그인 요청 실패:", error);
            setErrorMessage("로그인 요청 중 문제가 발생했습니다.");
        }
    };

    return (
        <div className="login-container">
            <Form noValidate onSubmit={handleSubmit} className="login-form">
                <h5 className="font-label">로그인</h5>
                <hr />
                <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="formBasicEmail">
                        <Form.Label className="font-label">아이디</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="아이디"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            isInvalid={!!errorMessage}
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="formBasicPassword">
                        <Form.Label className="font-label">비밀번호</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="비밀번호"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            isInvalid={!!errorMessage}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errorMessage}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="formBasicCheckbox">
                        <Form.Check
                            type="checkbox"
                            label="아이디 기억하기"
                            className="font-label"
                        />
                    </Form.Group>
                </Row>

                <Button className="font-label btn-submit" type="submit">
                    로그인
                </Button>

                <div className="login-links">
                    <Button
                        variant="link"
                        className="font-label"
                        onClick={() => navigate("/findid")}
                    >
                        아이디 찾기
                    </Button>
                    <Button
                        variant="link"
                        className="font-label"
                        onClick={() => navigate("/findpw")}
                    >
                        비밀번호 찾기
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default Login;
