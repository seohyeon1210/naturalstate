import React, { useState } from "react";

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
    <div style={{ display: "flex", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* 왼쪽 이미지 영역 */}
      <div style={{ flex: 1, paddingRight: "20px" }}>
        <img
          src="https://via.placeholder.com/400"
          alt="Product"
          style={{ width: "100%", borderRadius: "8px" }}
        />
        {/* 썸네일 이미지 */}
        <div style={{ display: "flex", marginTop: "10px", gap: "10px" }}>
          {[1, 2, 3, 4].map((item) => (
            <img
              key={item}
              src={`https://via.placeholder.com/100?text=Img${item}`}
              alt={`Thumbnail ${item}`}
              style={{ width: "80px", height: "80px", borderRadius: "8px", cursor: "pointer" }}
            />
          ))}
        </div>
      </div>

      {/* 오른쪽 상세 정보 영역 */}
      <div style={{ flex: 1.5 }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>
          New Color 모던 트롤리 스윙 3단 빨래바구니
        </h2>
        <p style={{ fontSize: "14px", color: "#888", marginBottom: "10px" }}>
          네이버리빙 | 브랜드
        </p>
        <p style={{ fontSize: "20px", fontWeight: "bold", color: "#FF5722", marginBottom: "20px" }}>
          17,900원
        </p>

        {/* 혜택 정보 */}
        <div style={{ marginBottom: "20px", fontSize: "14px", lineHeight: "1.5" }}>
          <p>혜택: 최대 10% 적립 (토스페이)</p>
          <p>배송: 무료배송 | 지금 주문시 내일 도착 가능</p>
        </div>

        {/* 옵션 선택 */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>
            선택
          </label>
          <select
            value={selectedOption}
            onChange={handleOptionChange}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              fontSize: "14px",
            }}
          >
            <option value="">옵션을 선택해주세요</option>
            <option value="option1">옵션 1</option>
            <option value="option2">옵션 2</option>
          </select>
        </div>

        {/* 추가 옵션 선택 */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>
            추가상품 (선택)
          </label>
          <select
            value={additionalOption}
            onChange={handleAdditionalOptionChange}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              fontSize: "14px",
            }}
          >
            <option value="">추가상품을 선택해주세요</option>
            <option value="additional1">추가상품 1</option>
            <option value="additional2">추가상품 2</option>
          </select>
        </div>

        {/* 수량 선택 */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
          <button
            onClick={() => handleQuantityChange("decrease")}
            style={{
              padding: "10px",
              backgroundColor: "#ddd",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            -
          </button>
          <span style={{ margin: "0 10px", fontSize: "16px" }}>{quantity}</span>
          <button
            onClick={() => handleQuantityChange("increase")}
            style={{
              padding: "10px",
              backgroundColor: "#ddd",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            +
          </button>
        </div>

        {/* 총 금액 */}
        <div style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "20px" }}>
          총 금액: {(price * quantity).toLocaleString()}원
        </div>

        {/* 버튼 */}
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            style={{
              flex: 1,
              padding: "15px",
              backgroundColor: "#FFD700",
              border: "none",
              borderRadius: "4px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            장바구니
          </button>
          <button
            style={{
              flex: 1,
              padding: "15px",
              backgroundColor: "#FF5722",
              color: "white",
              border: "none",
              borderRadius: "4px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            바로구매
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
