import React from "react";
import "./AdminPage.css";

function AdminPage() {
  return (
    <div className="admin-container">
      <h1 className="admin-title">관리자 페이지</h1>

      {/* 전체 주문 통계 */}
      <div className="admin-section">
        <div className="admin-stat">
        </div>
        <button className="admin-button" onClick={() => (window.location.href = "/adminorder")}>
          전체 주문내역 바로가기
        </button>
      </div>

      {/* 전체 주문 현황 */}
      <div className="admin-section">
        <h2 className="admin-subtitle">전체 주문현황</h2>
        <div className="admin-summary">
          <div className="admin-summary-item">
            <h3>총 주문건수</h3>
            <p>3</p>
          </div>
          <div className="admin-summary-item">
            <h3>총 주문액</h3>
            <p>100,000</p>
          </div>
        </div>
      </div>

      {/* 주문 상태 현황 */}
      <div className="admin-section">
        <h2 className="admin-subtitle">주문상태 현황</h2>
        <div className="admin-status">
          <div className="admin-status-item">
            <h3>입금대기</h3>
            <p>0</p>
          </div>
          <div className="admin-status-item">
            <h3>입금완료</h3>
            <p>0</p>
          </div>
          <div className="admin-status-item">
            <h3>배송준비</h3>
            <p>0</p>
          </div>
          <div className="admin-status-item">
            <h3>배송중</h3>
            <p>0</p>
          </div>
          <div className="admin-status-item">
            <h3>배송완료</h3>
            <p>3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
