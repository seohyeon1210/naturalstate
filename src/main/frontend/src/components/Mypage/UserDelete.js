import React from "react";
import styled from "styled-components";

const Container = styled.div`
    max-width: 800px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #eaeaea;
    border-radius: 8px;
    background-color: #f9f9f9;
    font-family: Arial, sans-serif;
    text-align: center;
`;

const Title = styled.h2`
    color: #1b5e20;
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: bold;
`;

const NoticeBox = styled.div`
    border: 1px solid #a5d6a7;
    border-radius: 8px;
    background-color: #e8f5e9;
    padding: 20px;
    margin-bottom: 20px;
    text-align: left;
`;

const NoticeText = styled.p`
    color: #2e7d32;
    font-size: 14px;
    margin: 10px 0;
    line-height: 1.6;
`;

const DeleteButton = styled.button`
    background-color: #d32f2f;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #b71c1c;
    }
`;

function DeleteAccount() {
    const handleDeleteAccount = async () => {
        const confirmDelete = window.confirm("정말 탈퇴하시겠습니까?");
        if (confirmDelete) {
            try {
                const response = await fetch("http://192.168.0.48:18080/api/login/delete", {
                    method: "DELETE",
                    credentials: "include", // 세션 쿠키 포함
                });

                if (response.ok) {
                    alert("회원탈퇴가 완료되었습니다.");
                    // 로그아웃 후 로그인 페이지로 이동
                    window.location.href = "/login";
                } else {
                    alert("스토어 계정 탈퇴신청은 관리자에게 문의바랍니다.");
                }
            } catch (error) {
                console.error("회원탈퇴 요청 실패:", error);
                alert("회원탈퇴 중 문제가 발생했습니다.");
            }
        }
    };

    return (
        <Container>
            <Title>회원 탈퇴를 신청하기 전, 다음 내용을 꼭 확인해주세요.</Title>
            <NoticeBox>
                <NoticeText>· 고객 정보 및 개인화 서비스 이용 기록은 개인정보 처리 방침 기준에 따라 삭제됩니다.</NoticeText>
                <NoticeText>· 회원 탈퇴 시 보유하고 계신 적립금은 복원되지 않습니다.</NoticeText>
                <NoticeText>
                    · 계정 삭제 후에는 데이터를 복구할 수 없습니다
                </NoticeText>
                <NoticeText>
                    · 회원 탈퇴 시 더 이상 그대로 서비스 사용이 불가능합니다.
                </NoticeText>
            </NoticeBox>
            <DeleteButton onClick={handleDeleteAccount}>회원탈퇴</DeleteButton>
        </Container>
    );
}

export default DeleteAccount;
