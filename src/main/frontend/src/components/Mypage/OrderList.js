import React, { useState } from "react";
import "./OrderList.css";

const OrderList = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [orders, setOrders] = useState([
        { date: "2025-01-10", productName: "노트북", amount: "1,500,000원", status: "배송중" },
        { date: "2025-01-08", productName: "무선 이어폰", amount: "250,000원", status: "배송완료" },
        { date: "2025-01-05", productName: "휴대폰 케이스", amount: "20,000원", status: "배송준비중" },
        { date: "2025-01-03", productName: "키보드", amount: "120,000원", status: "배송중" },
    ]);

    // 검색 필터링
    const filteredOrders = orders.filter((order) =>
        order.productName.includes(searchQuery)
    );

    return (
        <div className="order-status-container">
            <h1>김춘배님의 주문 내역입니다.</h1>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="상품명을 입력하세요"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button>검색</button>
            </div>
            <div className="order-list">
                {filteredOrders.map((order, index) => (
                    <div className="order-item" key={index}>
                        - {order.date} | {order.productName} | {order.amount} | {order.status}
                    </div>
                ))}
                {filteredOrders.length === 0 && (
                    <div className="no-orders">검색 결과가 없습니다.</div>
                )}
            </div>
        </div>
    );
};

export default OrderList;
