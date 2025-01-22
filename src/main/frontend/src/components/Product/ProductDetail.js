import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./ProductDetail.css";
import TangerineImage from "../../images/감귤한박스.png";
import TangerineDescImage from "../../images/감귤설명1.jpg";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedOption, setSelectedOption] = useState(""); // 옵션 선택 상태
  const [additionalOption, setAdditionalOption] = useState(""); // 추가 옵션 상태
  const [quantity, setQuantity] = useState(1); // 수량 상태
  const [price, setPrice] = useState(17900); // 가격 상태 (기본값)

  useEffect(() => {
    console.log("Fetching product ID:", productId);

    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:18080/api/product/${productId}`);
        const data = await response.json();
        setProduct(data || { options: [] });
        setPrice(data.product_price || 17900); // 가격 설정
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (!product) {
    return <div>상품 정보를 불러오는 중...</div>;
  }

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

  const handleAddToCart = async () => {
    if (!selectedOption) {
      alert("옵션을 선택해주세요.");
      return;
    }

    const cartItem = {
      userId: "user123", // 현재 로그인한 사용자 ID (임시값)
      productNumber: productId, // 상품 고유번호
      productTitle: product.product_title || "[첫 구매 할인] 감귤 1박스",
      productPrice: price,
      productThumbnailPath: product.product_thumbnail_path || "/images/감귤한박스.png",
      itemOption: selectedOption,
      quantity: quantity,
    };

    try {
      const response = await fetch("http://localhost:18080/api/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cartItem),
      });

      if (response.ok) {
        alert("장바구니에 추가되었습니다.");
      } else {
        alert("로그인 정보가 없습니다");
      }
    } catch (error) {
      console.error("API 요청 중 오류 발생:", error);
      alert("오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const handleBuyNow = () => {
    alert("바로구매 기능은 아직 구현되지 않았습니다.");
  };

  const totalPrice = price * quantity;

  return (
    <div>
      {/* 상단 상품 정보 */}
      <div className="detail-container">
        {/* 왼쪽 이미지 영역 */}
        <div className="detail-image-section">
          <img
            src={`http://localhost:18080${product.product_thumbnail_path?.startsWith('/') ? '' : '/'}${product.product_thumbnail_path || TangerineImage}`}
            alt="Product"
            className="detail-main-image"
          />
        </div>

        {/* 오른쪽 상세 정보 영역 */}
        <div className="detail-detail-section">
          <h2 className="detail-title">{product.product_title }</h2>
          <p className="detail-brand">{product.product_brand }</p>
          <p className="detail-price">{price.toLocaleString()}원</p>




          {/* 옵션 선택 */}
          <div className="detail-option">
            <label className="detail-label">선택</label>
            <select
              value={selectedOption}
              onChange={handleOptionChange}
              className="detail-select"
            >
              <option value="">옵션을 선택해주세요</option>
              {product.options && Array.isArray(product.options) ? (
                product.options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))
              ) : (
                <option>옵션 없음</option>
              )}
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
            총 금액: {totalPrice.toLocaleString()}원
          </div>

          {/* 버튼 */}
          <div className="detail-action-buttons">
            <button className="detail-cart-button" onClick={handleAddToCart}>
              장바구니
            </button>
            <Button
                          as={Link}
                          to={{
                            pathname: "/sandbox",
                            state: {
                              productId,
                              selectedOption,
                              quantity,
                              totalPrice,
                            },
                          }}
                          variant="primary"
                          className="detail-buy-now-button"
                        >
                          바로구매
                        </Button>
          </div>
        </div>
      </div>

      {/* 하단 스크롤 섹션 */}
      <div className="detail-scroll-section">
        <h3 className="detail-section-title">배송 일정</h3>


        <h3 className="detail-section-title">주문 전 꼭 읽어주세요!</h3>
        <ul>
          <li>모든 상품은 산지 직송으로 배송되며, 배송지 도착까지 1-3일 정도 소요됩니다!</li>
          <li>
            교환, 환불은 상품 도착일로부터 구매자가 상품에 이상이 있는 걸 발견하고 고객센터에 교환 및 환불을 요청하면 당사 정책에 따라 절차를 진행합니다.
          </li>
        </ul>

        <h3 className="detail-section-title">상품 설명</h3>
        <img
          src={`http://localhost:18080${product.product_detail_path || TangerineDescImage}`}
          alt="Additional Info"
          className="detail-additional-image"
        />

      </div>
    </div>
  );
}

export default ProductDetail;
