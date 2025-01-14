import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./MypageSidebar";
import DeliveryList from "./DeliveryList";
import Cart from "../Cart/Cart";
import OrderList from "./OrderList";
import UserMypage from "./UserMypage";
import UserDelete from "./UserDelete";

// 스타일 정의
const Container = styled.div`
    display: flex;
    width: 100%;
    min-height: calc(100vh - 80px); /* 푸터 높이(80px)를 제외한 최소 높이 설정 */
    background-color: #f9f9f9;
`;

const Content = styled.div`
    flex: 1;
    padding: 20px;
    background-color: #f9f9f9;
`;

const Title = styled.h1`
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;
`;

const WelcomeBox = styled.div`
    text-align: center;
    margin: 20px auto;
    padding: 10px;
    border: 1px solid #ddd;
    width: 300px;
    background-color: #ffffff;
    font-size: 18px;
    font-weight: bold;
`;

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
    }

    td[colspan="3"] {
        text-align: center;
        font-style: italic;
        color: #999;
    }
`;

function Mypage() {
    const [welcomeMessage, setWelcomeMessage] = useState("");
    const [recentPosts, setRecentPosts] = useState([]); // 초기값 빈 배열 설정

    // 사용자 환영 메시지 가져오기
    useEffect(() => {
        fetch("/api/user/welcome")
            .then((response) => {
                if (!response.ok) throw new Error("Failed to fetch welcome message");
                return response.text();
            })
            .then((data) => setWelcomeMessage(data))
            .catch((error) => console.error("Error fetching welcome message:", error));
    }, []);

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
                <Title>마이페이지</Title>
                <WelcomeBox>{welcomeMessage}</WelcomeBox>
                <h2>최근 문의 내역</h2>
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
                <Routes>
                    <Route path="deliverylist" element={<DeliveryList />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="usermypage" element={<UserMypage />} />
                    <Route path="userdelete" element={<UserDelete />} />
                </Routes>
            </Content>
        </Container>
    );
}

export default Mypage;


//import React from "react";
//import { Routes, Route } from "react-router-dom";
//import styled from "styled-components";
//import Sidebar from "./MypageSidebar";
//import DeliveryList from "./DeliveryList";
//import Cart from "../Cart/Cart";
//
//
//const Container = styled.div`
//    display: flex;
//    width: 100%;
//    height: 100vh;
//`;
//
//const Content = styled.div`
//    flex: 1;
//    padding: 20px;
//    background-color: #f9f9f9;
//`;
//
//function Mypage() {
//    return (
//        <Container>
//            <Sidebar />
//            <Content>
//                <Routes>
//                    <Route path="deliverylist" element={<DeliveryList />} />
//                    <Route path="cart" element={<Cart />} />
//                </Routes>
//                <h1>마이페이지</h1>
//            </Content>
//        </Container>
//    );
//}
//
//export default Mypage;
