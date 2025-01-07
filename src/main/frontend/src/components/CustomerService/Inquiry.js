import React from "react";
import { useNavigate } from "react-router-dom";

function Inquiry() {
  const navigate = useNavigate();

  const questions = [
    "신세계 유니버스 클럽 SSG 월 쿠폰 혜택을 자세히 알려주세요.",
    "신세계 유니버스 클럽을 해지하고 싶어요.",
    "신세계 유니버스 클럽 가입과 가입비 결제는 어떻게 하나요?",
    "신세계 유니버스 클럽의 모든 혜택이 알고 싶어요.",
    "1개월 무료체험은 어떻게 이용할 수 있나요?",
    "신세계 유니버스 클럽 VIP 기준 및 혜택은 어떻게 되나요?",
    "스마일클럽 회원이면 신세계 유니버스 클럽 혜택을 받을 수 없나요?",
    "신세계 유니버스 클럽은 무엇인가요?",
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>자주 묻는 질문</h1>

      {/* 상단 버튼 */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <div>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#f2f2f2",
              color: "#333",
              border: "1px solid #ccc",
              borderRadius: "20px",
              marginRight: "10px",
              cursor: "pointer",
            }}
          >
            그 외 쿠폰 정책
          </button>
        </div>
        <div>
          <button
            onClick={() => navigate("/postform")}
            style={{
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "20px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            문의하기
          </button>
        </div>
      </div>

      {/* 질문 목록 */}
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {questions.map((question, index) => (
          <li
            key={index}
            style={{
              borderBottom: "1px solid #eee",
              padding: "15px 10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontWeight: "bold", fontSize: "16px" }}>Q. {question}</span>
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                fontSize: "18px",
                fontWeight: "bold",
                transform: "rotate(0deg)",
                transition: "transform 0.2s",
              }}
              onClick={() => alert("상세 내용을 여기에 추가할 수 있습니다.")}
            >
              ▼
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Inquiry;
