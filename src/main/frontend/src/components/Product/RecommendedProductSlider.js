import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import axios from "axios";

const sliderSettings = {
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

function RecommendedProductSlider() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:18080/api/products");
                setProducts(response.data);
            } catch (error) {
                console.error("상품 데이터를 가져오는 데 오류가 발생했습니다.", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="product-section">
            <h3 className="section-title">✨이 상품 어때요?✨</h3>
            <Slider {...sliderSettings}>
                {products.map((product) => (
                    <div key={product.product_number} className="product-card">
                        <img
                            src={`http://localhost:18080${product.product_thumbnail_path}`}
                            alt={product.product_title}
                        />
                        <div className="product-info">
                            <p className="product-title">{product.product_title}</p>
                            <p className="product-price">
                                <span
                                    className="discount">{product.discount}</span> {product.product_price.toLocaleString()}원
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default RecommendedProductSlider;