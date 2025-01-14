import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import profileImage from "../../assets/MypageSidebar/styled.png";

const Side = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 20%;
    height: 100vh;
    border-right: 1px solid #e0e0e0;
    background-color: #f9f9f9;
    padding-top: 50px;
`;

const Profile = styled.img`
    margin-top: 20px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
`;

const Section = styled.div`
    margin-top: 30px;
    width: 200px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #fff;
    padding: 10px;
    text-align: center;

    &:not(:last-child) {
        margin-bottom: 20px;
    }
`;

const SectionTitle = styled.h3`
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: bold;
    color: #333;
`;

const MenuItem = styled.div`
    margin: 5px 0;

    a {
        text-decoration: none;
        color: #333;
        font-size: 16px;

        &:hover {
            color: black;
            font-weight: bold;
        }

        &.active {
            font-weight: bold;
            color: #007bff;
        }
    }
`;

function MypageSidebar() {

    const shoppingMenus = [
        { name: "주문배송현황", path: "/mypage/orderlist" },
        { name: "나의 배송지", path: "/mypage/deliverylist" },
        { name: "장바구니", path: "/mypage/cart" },
        { name: "등록한 상품", path: "/mypage/productwrite" },
    ];


    const personalMenus = [
        { name: "회원정보수정", path: "/mypage/usermypage" },
        { name: "회원탈퇴", path: "/mypage/deleteaccount" },
    ];

    return (
        <Side>

            <Profile src={profileImage} alt="Profile" />


            <Section>
                <SectionTitle>쇼핑정보</SectionTitle>
                {shoppingMenus.map((menu, index) => (
                    <MenuItem key={index}>
                        <NavLink
                            to={menu.path}
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            {menu.name}
                        </NavLink>
                    </MenuItem>
                ))}
            </Section>


            <Section>
                <SectionTitle>개인정보</SectionTitle>
                {personalMenus.map((menu, index) => (
                    <MenuItem key={index}>
                        <NavLink
                            to={menu.path}
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            {menu.name}
                        </NavLink>
                    </MenuItem>
                ))}
            </Section>
        </Side>
    );
}

export default MypageSidebar;
