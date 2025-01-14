import React, { useState } from "react";
import "./ProductDetail.css"; // 분리된 CSS 파일 import

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
      <div className="product-container">
        {/* 왼쪽 이미지 영역 */}
        <div className="product-image-section">
          <img
            src="https://via.placeholder.com/400"
            alt="Product"
            className="main-image"
          />
          {/* 썸네일 이미지 */}
          <div className="thumbnail-container">
            {[1, 2, 3, 4].map((item) => (
              <img
                key={item}
                src={`https://via.placeholder.com/100?text=Img${item}`}
                alt={`Thumbnail ${item}`}
                className="thumbnail-image"
              />
            ))}
          </div>
        </div>

        {/* 오른쪽 상세 정보 영역 */}
        <div className="product-detail-section">
          <h2 className="product-title">New Color 모던 트롤리 스윙 3단 빨래바구니</h2>
          <p className="product-brand">네이버리빙 | 브랜드</p>
          <p className="product-price">17,900원</p>

          {/* 혜택 정보 */}
          <div className="product-benefits">
            <p>혜택: 최대 10% 적립 (토스페이)</p>
            <p>배송: 무료배송 | 지금 주문시 내일 도착 가능</p>
          </div>

          {/* 옵션 선택 */}
          <div className="product-option">
            <label className="product-label">선택</label>
            <select
              value={selectedOption}
              onChange={handleOptionChange}
              className="product-select"
            >
              <option value="">옵션을 선택해주세요</option>
              <option value="option1">옵션 1</option>
              <option value="option2">옵션 2</option>
            </select>
          </div>

          {/* 추가 옵션 선택 */}
          <div className="product-additional-option">
            <label className="product-label">추가상품 (선택)</label>
            <select
              value={additionalOption}
              onChange={handleAdditionalOptionChange}
              className="product-select"
            >
              <option value="">추가상품을 선택해주세요</option>
              <option value="additional1">추가상품 1</option>
              <option value="additional2">추가상품 2</option>
            </select>
          </div>

          {/* 수량 선택 */}
          <div className="quantity-control">
            <button
              onClick={() => handleQuantityChange("decrease")}
              className="quantity-button"
            >
              -
            </button>
            <span className="quantity-display">{quantity}</span>
            <button
              onClick={() => handleQuantityChange("increase")}
              className="quantity-button"
            >
              +
            </button>
          </div>

          {/* 총 금액 */}
          <div className="total-price">총 금액: {(price * quantity).toLocaleString()}원</div>

          {/* 버튼 */}
          <div className="action-buttons">
            <button className="cart-button">장바구니</button>
            <button className="buy-now-button">바로구매</button>
          </div>
        </div>
      </div>

      {/* 하단 스크롤 섹션 */}
      <div className="scroll-section">
        <h3 className="section-title">배송 일정</h3>
        <p>배송 출발일: 화, 목</p>

        <h3 className="section-title">주문 전 꼭 읽어주세요!</h3>
        <ul>
          <li>안내사항 1</li>
          <li>안내사항 2</li>
          <li>안내사항 3</li>
        </ul>

        <h3 className="section-title">사진</h3>
        <img
          src="https://via.placeholder.com/600x300"
          alt="Additional Info"
          className="additional-image"
        />
      </div>
    </div>
  );
}

export default ProductDetail;