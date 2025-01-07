import React from "react";

function CustomerService() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        {/* 왼쪽 고객센터 메뉴 */}
        <div style={{ flex: "1", padding: "20px", borderRight: "1px solid #ddd" }}>
          <h2 style={{ marginBottom: "20px" }}>고객센터</h2>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li style={{ marginBottom: "10px" }}>
              <a href="/notice" style={{ textDecoration: "none", color: "#000" }}>
                공지사항
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a href="/inquiry" style={{ textDecoration: "none", color: "#000" }}>
                자주 묻는 질문
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a href="/post" style={{ textDecoration: "none", color: "#000" }}>
                1:1 문의
              </a>
            </li>
          </ul>
          <hr style={{ margin: "20px 0" }} />
          <div style={{ fontSize: "18px", fontWeight: "bold" }}>02-6013-0855</div>
          <div style={{ fontSize: "14px", marginTop: "10px" }}>
            상담시간: AM 10:00 ~ PM 17:00
            <br />
            (주말 및 공휴일 휴무)
          </div>
        </div>

        {/* 공지사항 */}
        <div style={{ flex: "2", padding: "20px", borderRight: "1px solid #ddd" }}>
          <h2
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px", // 제목과 내용 간 간격 추가
            }}
          >
            공지사항
            <a href="/notice" style={{ fontSize: "14px", textDecoration: "none", color: "#000" }}>
              더보기 &gt;
            </a>
          </h2>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li style={{ marginBottom: "15px", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
              마녀공장 멤버십 정책 변경 안내
            </li>
            <li style={{ marginBottom: "15px", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
              배송 지연 안내 (폭설, 강풍으로 인한 교통 통제)
            </li>
            <li style={{ marginBottom: "15px", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
              마녀공장 휴면 회원 정책 변경에 따른 이용약관&개인정보 안내
            </li>
            <li style={{ marginBottom: "15px", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
              마녀공장 가품 주의 안내
            </li>
            <li style={{ marginBottom: "15px", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
              2024년 추석 연휴 배송 및 고객 상담 운영 안내
            </li>
          </ul>
        </div>

        {/* 이벤트 */}
        <div style={{ flex: "2", padding: "20px" }}>
          <h2
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px", // 제목과 내용 간 간격 추가
            }}
          >
            이벤트
            <a href="/events" style={{ fontSize: "14px", textDecoration: "none", color: "#000" }}>
              더보기 &gt;
            </a>
          </h2>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li style={{ marginBottom: "15px", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
              스케일이 다른 포토 리뷰 이벤트
            </li>
            <li style={{ marginBottom: "15px", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
              새해 첫 쇼핑 만원으로 끝!
            </li>
            <li style={{ marginBottom: "15px", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
              2024 베스트템 명예의 전당
            </li>
            <li style={{ marginBottom: "15px", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
              소다품 우수평가 기념 할인전
            </li>
            <li style={{ marginBottom: "15px", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
              12월 겨울 앰플 대전
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CustomerService;
