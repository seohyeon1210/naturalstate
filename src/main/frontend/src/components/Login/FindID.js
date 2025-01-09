import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function FindID() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [foundID, setFoundID] = useState("");
    const navigate = useNavigate();

    const handleFindID = async (e) => {
        e.preventDefault();

        const data = { name, phone, email };

        try {
            const response = await fetch("http://localhost:18080/api/findid", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.success) {
                setFoundID(result.userId);
            } else {
                alert("아이디를 찾을 수 없습니다. 입력 정보를 다시 확인하세요.");
            }
        } catch (error) {
            console.error("아이디 찾기 요청 실패:", error);
            alert("아이디 찾기 요청 중 문제가 발생했습니다.");
        }
    };

    return (
        <div>
            <h2>아이디 찾기</h2>
            <Form onSubmit={handleFindID}>
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
                    아이디 찾기
                </Button>
            </Form>
            {foundID && (
                <div className="mt-3">
                    <p>찾은 아이디: <strong>{foundID}</strong></p>
                    <Button variant="secondary" onClick={() => navigate("/login")}>
                        로그인 페이지로 이동
                    </Button>
                </div>
            )}
        </div>
    );
}

export default FindID;
