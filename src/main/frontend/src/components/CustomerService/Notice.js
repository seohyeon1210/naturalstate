import React, { useState } from "react";

function Notice() {
  const notices = [
    { id: 45, category: "[공지]", title: "마녀공장 멤버십 정책 변경 안내", date: "2024.12.02", author: "관리자", views: 13148 },
    { id: 44, category: "[공지]", title: "배송 지연 안내 (폭설, 강풍으로 인한 교통 통제)", date: "2024.11.28", author: "관리자", views: 13696 },
    { id: 43, category: "[공지]", title: "마녀공장 휴면 회원 정책 변경에 따른 이용약관&개인정보 안내", date: "2024.11.20", author: "관리자", views: 14134 },
    { id: 42, category: "[공지]", title: "마녀공장 가품 주의 안내", date: "2024.11.08", author: "관리자", views: 24851 },
    { id: 41, category: "[공지]", title: "2024년 추석 연휴 배송 및 고객 상담 운영 안내", date: "2024.09.12", author: "관리자", views: 42953 },
    { id: 40, category: "[공지]", title: "마녀공장 공식몰 서비스 점검 사전 안내 (8/8)", date: "2024.08.07", author: "관리자", views: 53731 },
    { id: 39, category: "[공지]", title: "마녀공장 클리어런스 세일 재고 소진 관련 안내", date: "2024.08.05", author: "관리자", views: 55154 },
    { id: 38, category: "[공지]", title: "네고왕 출고 작업 현황_5월 22일", date: "2024.05.22", author: "관리자", views: 82901 },
    { id: 37, category: "[공지]", title: "네고왕 출고 작업 현황_5월 7일", date: "2024.05.07", author: "관리자", views: 90279 },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNotices = notices.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>공지사항</h1>

      {/* 검색 및 필터 */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
          gap: "10px",
        }}
      >
        <select
          style={{
            padding: "5px",
            border: "1px solid #ddd",
            borderRadius: "4px",
            fontSize: "12px",
            width: "100px",
          }}
        >
          <option value="title">제목</option>
        </select>
        <input
          type="text"
          placeholder="검색어 입력"
          style={{
            padding: "5px",
            border: "1px solid #ddd",
            borderRadius: "4px",
            fontSize: "12px",
            width: "200px",
          }}
        />
        <button
          style={{
            padding: "5px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "12px",
            width: "80px",
          }}
        >
          검색
        </button>
      </div>

      {/* 공지사항 테이블 */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          margin: "20px 0",
          fontSize: "14px",
          textAlign: "left",
        }}
      >
        <thead>
          <tr style={{ borderBottom: "2px solid #ddd" }}>
            <th style={{ padding: "10px", width: "10%", textAlign: "center" }}>번호</th>
            <th style={{ padding: "10px", width: "15%" }}>말머리</th>
            <th style={{ padding: "10px", width: "50%" }}>제목</th>
            <th style={{ padding: "10px", width: "10%", textAlign: "center" }}>날짜</th>
            <th style={{ padding: "10px", width: "10%", textAlign: "center" }}>작성자</th>
            <th style={{ padding: "10px", width: "10%", textAlign: "center" }}>조회</th>
          </tr>
        </thead>
        <tbody>
          {currentNotices.map((notice) => (
            <tr key={notice.id} style={{ borderBottom: "1px solid #eee" }}>
              <td style={{ padding: "10px", textAlign: "center" }}>{notice.id}</td>
              <td style={{ padding: "10px" }}>{notice.category}</td>
              <td style={{ padding: "10px", color: "#000" }}>{notice.title}</td>
              <td style={{ padding: "10px", textAlign: "center" }}>{notice.date}</td>
              <td style={{ padding: "10px", textAlign: "center" }}>{notice.author}</td>
              <td style={{ padding: "10px", textAlign: "center" }}>{notice.views}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 페이지네이션 */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
        <div style={{ display: "flex", gap: "10px" }}>
          {Array.from({ length: Math.ceil(notices.length / itemsPerPage) }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              style={{
                padding: "5px 10px",
                backgroundColor: currentPage === index + 1 ? "red" : "#ddd",
                color: currentPage === index + 1 ? "white" : "black",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "12px",
              }}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}


export default Notice;