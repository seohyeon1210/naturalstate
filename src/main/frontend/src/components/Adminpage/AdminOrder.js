import React, { useState, useEffect } from "react";
import "./AdminOrder.css";

function AdminOrder() {
  const [orders, setOrders] = useState([
    {
      id: 1,
      date: "24-12-19 21:52",
      orderNumber: "234141",
      product: "맛있는 군고구마",
      image: "https://via.placeholder.com/50",
      quantity: 1,
      productPrice: 30000,
      status: "배송완료",
      seller: "채소팜",
      buyer: "김서현",
      totalPrice: 30000,
      paymentMethod: "신용카드",
    },
    {
      id: 2,
      date: "24-12-23 21:12",
      orderNumber: "234142",
      product: "꿀맛나는 딸기",
      image: "https://via.placeholder.com/50",
      quantity: 3,
      productPrice: 20000,
      status: "배송완료",
      seller: "프레쉬팜",
      buyer: "이상형",
      totalPrice: 60000,
      paymentMethod: "무통장 입금",
    },
    {
      id: 3,
      date: "24-12-25 12:25",
      orderNumber: "234143",
      product: "친환경 애호박",
      image: "https://via.placeholder.com/50",
      quantity: 2,
      productPrice: 50000,
      status: "배송완료",
      seller: "야미팜",
      buyer: "김건우",
      totalPrice: 10000,
      paymentMethod: "신용카드",
    },
  ]);

  const [totalAmount, setTotalAmount] = useState(0);
  const [searchTerm, setSearchTerm] = useState(""); // 검색어 상태 추가
  const [filteredOrders, setFilteredOrders] = useState(orders); // 필터링된 주문 상태

  useEffect(() => {
    // 총 주문액 계산
    const total = orders.reduce((sum, order) => sum + order.totalPrice, 0);
    setTotalAmount(total);
  }, [orders]);

  useEffect(() => {
    // 검색어에 따라 필터링
    if (searchTerm === "") {
      setFilteredOrders(orders); // 검색어가 없으면 전체 주문을 표시
    } else {
      const filtered = orders.filter((order) =>
        order.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.buyer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.seller.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredOrders(filtered);
    }
  }, [searchTerm, orders]);

  return (
    <div className="admin-order-container">
      <h1 className="admin-order-title">전체 주문 리스트</h1>

      {/* 총 주문액 및 검색 */}
      <div className="admin-order-header">
        <div className="admin-order-total">
          <span>총 주문액 :</span> <strong>{totalAmount.toLocaleString()}원</strong>
        </div>
        <div className="admin-order-search">
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // 검색어 업데이트
          />
          <button className="search-button">검색</button>
        </div>
      </div>

      {/* 주문 테이블 */}
      <table className="admin-order-table">
        <thead>
          <tr>
            <th>번호</th>
            <th>주문일시</th>
            <th>주문번호</th>
            <th>주문상품</th>
            <th>수량</th>
            <th>상품금액</th>
            <th>주문상태</th>
            <th>판매자명</th>
            <th>주문자</th>
            <th>총주문액</th>
            <th>결제방법</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.date}</td>
              <td>{order.orderNumber}</td>
              <td>
                <img src={order.image}/>
                <br />
                {order.product}
              </td>
              <td>{order.quantity}</td>
              <td>{order.productPrice.toLocaleString()}</td>
              <td>{order.status}</td>
              <td>{order.seller}</td>
              <td>{order.buyer}</td>
              <td>{order.totalPrice.toLocaleString()}</td>
              <td>{order.paymentMethod}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 페이지네이션 */}
      <div className="pagination">
        <button className="pagination-button">◀</button>
        {[1, 2, 3, 4, 5].map((page) => (
          <button key={page} className="pagination-button">
            {page}
          </button>
        ))}
        <button className="pagination-button">▶</button>
      </div>
    </div>
  );
}

export default AdminOrder;