import React from "react";
import Slider from "react-slick";

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

function RecommendedProductSlider({ products }) {
    return (
        <div className="product-section">
            <h3 className="section-title">✨이 상품 어때요?✨</h3>
            <Slider {...sliderSettings}>
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.title} />
                        <div className="product-info">
                            <p className="product-title">{product.title}</p>
                            <p className="product-price">
                                <span className="discount">{product.discount}</span> {product.price}원
                            </p>
                            <p className="product-reviews">리뷰 {product.reviews}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default RecommendedProductSlider;