import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const CartAmount = ({ totalItems, totalPrice, shipping = 3000 }) => {
  const finalPrice = totalPrice + shipping;

  return (
    <Card className="p-3 shadow-sm">
      <div className="d-flex justify-content-between mb-2">
        <span>총 상품금액</span>
        <span>{totalPrice.toLocaleString()}원</span>
      </div>
      <div className="d-flex justify-content-between mb-2">
        <span>총 배송비</span>
        <span>{shipping.toLocaleString()}원</span>
      </div>
      <hr />
      <div className="d-flex justify-content-between fw-bold mb-3">
        <span>결제금액</span>
        <span>{finalPrice.toLocaleString()}원</span>
      </div>
      <Button as={Link} to="/checkout" variant="primary" size="lg" className="cart-btn-block">
        {totalItems}개 상품 구매하기
      </Button>
    </Card>
  );
};

export default CartAmount;
