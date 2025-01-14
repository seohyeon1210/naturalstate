import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
    font-family: Arial, sans-serif;
    margin: 0 auto;
    width: 400px;
    padding: 20px;
    border: 1px solid #eaeaea;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    margin-top: 50px;
`;

const Title = styled.h2`
    text-align: center;
    color: #333;
    margin-bottom: 20px;
    font-weight: bold;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Label = styled.label`
    font-size: 14px;
    font-weight: bold;
    color: #333;
    margin-bottom: 5px;
`;

const Input = styled.input`
    font-size: 14px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    box-sizing: border-box;
    background-color: ${(props) => (props.readOnly ? "#f2f2f2" : "#fff")};
    cursor: ${(props) => (props.readOnly ? "not-allowed" : "text")};
`;

const Textarea = styled.textarea`
    font-size: 14px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    resize: none;
`;

const Select = styled.select`
    font-size: 14px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    box-sizing: border-box;
    background-color: #fff;
`;

const Button = styled.button`
    font-size: 16px;
    font-weight: bold;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;

function UserInfoEdit() {
    const [userData, setUserData] = useState({
        userId: "",
        password: "",
        confirmPassword: "",
        userName: "",
        phone: "",
        zip: "",
        address: "",
        detailAddress: "",
        email: "",
        receiveEmail: "N",
        auth: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const fetchUserData = async () => {
        try {
            const response = await fetch("http://localhost:18080/api/user/detail");
            const data = await response.json();
            setUserData(data);
        } catch (error) {
            console.error("Failed to fetch user data:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:18080/api/user/update", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                alert("정보가 성공적으로 수정되었습니다.");
            } else {
                alert("정보 수정에 실패했습니다.");
            }
        } catch (error) {
            console.error("Failed to update user data:", error);
            alert("정보 수정 중 오류가 발생했습니다.");
        }
    };

    const handleAddressSearch = () => {
        new window.daum.Postcode({
            oncomplete: function (data) {
                const fullAddress = data.roadAddress; // 도로명 주소
                const zonecode = data.zonecode; // 우편번호

                setUserData((prevState) => ({
                    ...prevState,
                    address: fullAddress,
                    zip: zonecode,
                }));
            },
        }).open();
    };

    useEffect(() => {
        if (!window.daum) {
            const script = document.createElement("script");
            script.src =
                "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    return (
        <Container>
            <Title>내 정보 수정</Title>
            <Form onSubmit={handleSubmit}>
                <div>
                    <Label>회원 ID</Label>
                    <Input type="text" name="userId" value={userData.userId} readOnly />
                </div>
                <div>
                    <Label>비밀번호</Label>
                    <Input
                        type="password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Label>이름</Label>
                    <Input
                        type="text"
                        name="userName"
                        value={userData.userName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Label>연락처</Label>
                    <Input
                        type="text"
                        name="phone"
                        value={userData.phone}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Label>우편번호</Label>
                    <div style={{ display: "flex", gap: "10px" }}>
                        <Input
                            type="text"
                            name="zip"
                            value={userData.zip}
                            readOnly
                        />
                        <Button type="button" onClick={handleAddressSearch}>
                            찾기
                        </Button>
                    </div>
                </div>
                <div>
                    <Label>주소</Label>
                    <Input
                        type="text"
                        name="address"
                        value={userData.address}
                        readOnly
                    />
                </div>
                <div>
                    <Label>상세주소</Label>
                    <Input
                        name="detailAddress"
                        value={userData.detailAddress}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Label>이메일</Label>
                    <Input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Label>이메일 수신 여부</Label>
                    <Select
                        name="receiveEmail"
                        value={userData.receiveEmail}
                        onChange={handleChange}
                    >
                        <option value="Y">수신</option>
                        <option value="N">미수신</option>
                    </Select>
                </div>
                <Button type="submit">수정하기</Button>
            </Form>
        </Container>
    );
}

export default UserInfoEdit;
