import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import {Link} from "react-router-dom";
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
                const response = await axios.get("http://192.168.0.48:18080/api/products");
                setProducts(response.data);
            } catch (error) {
                console.error("상품 데이터를 가져오는 데 오류가 발생했습니다.", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="slider-section">
            <h3 className="slider-title">✨이 상품 어때요?✨</h3>
            <Slider {...sliderSettings}>
                {products.map((product) => (
                    <div key={product.product_number} className="slider-card">
                        <Link to={`/product/${product.product_number}`} className="slider-link">
                            <img
                                src={`http://192.168.0.48:18080${product.product_thumbnail_path}`}
                                alt={product.product_title}
                            />
                            <div className="slider-info">
                                <p className="slider-title-text">{product.product_title}</p>
                                <p className="slider-price">
                                <span className="slider-discount">
                                    {product.discount}
                                </span>{" "}
                                    {product.product_price.toLocaleString()}원
                                </p>
                            </div>
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default RecommendedProductSlider;