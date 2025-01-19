import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Row } from "react-bootstrap";
import "./Login.css";

function Login({ onLogin }) {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("user"); // 유저 유형: user 또는 store
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data =
            userType === "user"
                ? { userId, password } // 일반 유저 로그인
                : { storeId: userId, password }; // 스토어 로그인

        const apiEndpoint =
            userType === "user"
                ? "http://localhost:18080/api/login"
                : "http://localhost:18080/api/store/login";

        try {
            const response = await fetch(apiEndpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
                credentials: "include",
            });

            if (response.ok) {
                const user = await response.json(); // JSON 응답 데이터를 받아옴
                onLogin(user); // App.js로 사용자 정보 전달
                alert("로그인 성공!");
                navigate("/"); // 메인 페이지로 이동
            } else {
                const errorText = await response.text(); // 오류 메시지를 받아옴
                setErrorMessage(errorText);
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
                <Row className="mb-3 user-type-container">
                    <Form.Check
                        type="radio"
                        label="일반 유저"
                        name="userType"
                        value="user"
                        checked={userType === "user"}
                        onChange={(e) => setUserType(e.target.value)}
                    />
                    <Form.Check
                        type="radio"
                        label="스토어"
                        name="userType"
                        value="store"
                        checked={userType === "store"}
                        onChange={(e) => setUserType(e.target.value)}
                    />
                </Row>

                <Row className="mb-3">
                    <Form.Group controlId="formBasicEmail">
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
                    <Form.Group controlId="formBasicPassword">
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

                <Button className="font-label btn-submit" type="submit">
                    로그인
                </Button>
            </Form>
        </div>
    );
}

export default Login;
