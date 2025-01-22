import React, { useState } from "react";
import "./OrderList.css";

const OrderList = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [orders, setOrders] = useState([
        { id: 1, date: "2025-01-10", productName: "노트북", amount: "1,500,000원", status: "배송중" },
        { id: 2, date: "2025-01-08", productName: "무선 이어폰", amount: "250,000원", status: "배송완료" },
        { id: 3, date: "2025-01-05", productName: "휴대폰 케이스", amount: "20,000원", status: "배송준비중" },
        { id: 4, date: "2025-01-03", productName: "키보드", amount: "120,000원", status: "배송중" },
    ]);

    const [selectedOrder, setSelectedOrder] = useState(null); // 선택한 상품 정보
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달창 상태

    // 검색 필터링
    const filteredOrders = orders.filter((order) =>
        order.productName.includes(searchQuery)
    );

    // 모달창 열기
    const handleOpenModal = (order) => {
        setSelectedOrder(order);
        setIsModalOpen(true);
    };

    // 모달창 닫기
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedOrder(null);
    };

    // 반품 처리
    const handleReturn = () => {
        alert("반품 처리가 완료되었습니다.");
        handleCloseModal();
    };

    return (
        <div className="order-status-container">
            <h1>주문 내역</h1>

            <div className="order-list">
                {filteredOrders.map((order) => (
                    <div className="order-item" key={order.id}>
                        <span>
                            - {order.date} | {order.productName} | {order.amount} | {order.status}
                        </span>
                        <button
                            className="detail-button"
                            onClick={() => handleOpenModal(order)}
                        >
                            반품
                        </button>
                    </div>
                ))}
                {filteredOrders.length === 0 && (
                    <div className="no-orders">검색 결과가 없습니다.</div>
                )}
            </div>

            {/* 모달창 */}
            {isModalOpen && selectedOrder && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>상품 상세 정보</h2>
                        <p>주문일자: {selectedOrder.date}</p>
                        <p>상품명: {selectedOrder.productName}</p>
                        <p>결제금액: {selectedOrder.amount}</p>
                        <p>상태: {selectedOrder.status}</p>
                        <div className="modal-buttons">
                            <button className="return-button" onClick={handleReturn}>
                                반품하기
                            </button>
                            <button className="close-button" onClick={handleCloseModal}>
                                닫기
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrderList;