import React, { useState } from "react";
import { Form, Button, Tabs, Tab } from "react-bootstrap"; // React-Bootstrap을 사용하여 UI 구성
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 React Router 사용
import "./Login.css"; // 스타일 시트를 가져옴

function FindUser() {
    // 현재 활성화된 탭 상태를 관리 (기본값: "findid" 탭)
    const [key, setKey] = useState("findid");

    // 공통 입력 필드 상태 관리
    const [name, setName] = useState(""); // 이름 입력 상태
    const [phone, setPhone] = useState(""); // 전화번호 입력 상태
    const [email, setEmail] = useState(""); // 이메일 입력 상태

    // 아이디 찾기 관련 상태
    const [userId, setUserId] = useState(""); // 비밀번호 찾기를 위한 아이디 입력 상태
    const [foundID, setFoundID] = useState(""); // 성공적으로 찾은 아이디 저장 상태

    // 비밀번호 찾기 관련 상태
    const [resetMessage, setResetMessage] = useState(""); // 비밀번호 초기화 결과 메시지

    // 로딩 상태 관리 (API 호출 중인지 확인)
    const [isLoading, setIsLoading] = useState(false);

    // React Router를 활용한 페이지 이동 함수
    const navigate = useNavigate();

    // 유효성 검사를 위한 공통 함수 (입력값이 올바른지 확인)
    const validateInputs = (inputs) => {
        // 이름, 전화번호, 이메일 입력 여부 확인
        if (!inputs.name.trim() || !inputs.phone.trim() || !inputs.email.trim()) {
            alert("모든 입력값을 채워주세요.");
            return false; // 유효하지 않음
        }

        // 이메일 형식 확인 (간단한 정규식을 사용)
        if (!/^\S+@\S+\.\S+$/.test(inputs.email)) {
            alert("유효한 이메일 형식을 입력해주세요.");
            return false; // 유효하지 않음
        }

        // 전화번호 형식 확인 (예: 010-1234-5678)
        if (!/^\d{3}-\d{3,4}-\d{4}$/.test(inputs.phone)) {
            alert("유효한 전화번호 형식(예: 010-1234-5678)을 입력해주세요.");
            return false; // 유효하지 않음
        }

        return true; // 유효성 검사 통과
    };

    // 아이디 찾기 요청 처리 함수
    const handleFindID = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/finduser/findid", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, phone, email }),
            });

            const result = await response.json();

            if (response.ok) {
                alert(`아이디 찾기 성공! 아이디: ${result.userId}`);
            } else {
                alert(`아이디 찾기 실패: ${result.error}`);
            }
        } catch (error) {
            console.error("아이디 찾기 요청 실패:", error);
            alert("아이디 찾기 요청 중 문제가 발생했습니다.");
        }
    };


    // 비밀번호 찾기 요청 처리 함수
    const handleFindPW = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/finduser/findpw", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId, name, phone, email }),
            });

            const result = await response.json();

            if (response.ok) {
                alert(`비밀번호 찾기 성공! 임시 비밀번호: ${result.tempPassword}`);
            } else {
                alert(`비밀번호 찾기 실패: ${result.error}`);
            }
        } catch (error) {
            console.error("비밀번호 찾기 요청 실패:", error);
            alert("비밀번호 찾기 요청 중 문제가 발생했습니다.");
        }
    };


    return (
        <div className="login-container">
            {/* 페이지 제목 */}
            <h5 className="font-label">아이디/비밀번호 찾기</h5>
            <hr />

            {/* Tabs 컴포넌트를 사용하여 아이디 찾기와 비밀번호 찾기 구분 */}
            <Tabs
                id="find-user-tabs"
                activeKey={key} // 현재 활성화된 탭
                onSelect={(k) => setKey(k)} // 탭 변경 시 key 상태 업데이트
                className="mb-3"
            >
                {/* 아이디 찾기 탭 */}
                <Tab eventKey="findid" title="아이디 찾기">
                    <Form className="login-form" onSubmit={handleFindID}>
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
                                placeholder="010-1234-5678"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>이메일</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="example@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Button
                            className="font-label btn-submit"
                            type="submit"
                            disabled={isLoading} // 로딩 중 버튼 비활성화
                        >
                            {isLoading ? "찾는 중..." : "아이디 찾기"}
                        </Button>
                    </Form>
                    {/* 아이디 찾기 결과 표시 */}
                    {foundID && (
                        <div className="mt-3">
                            <p>찾은 아이디: <strong>{foundID}</strong></p>
                            <Button variant="secondary" onClick={() => navigate("/login")}>
                                로그인 페이지로 이동
                            </Button>
                        </div>
                    )}
                </Tab>

                {/* 비밀번호 찾기 탭 */}
                <Tab eventKey="findpw" title="비밀번호 찾기">
                    <Form className="login-form" onSubmit={handleFindPW}>
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
                                placeholder="010-1234-5678"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label
                            >이메일</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="example@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        {/* 비밀번호 찾기 버튼 */}
                        <Button
                            className="font-label btn-submit"
                            type="submit"
                            disabled={isLoading} // 로딩 중 버튼 비활성화
                        >
                            {isLoading ? "찾는 중..." : "비밀번호 찾기"}
                        </Button>
                    </Form>

                    {/* 비밀번호 찾기 결과 메시지 표시 */}
                    {resetMessage && (
                        <div className="mt-3">
                            <p>{resetMessage}</p>
                            <Button variant="secondary" onClick={() => navigate("/login")}>
                                로그인 페이지로 이동
                            </Button>
                        </div>
                    )}
                </Tab>
            </Tabs>
        </div>
    );
}

export default FindUser;
