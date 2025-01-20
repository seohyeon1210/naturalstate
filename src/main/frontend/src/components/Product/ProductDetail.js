import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css"; // 분리된 CSS 파일 import

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    console.log("Fetching product ID:", productId);
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:18080/api/product/${productId}`);
        const data = await response.json();
        // setProduct(data);
        setProduct(data || { options: [] });
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    fetchProductDetails();
  }, [productId]);

  if (!product) {
    return <div>상품 정보를 불러오는 중...</div>;
  }

  return (
      <div>
        <div className="detail-container">
          <div className="detail-image-section">
            <img
                src={`http://localhost:18080${product.product_thumbnail_path.startsWith('/') ? '' : '/'}${product.product_thumbnail_path}`}
                alt="Product"
                className="detail-main-image"
            />
          </div>

          <div className="detail-detail-section">
            <h2 className="detail-title">{product.product_title}</h2>
            <p className="detail-brand">{product.product_brand}</p>
            <p className="detail-price">{product.product_price.toLocaleString()}원</p>

            <div className="detail-benefits">
              <p>혜택: {product.benefits}</p>
              <p>배송: {product.shipping_info}</p>
            </div>


            <div className="detail-option">
              <label className="detail-label">선택</label>
              <select className="detail-select">
                {product.options && Array.isArray(product.options) ? (
                    product.options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))
                ) : (
                    <option>옵션 없음</option>)}
              </select>
            </div>


            <div className="detail-quantity-control">
              <button className="detail-quantity-button">-</button>
              <span className="detail-quantity-display">1</span>
              <button className="detail-quantity-button">+</button>
            </div>


            <div className="detail-total-price">
              총 금액: {(product.product_price * 1).toLocaleString()}원
            </div>


            <div className="detail-action-buttons">
              <button className="detail-cart-button">장바구니</button>
              <button className="detail-buy-now-button">바로구매</button>
            </div>
          </div>
        </div>

        {product.product_detail_path && (
            <div className="detail-image-section">
              <img
                  src={`http://localhost:18080${product.product_detail_path.startsWith('/') ? '' : '/'}${product.product_detail_path}`}
                  alt="Product Detail"
                  className="detail-product-detail-image"
              />
            </div>
        )}
      </div>
  );
}

export default ProductDetail;