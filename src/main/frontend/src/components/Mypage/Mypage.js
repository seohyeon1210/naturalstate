import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./MypageSidebar";
import DeliveryList from "./DeliveryList";
import Cart from "../Cart/Cart";
import OrderList from "./OrderList";
import UserMypage from "./UserMypage";
import UserDelete from "./UserDelete";
import RegisteredProduct from "./RegisteredProduct";
import SettlementPage from './SettlementPage';

// 환영 메시지 컴포넌트 스타일
const WelcomeSection = styled.div`
    text-align: center;
    margin-top: 50px;
    margin-bottom: 30px;
`;

const WelcomeMessage = styled.h2`
    font-size: 28px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
    font-family: PretendardBold, sans-serif;
`;

const SubMessage = styled.p`
    font-size: 18px;
    color: #555;
    font-family: PretendardRegular, sans-serif;
`;

// 최근 문의 내역 스타일
const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;

    th,
    td {
        border: 1px solid #ddd;
        padding: 10px;
        text-align: center;
    }

    th {
        background-color: #f4f4f4;
        font-weight: bold;
        font-family: PretendardBold, sans-serif;
    }

    td[colspan="3"] {
        text-align: center;
        font-style: italic;
        color: #999;
        font-family: PretendardRegular, sans-serif;
    }
`;

const InquirySection = styled.div`
    margin-top: 40px;
`;

const SectionTitle = styled.h3`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    font-family: PretendardBold, sans-serif;
`;

// 레이아웃 스타일
const Container = styled.div`
    display: flex;
    width: 100%;
    min-height: calc(100vh - 80px); /* 푸터 높이(80px)를 제외한 최소 높이 설정 */
    background-color: #f9f9f9;
`;

const Content = styled.div`
    flex: 1;
    padding: 20px;
`;

function Mypage() {
    const [recentPosts, setRecentPosts] = useState([]); // 초기값 빈 배열 설정

    // 최근 문의 내역 가져오기
    useEffect(() => {
        fetch("/api/board/recent")
            .then((response) => {
                if (!response.ok) throw new Error("Failed to fetch recent posts");
                return response.json();
            })
            .then((data) => {
                if (Array.isArray(data)) {
                    setRecentPosts(data);
                } else {
                    console.error("Unexpected response format:", data);
                    setRecentPosts([]); // 비정상적인 응답일 경우 빈 배열 설정
                }
            })
            .catch((error) => console.error("Error fetching recent posts:", error));
    }, []);

    return (
        <Container>
            <Sidebar />
            <Content>
                <Routes>
                    {/* 기본 경로: 환영 메시지와 최근 문의 내역 표시 */}
                    <Route
                        path="/"
                        element={
                            <>
                                <WelcomeSection>
                                    <WelcomeMessage>안녕하세요!</WelcomeMessage>
                                    <SubMessage>그대로는 직거래마켓으로 신선도와 품질을 보장합니다!</SubMessage>
                                </WelcomeSection>
                                <InquirySection>
                                    <SectionTitle>최근 문의 내역</SectionTitle>
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th>게시판</th>
                                                <th>글제목</th>
                                                <th>등록일</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {recentPosts.length === 0 ? (
                                                <tr>
                                                    <td colSpan="3">작성한 게시글이 없습니다.</td>
                                                </tr>
                                            ) : (
                                                recentPosts.map((post, index) => (
                                                    <tr key={index}>
                                                        <td>{post.boardName}</td>
                                                        <td>{post.title}</td>
                                                        <td>{post.date}</td>
                                                    </tr>
                                                ))
                                            )}
                                        </tbody>
                                    </Table>
                                </InquirySection>
                            </>
                        }
                    />
                    <Route path="deliverylist" element={<DeliveryList />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="usermypage" element={<UserMypage />} />
                    <Route path="userdelete" element={<UserDelete />} />
                    <Route path="orderlist" element={<OrderList />} />
                    <Route path="registeredproduct" element={<RegisteredProduct />} />
                    <Route path="settlement" element={<SettlementPage />} />
                </Routes>
            </Content>
        </Container>
    );
}

export default Mypage;
