import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    console.log("Fetching product ID:", productId);
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:18080/api/product/${productId}`);
        const data = await response.json();
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

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const totalPrice = product.product_price * quantity;

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
              <Button variant="primary" className="detail-quantity-button" onClick={decreaseQuantity}>-</Button>
              <span className="detail-quantity-display">{quantity}</span>
              <Button variant="primary" className="detail-quantity-button" onClick={increaseQuantity}>+</Button>
            </div>

            <div className="detail-total-price">
              총 금액: {totalPrice.toLocaleString()}원
            </div>


            <div className="detail-action-buttons">
              <Button className="detail-cart-button">장바구니</Button>
              <Button as={Link} to="/sandbox" variant="primary" className="detail-buy-now-button">바로구매</Button>
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