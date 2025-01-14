import React from "react";
import "./WebTerms.css"; // CSS 파일 import

const WebTerms = () => {
  return (
    <div className="web-terms-container">
      <div className="web-terms-content">
        <h2 className="web-terms-title">상품운영정책</h2>
        <div className="web-terms-section">
          <h3>상품운영정책</h3>
          <p>
            버지플레이스(서비스명 : 오늘의집 / 이하, 오늘의집)에서는 법령에 위배되는 상품의 유통으로
            인한 소비자의 피해를 최소화하고 신뢰할 수 있는 상품 판매를 위해 상품 운영 정책을
            통해 관리하고 있습니다. 오늘의집에서는 상품 모니터링을 통해 운영정책에 위배되는
            상품에 대하여 확인 등의 요청이 진행될 수 있습니다.
          </p>
        </div>
        <div className="web-terms-section">
          <h3>1. 판매 불가 상품</h3>
          <p>
            법령에 의하여 제조 및 유통이 제한된 상품군 또는 온라인 판매가 금지된 상품군에 대한
            판매 행위를 금지하고 있습니다.
          </p>
          <ul>
            <li>온라인 판매 불가 품목</li>
            <li>미성년자 구매 불가 상품</li>
            <li>기타 사회 통념상 부적절하다고 판단되는 상품</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WebTerms;