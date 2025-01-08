import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "./Login.css";
import appleImage from "../../assets/login/apple.jpg";

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
        <div className="login-wrapper">
            <div className="login-content">
                <div className="login-form">
                    <h2>그대로</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>아이디</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="아이디"
                                value={userId}
                                onChange={(e) => setUserId(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>비밀번호</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="비밀번호"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="아이디 기억하기" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            로그인
                        </Button>

                        <div className="mt-3">
                            <Button variant="link" onClick={() => navigate("/findid")}>
                                아이디 찾기
                            </Button>
                            <Button variant="link" onClick={() => navigate("/findpw")}>
                                비밀번호 찾기
                            </Button>
                        </div>
                    </Form>
                    {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                </div>
                <div className="login-image">
                    <img src={appleImage} alt="Login Illustration" />
                </div>
            </div>
        </div>
    );
}

export default Login;
