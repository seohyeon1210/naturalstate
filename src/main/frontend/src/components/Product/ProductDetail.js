import React, { useState } from "react";
import "./ProductDetail.css"; // 분리된 CSS 파일 import
import TangerineImage from '../../images/감귤한박스.png';
import Thumbnail1 from '../../images/감귤한박스1.jpg';
import TangerineDescImage from '../../images/감귤설명1.jpg'

function ProductDetail() {
  const [selectedOption, setSelectedOption] = useState(""); // 옵션 선택 상태
  const [additionalOption, setAdditionalOption] = useState(""); // 추가 옵션 상태
  const [quantity, setQuantity] = useState(1); // 수량 상태
  const [price, setPrice] = useState(17900); // 가격 상태

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleAdditionalOptionChange = (e) => {
    setAdditionalOption(e.target.value);
  };

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div>
      {/* 상단 상품 정보 */}
      <div className="detail-container">
        {/* 왼쪽 이미지 영역 */}
        <div className="detail-image-section">
          <img
            src={TangerineImage}
            alt="Product"
            className="detail-main-image"
          />
        </div>

        {/* 오른쪽 상세 정보 영역 */}
        <div className="detail-detail-section">
          <h2 className="detail-title">[첫 구매 할인] 감귤 1박스</h2>
          <p className="detail-brand">네이버리빙 | 브랜드</p>
          <p className="detail-price">17,900원</p>

          {/* 혜택 정보 */}
          <div className="detail-benefits">
            <p>혜택: 최대 10% 적립 (토스페이)</p>
            <p>배송: 무료배송 | 지금 주문시 내일 도착 가능</p>
          </div>

          {/* 옵션 선택 */}
          <div className="detail-option">
            <label className="detail-label">선택</label>
            <select
              value={selectedOption}
              onChange={handleOptionChange}
              className="detail-select"
            >
              <option value="">옵션을 선택해주세요</option>
              <option value="option1">옵션 1</option>
              <option value="option2">옵션 2</option>
            </select>
          </div>

          {/* 추가 옵션 선택 */}
          <div className="detail-additional-option">
            <label className="detail-label">추가상품 (선택)</label>
            <select
              value={additionalOption}
              onChange={handleAdditionalOptionChange}
              className="detail-select"
            >
              <option value="">추가상품을 선택해주세요</option>
              <option value="additional1">추가상품 1</option>
              <option value="additional2">추가상품 2</option>
            </select>
          </div>

          {/* 수량 선택 */}
          <div className="detail-quantity-control">
            <button
              onClick={() => handleQuantityChange("decrease")}
              className="detail-quantity-button"
            >
              -
            </button>
            <span className="detail-quantity-display">{quantity}</span>
            <button
              onClick={() => handleQuantityChange("increase")}
              className="detail-quantity-button"
            >
              +
            </button>
          </div>

          {/* 총 금액 */}
          <div className="detail-total-price">
            총 금액: {(price * quantity).toLocaleString()}원
          </div>

          {/* 버튼 */}
          <div className="detail-action-buttons">
            <button className="detail-cart-button">장바구니</button>
            <button className="detail-buy-now-button">바로구매</button>
          </div>
        </div>
      </div>

      {/* 하단 스크롤 섹션 */}
      <div className="detail-scroll-section">
        <h3 className="detail-section-title">배송 일정</h3>
        <p>배송 출발일: 화, 목</p>

        <h3 className="detail-section-title">주문 전 꼭 읽어주세요!</h3>
        <ul>
          <li>모든 상품은 산지 직송으로 배송되며, 배송지 도착까지 1-3일 정도 소요됩니다!</li>
          <li>교환, 환불은 상품 도착일로부터 구매자가 상품에 이상이 있는 걸 발견하고 고객센터에 교환 및 환불을 요청하면
          당사 정책에 따라 절차를 진행합니다.</li>
        </ul>
        <h3 className="detail-section-title">상품 설명</h3>
        <img
          src={TangerineDescImage}
          alt="Additional Info"
          className="detail-additional-image"
        />
        <ul>
          <li>제주도에서 바닷바람 맞으면서 자란 달고 맛있는 감귤입니다!
          <br/>
          한 입 베어 물면 상큼한 향과 함께 달콤한 과즙이 풍부하게 퍼집니다!
          <br/>
          자연의 건강함을 그대로 담아낸 저희 귤은 아침 식사부터 간식, 디저트까지 다양하게 즐길 수 있습니다!
          <br/>
          제주도의 싱그러운 자연의 맛을 만나보세요.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductDetail;
