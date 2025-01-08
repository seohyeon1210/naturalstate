import React from "react";
import ProductPage from "./ProductPage";
import {Container} from "react-bootstrap";

function BestProduct() {
    return (
        <Container>
            <h5>베스트 상품 페이지</h5>
            <ProductPage/>
        </Container>
    )
}

export default BestProduct;