import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // React Router 사용

function CustomerService() {
  const navigate = useNavigate(); // 페이지 이동
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const itemsPerPage = 5; // 페이지당 표시할 항목 수

  // 게시판 데이터
  const boardData = [
    { no: 10, title: "네이버", author: "아임웹", date: "2019-12-17", likes: 0 },
    { no: 9, title: "제목", author: "아임웹", date: "2019-12-16", likes: 0 },
    { no: 8, title: "구글 지도", author: "아임웹", date: "2019-12-16", likes: 0 },
    { no: 7, title: "환율미쳤다", author: "아임웹", date: "2018-05-14", likes: 0 },
    { no: 6, title: "분위기 최고네요~!", author: "아임웹", date: "2018-04-17", likes: 0 },
    { no: 5, title: "진짜로 갑니다~~", author: "아임웹", date: "2018-04-17", likes: 0 },
    { no: 4, title: "템 메뉴 이미지", author: "아임웹", date: "2017-12-06", likes: 0 },
    { no: 3, title: "응원합니다!", author: "아임웹", date: "2017-11-20", likes: 0 },
    { no: 2, title: "가즈아아아아아아!", author: "아임웹", date: "2017-11-20", likes: 0 },
    { no: 1, title: "제목만", author: "아임웹", date: "2017-11-20", likes: 0 },
  ];

  // 현재 페이지의 데이터 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = boardData.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 변경 핸들러
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 페이지 버튼 생성
  const totalPages = Math.ceil(boardData.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", position: "relative" }}>
      {/* 고객센터 제목 */}
      <h1 style={{ textAlign: "center" }}>고객센터</h1>

      {/* 게시판 테이블 */}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid #ccc" }}>
            <th style={{ padding: "10px", textAlign: "center" }}>번호</th>
            <th style={{ padding: "10px", textAlign: "left" }}>제목</th>
            <th style={{ padding: "10px", textAlign: "center" }}>글쓴이</th>
            <th style={{ padding: "10px", textAlign: "center" }}>작성시간</th>
            <th style={{ padding: "10px", textAlign: "center" }}>좋아요</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.no} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "10px", textAlign: "center" }}>{item.no}</td>
              <td style={{ padding: "10px" }}>{item.title}</td>
              <td style={{ padding: "10px", textAlign: "center" }}>{item.author}</td>
              <td style={{ padding: "10px", textAlign: "center" }}>{item.date}</td>
              <td style={{ padding: "10px", textAlign: "center" }}>{item.likes}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 페이지-인-네이션 버튼 */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            style={{
              margin: "0 5px",
              padding: "8px 16px",
              backgroundColor: number === currentPage ? "#007BFF" : "#ccc",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {number}
          </button>
        ))}
      </div>

      {/* 글쓰기 버튼 (오른쪽 아래에 위치) */}
      <button
        onClick={() => navigate("/post")} // "글쓰기(post url)" 페이지로 이동
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        글쓰기
      </button>
    </div>
  );
}

export default CustomerService;
