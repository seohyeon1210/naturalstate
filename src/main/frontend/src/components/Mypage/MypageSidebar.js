import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Side = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 20%;
    height: 100vh;
    border-right: 1px solid #e0e0e0;
    background-color: #f9f9f9;
    padding-top: 100px;
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
    const [userType, setUserType] = useState(''); // "user" 또는 "store"

    useEffect(() => {
        // 현재 로그인한 사용자 유형 확인
        axios
            .get('http://192.168.0.48:18080/api/store/session', { withCredentials: true })
            .then((response) => {
                if (response.data.userType === 'store') {
                    setUserType('store'); // 스토어 사용자
                } else {
                    setUserType('user'); // 일반 사용자
                }
            })
            .catch(() => {
                setUserType('user'); // 기본값으로 일반 사용자 설정
            });
    }, []);

    // 유저 로그인 시 보여질 메뉴
    const userShoppingMenus = [
        { name: '주문배송현황', path: '/mypage/orderlist' },
        { name: '나의 배송지', path: '/mypage/deliverylist' },
        { name: '장바구니', path: '/mypage/cart' },
    ];
    const userPersonalMenus = [
        { name: '회원정보수정', path: '/mypage/usermypage' },
        { name: '회원탈퇴', path: '/mypage/userdelete' },
    ];

    // 스토어 로그인 시 보여질 메뉴
    const storeShoppingMenus = [
        { name: '등록한 상품', path: '/mypage/registeredproduct' },
        { name: '정산 페이지', path: '/mypage/settlement' },
    ];
    const storePersonalMenus = [
        { name: '회원탈퇴', path: '/mypage/userdelete' },
    ]; // 필요 시 추가 가능

    // 렌더링할 메뉴 선택
    const shoppingMenus = userType === 'store' ? storeShoppingMenus : userShoppingMenus;
    const personalMenus = userType === 'store' ? storePersonalMenus : userPersonalMenus;

    return (
        <Side>
            <Section>
                <SectionTitle>쇼핑정보</SectionTitle>
                {shoppingMenus.map((menu, index) => (
                    <MenuItem key={index}>
                        <NavLink
                            to={menu.path}
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            {menu.name}
                        </NavLink>
                    </MenuItem>
                ))}
            </Section>
            <Section>
                <SectionTitle>회원정보</SectionTitle>
                {personalMenus.map((menu, index) => (
                    <MenuItem key={index}>
                        <NavLink
                            to={menu.path}
                            className={({ isActive }) => (isActive ? 'active' : '')}
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
