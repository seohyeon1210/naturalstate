import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./MypageSidebar";
import DeliveryList from "./DeliveryList";
import Cart from "./Cart";


const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
`;

const Content = styled.div`
    flex: 1;
    padding: 20px;
    background-color: #f9f9f9;
`;

function Mypage() {
    return (
        <Container>
            <Sidebar />
            <Content>
                <Routes>
                    <Route path="deliverylist" element={<DeliveryList />} />
                    <Route path="cart" element={<Cart />} />
                </Routes>
                <h1>마이페이지</h1>
            </Content>
        </Container>
    );
}

export default Mypage;
