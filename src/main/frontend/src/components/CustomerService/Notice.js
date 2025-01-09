import React, { useState } from "react";
import "./Notice.css"; // CSS 파일 import

function Notice() {
  const notices = [
    { id: 45, category: "[공지]", title: "그대로 리뷰 이벤트!", date: "2024.12.02", author: "관리자", views: 13148 },
    { id: 44, category: "[공지]", title: "배송 지연 안내 (폭설, 강풍으로 인한 교통 통제)", date: "2024.11.28", author: "관리자", views: 13696 },
    { id: 43, category: "[공지]", title: "그대로 휴면 회원 정책 변경에 따른 이용약관&개인정보 안내", date: "2024.11.20", author: "관리자", views: 14134 },
    { id: 42, category: "[공지]", title: "교환 및 환불정책 업데이트", date: "2024.11.08", author: "관리자", views: 24851 },
    { id: 41, category: "[공지]", title: "2024년 추석 연휴 배송 및 고객 상담 운영 안내", date: "2024.09.12", author: "관리자", views: 42953 },
    { id: 40, category: "[공지]", title: "그대로몰 서비스 점검 사전 안내 (8/8)", date: "2024.08.07", author: "관리자", views: 53731 },
    { id: 39, category: "[공지]", title: "그대로 연휴 관련 휴무일 안내", date: "2024.08.05", author: "관리자", views: 55154 },
    { id: 38, category: "[공지]", title: "그대로 출고 작업 현황_5월 22일", date: "2024.05.22", author: "관리자", views: 82901 },
    { id: 37, category: "[공지]", title: "그대로 출고 작업 현황_5월 7일", date: "2024.05.07", author: "관리자", views: 90279 },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 5;

  const filteredNotices = notices.filter((notice) =>
    notice.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNotices = filteredNotices.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="notice-container">
      <h1 className="notice-title">공지사항</h1>

      {/* 검색 및 필터 */}
      <div className="notice-search-container">
        <select className="notice-search-select">
          <option value="title">제목</option>
        </select>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="검색어 입력"
          className="notice-search-input"
        />
        <button
          className="notice-search-button"
          onClick={() => setCurrentPage(1)}
        >
          검색
        </button>
      </div>

      {/* 공지사항 테이블 */}
      <table className="notice-table">
        <thead>
          <tr>
            <th>번호</th>
            <th>말머리</th>
            <th>제목</th>
            <th>날짜</th>
            <th>작성자</th>
            <th>조회</th>
          </tr>
        </thead>
        <tbody>
          {currentNotices.map((notice) => (
            <tr key={notice.id}>
              <td>{notice.id}</td>
              <td>{notice.category}</td>
              <td className="title">{notice.title}</td>
              <td>{notice.date}</td>
              <td>{notice.author}</td>
              <td>{notice.views}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 페이지네이션 */}
      <div className="notice-pagination">
        {Array.from({ length: Math.ceil(filteredNotices.length / itemsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : "inactive"}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Notice;