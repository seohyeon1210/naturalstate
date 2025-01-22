import React from "react";
import ProductPage from "./ProductPage";
import {Container} from "react-bootstrap";

function AllProduct() {
    return(
        <Container>
            <h5>추천 상품 페이지</h5>
            <ProductPage/>
        </Container>
    )
}

export default AllProduct;