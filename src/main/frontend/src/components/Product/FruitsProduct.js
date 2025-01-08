import React from "react";
import ProductPage from "./ProductPage";
import {Container} from "react-bootstrap";

function FruitsProduct() {
    return(
        <Container>
            <h5>과일 상품 페이지</h5>
            <ProductPage/>
        </Container>
    )
}

export default FruitsProduct;