import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Inquiry.css"; // CSS 파일 import

function Inquiry() {
  const navigate = useNavigate();

  const questions = [
    { question: "신세계 유니버스 클럽 SSG 월 쿠폰 혜택을 자세히 알려주세요.", answer: "SSG 월 쿠폰 혜택은 멤버십 등급에 따라 제공됩니다." },
    { question: "신세계 유니버스 클럽을 해지하고 싶어요.", answer: "멤버십 해지는 마이페이지에서 직접 진행 가능합니다." },
    { question: "신세계 유니버스 클럽 가입과 가입비 결제는 어떻게 하나요?", answer: "홈페이지를 통해 멤버십 가입 및 결제가 가능합니다." },
    { question: "신세계 유니버스 클럽의 모든 혜택이 알고 싶어요.", answer: "유니버스 클럽 혜택은 상세 페이지를 참고해주세요." },
    { question: "1개월 무료체험은 어떻게 이용할 수 있나요?", answer: "1개월 무료체험은 신규 가입자에게 자동으로 제공됩니다." },
    { question: "신세계 유니버스 클럽 VIP 기준 및 혜택은 어떻게 되나요?", answer: "VIP 혜택은 연간 사용 금액 기준으로 제공됩니다." },
    { question: "스마일클럽 회원이면 신세계 유니버스 클럽 혜택을 받을 수 없나요?", answer: "스마일클럽 회원도 유니버스 클럽 혜택을 함께 누릴 수 있습니다." },
    { question: "신세계 유니버스 클럽은 무엇인가요?", answer: "신세계 유니버스 클럽은 다양한 혜택을 제공하는 멤버십 서비스입니다." },
  ];

  const [openIndex, setOpenIndex] = useState(null); // 현재 열린 질문의 인덱스

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index); // 같은 질문 클릭 시 닫기
  };

  return (
    <div className="inquiry-container">
      <h1 className="inquiry-title">자주 묻는 질문</h1>

      {/* 상단 버튼 */}
      <div className="inquiry-button-group">
        <button className="inquiry-primary-button" onClick={() => navigate("/post")}>
          문의하기
        </button>
      </div>

      {/* 질문 목록 */}
      <ul className="inquiry-question-list">
        {questions.map((item, index) => (
          <li key={index} className="inquiry-question-item">
            <div className="inquiry-question-title">
              <span>Q. {item.question}</span>
              <button
                className={`inquiry-toggle-button ${openIndex === index ? "open" : ""}`}
                onClick={() => handleToggle(index)}
              >
                ▼
              </button>
            </div>
            <div className={`inquiry-answer ${openIndex === index ? "open" : ""}`}>
              {item.answer}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Inquiry;