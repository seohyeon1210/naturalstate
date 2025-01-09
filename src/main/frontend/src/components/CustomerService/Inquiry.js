import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Inquiry.css"; // CSS 파일 import

function Inquiry() {
  const navigate = useNavigate();

  const questions = [
    { question: "그대로 마켓이란 무엇인가요?", answer: "그대로는 직거래를 통해 신선하고 믿을 수 있는 농산물을 소비자에게 제공하는 플랫폼입니다." },
    { question: "구매 가능한 상품은 어떤 것들이 있나요?", answer: "과일, 채소, 곡물류 등 다양한 농산물을 구매할 수 있습니다." },
    { question: "그대로 마켓의 거래는 어떻게 진행되나요?", answer: "그대로는 직거래 마켓입니다." },
    { question: "농산물의 품질은 어떻게 보장되나요?", answer: "인증된 농가와의 협력을 통해 품질을 보장합니다." },
    { question: "주문한 상품의 배송은 얼마나 걸리나요?", answer: "상품은 생산지에서 직접 발송되며, 주문 후 1~3일 이내에 도착합니다." },
    { question: "농산물을 판매하려면 어떻게 해야 하나요?", answer: "플랫폼에 가입한 후, 생산자 정보를 입력하고 상품 등록을 진행하면 됩니다." },
    { question: "상품에 문제가 있을 경우 교환이나 환불이 가능한가요?", answer: "네, 상품에 문제가 있을 경우 교환 및 환불이 가능합니다. 수령 후 7일 이내에 고객센터로 연락해주시면 빠르게 처리해 드립니다. 단, 신선식품 특성상 소비자 부주의로 인한 문제는 교환/환불이 어려울 수 있습니다." },
    { question: "그대로에서만 제공되는 특별한 혜택이 있나요?", answer: "그대로는 첫 구매 쿠폰, 제철 농산물 특별 기획전 등 다양한 혜택을 제공합니다." },
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