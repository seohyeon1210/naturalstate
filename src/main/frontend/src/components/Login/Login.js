import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login({ onLogin }) {
    const [userId, setUserId] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = { userId, userPassword };

        try {
            const response = await fetch("http://localhost:18080/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.text();
            if (result === "Login successful!") {
                // 로그인 성공 시 localStorage에 사용자 정보 저장
                localStorage.setItem("user", JSON.stringify({ userId }));
                onLogin(); // App.js에서 로그인 상태 업데이트
                alert("로그인 성공!");
                navigate("/"); // 메인 페이지로 리다이렉트
            } else {
                setErrorMessage(result);
            }
        } catch (error) {
            console.error("로그인 요청 실패:", error);
            setErrorMessage("로그인 요청 중 문제가 발생했습니다.");
        }
    };

    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>아이디</Form.Label>
                    <Form.Control type="email" placeholder="아이디" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>비밀번호</Form.Label>
                    <Form.Control type="password" placeholder="비밀번호" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="아이디 기억하기" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    로그인
                </Button>
            </Form>

            {/*기존 로그인*/}

            <h2>로그인</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>아이디</label>
                    <input
                        type="text"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                    />
                </div>
                <div>
                    <label>비밀번호</label>
                    <input
                        type="password"
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                    />
                </div>
                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                <button type="submit">로그인</button>
            </form>
        </div>
    );
}

export default Login;
