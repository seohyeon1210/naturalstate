import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import MainBannerImage from '../../assets/Main/001.png';
import MainBannerImage2 from '../../assets/Main/002.png';
import './MainBanner.css';

function MainBanner() {
    return (
        <Carousel className="custom-carousel">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={MainBannerImage}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={MainBannerImage2}
                    alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default MainBanner;
