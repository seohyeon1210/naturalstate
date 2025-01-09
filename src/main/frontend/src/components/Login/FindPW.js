import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function FindPW() {
    const [userId, setUserId] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [resetMessage, setResetMessage] = useState("");
    const navigate = useNavigate();

    const handleFindPW = async (e) => {
        e.preventDefault();

        const data = { userId, name, phone, email };

        try {
            const response = await fetch("http://localhost:18080/api/findpw", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.success) {
                setResetMessage("임시 비밀번호가 이메일로 발송되었습니다.");
            } else {
                alert("비밀번호를 찾을 수 없습니다. 입력 정보를 다시 확인하세요.");
            }
        } catch (error) {
            console.error("비밀번호 찾기 요청 실패:", error);
            alert("비밀번호 찾기 요청 중 문제가 발생했습니다.");
        }
    };

    return (
        <div>
            <h2>비밀번호 찾기</h2>
            <Form onSubmit={handleFindPW}>
                <Form.Group className="mb-3" controlId="formUserId">
                    <Form.Label>아이디</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="아이디"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>이름</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="이름"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Label>전화번호</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="전화번호"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>이메일</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="이메일"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    비밀번호 찾기
                </Button>
            </Form>
            {resetMessage && (
                <div className="mt-3">
                    <p>{resetMessage}</p>
                    <Button variant="secondary" onClick={() => navigate("/login")}>
                        로그인 페이지로 이동
                    </Button>
                </div>
            )}
        </div>
    );
}

export default FindPW;
