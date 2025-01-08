import React from "react";
import { Card, Button } from "react-bootstrap";

const CartAmount = ({ totalItems, totalPrice, discount, shipping }) => {
    const finalPrice = totalPrice + shipping - discount;

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
            <div className="d-flex justify-content-between mb-2">
                <span>총 할인금액</span>
                <span>-{discount.toLocaleString()}원</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between fw-bold mb-3">
                <span>결제금액</span>
                <span>{finalPrice.toLocaleString()}원</span>
            </div>
            <Button variant="primary" size="lg" className="btn-block">
                {totalItems}개 상품 구매하기
            </Button>
        </Card>
    );
};

export default CartAmount;
