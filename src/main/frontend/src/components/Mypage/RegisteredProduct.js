import React, { useState } from "react";
import "./RegisteredProduct.css";
import sweetPotatoImage from '../../images/군고구마.png';
import strawBerryImage from '../../images/딸기.jpg';
import babyPumpkinImage from '../../images/애호박.jpg'

function RegisteredProduct() {
  const [products, setProducts] = useState([
    {
      id: 1,
      date: "24-12-19 21:52",
      productNumber: "P12345",
      productName: "맛있는 군고구마",
      image: sweetPotatoImage,
      productPrice: 30000,
      totalPrice: 30000,
    },
    {
      id: 2,
      date: "24-12-20 23:12",
      productNumber: "P12346",
      productName: "꿀맛나는 딸기",
      image: strawBerryImage,
      productPrice: 20000,
      totalPrice: 60000,
    },
    {
      id: 3,
      date: "24-12-25 12:25",
      productNumber: "P12347",
      productName: "친환경 애호박",
      image: babyPumpkinImage,
      productPrice: 5000,
      totalPrice: 10000,
    },
  ]);

  return (
    <div className="registered-product-container">
      <h1 className="registered-product-title">등록한 상품 리스트</h1>

      <table className="registered-product-table">
        <thead>
          <tr>
            <th>번호</th>
            <th>등록일시</th>
            <th>상품 번호</th>
            <th>상품</th>
            <th>상품금액</th>
            <th>총주문액</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.date}</td>
              <td>{product.productNumber}</td>
              <td>
                <img src={product.image} alt="상품 이미지" />
                <br />
                {product.productName}
              </td>
              <td>{product.productPrice.toLocaleString()}원</td>
              <td>{product.totalPrice.toLocaleString()}원</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RegisteredProduct;