import React, {useState, useEffect} from "react";
import BestProductSlider from "../Product/BestProductSlider";
import RecommendedProductSlider from "../Product/RecommendedProductSlider";
import DefaultImg from "../../assets/default.jpg";
import "./Main.css";

function Main() {
    const [bestProducts, setBestProducts] = useState([]);
    const [recommendedProducts, setRecommendedProducts] = useState([]);
    const [recommendedFruits, setRecommendedFruits] = useState([]);
    const [recommendedGrains, setRecommendedGrains] = useState([]);

    useEffect(() => {
        setBestProducts([
            {id: 1, image: DefaultImg, title: "베스트 상품 A", price: "16,800", discount: "20%", reviews: "5,000"},
            {id: 2, image: DefaultImg, title: "베스트 상품 B", price: "25,000", discount: "15%", reviews: "2,300"},
            {id: 3, image: DefaultImg, title: "베스트 상품 C", price: "25,000", discount: "15%", reviews: "2,300"},
            {id: 4, image: DefaultImg, title: "베스트 상품 D", price: "25,000", discount: "15%", reviews: "2,300"},
            {id: 5, image: DefaultImg, title: "베스트 상품 E", price: "25,000", discount: "15%", reviews: "2,300"},
            {id: 6, image: DefaultImg, title: "베스트 상품 F", price: "25,000", discount: "15%", reviews: "2,300"},
            {id: 7, image: DefaultImg, title: "베스트 상품 G", price: "25,000", discount: "15%", reviews: "2,300"},
            {id: 8, image: DefaultImg, title: "베스트 상품 H", price: "25,000", discount: "15%", reviews: "2,300"},
            {id: 9, image: DefaultImg, title: "베스트 상품 I", price: "25,000", discount: "15%", reviews: "2,300"}
        ]);

        setRecommendedProducts([
            {id: 10, image: DefaultImg, title: "추천 상품 A", price: "10,000", discount: "10%", reviews: "1,200"},
            {id: 11, image: DefaultImg, title: "추천 상품 B", price: "45,000", discount: "8%", reviews: "500"},
            {id: 12, image: DefaultImg, title: "추천 상품 C", price: "25,000", discount: "15%", reviews: "2,300"},
            {id: 13, image: DefaultImg, title: "추천 상품 D", price: "25,000", discount: "15%", reviews: "2,300"},
            {id: 14, image: DefaultImg, title: "추천 상품 E", price: "25,000", discount: "15%", reviews: "2,300"}
        ]);

        // setRecommendedFruits([
        //     { id: 11, image: DefaultImg, title: "사과", price: "5,000", discount: "10%", reviews: "300" },
        //     { id: 12, image: DefaultImg, title: "귤", price: "7,000", discount: "20%", reviews: "800" },
        //     { id: 13, image: DefaultImg, title: "배", price: "25,000", discount: "15%", reviews: "2,300" },
        //     { id: 14, image: DefaultImg, title: "바나나", price: "25,000", discount: "15%", reviews: "2,300" },
        //     { id: 15, image: DefaultImg, title: "딸기", price: "25,000", discount: "15%", reviews: "2,300" }
        // ]);
        //
        // setRecommendedGrains([
        //     { id: 16, image: DefaultImg, title: "현미", price: "12,000", discount: "25%", reviews: "900" },
        //     { id: 17, image: DefaultImg, title: "찹쌀", price: "15,000", discount: "18%", reviews: "700" },
        //     { id: 18, image: DefaultImg, title: "A", price: "25,000", discount: "15%", reviews: "2,300" },
        //     { id: 19, image: DefaultImg, title: "B", price: "25,000", discount: "15%", reviews: "2,300" },
        //     { id: 20, image: DefaultImg, title: "C", price: "25,000", discount: "15%", reviews: "2,300" },
        // ]);

        // API 호출
        // axios.get("http://localhost:8080/api/products/best")
        //     .then(response => setBestProducts(response.data))
        //     .catch(error => console.error("Error fetching best products:", error));

        // axios.get("http://localhost:8080/api/products/recommended")
        //     .then(response => setRecommendedProducts(response.data))
        //     .catch(error => console.error("Error fetching recommended products:", error));
    }, []);

    return (
        <div className="main-container">
            <div className="product-margin">
                <BestProductSlider products={bestProducts}/>
                <RecommendedProductSlider products={recommendedProducts}/>
            </div>
        </div>
    );
}

export default Main;