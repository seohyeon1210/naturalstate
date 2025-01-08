import React, { useState } from 'react';
import { Card, Container, Row, Col, Pagination } from 'react-bootstrap';
import './ProductPage.css';
import DefaultImg from "../../assets/default.jpg";

function ProductPage() {
    const [products] = useState([
        {
            id: 1,
            name: '싱싱한 사과',
            discount: '55%',
            price: '26,500원',
            originalPrice: '59,000원',
            rating: '4.9',
            reviews: '리뷰 10',
            image: DefaultImg,
        },
        {
            id: 2,
            name: '맛있는 나물',
            discount: '51%',
            price: '38,900원',
            originalPrice: '79,000원',
            rating: '4.8',
            reviews: '리뷰 642',
            image: DefaultImg,
        },
        {
            id: 3,
            name: '곱빼기 바나나',
            discount: '37%',
            price: '35,900원',
            originalPrice: '57,000원',
            rating: '4.8',
            reviews: '리뷰 44,451',
            image: DefaultImg,
        },
        {
            id: 4,
            name: '[첫 구매 할인] 감귤 1박스',
            discount: '45%',
            price: '109,000원',
            originalPrice: '199,000원',
            rating: '4.7',
            reviews: '리뷰 21,193',
            image: DefaultImg,
        },
        {
            id: 5,
            name: '아삭한 고구마',
            discount: '45%',
            price: '109,000원',
            originalPrice: '199,000원',
            rating: '4.7',
            reviews: '리뷰 21,193',
            image: DefaultImg,
        },
        {
            id: 6,
            name: '호박 고구마',
            discount: '45%',
            price: '109,000원',
            originalPrice: '199,000원',
            rating: '4.7',
            reviews: '리뷰 21,193',
            image: DefaultImg,
        },
        {
            id: 7,
            name: '감나무에서 딴 감',
            discount: '45%',
            price: '109,000원',
            originalPrice: '199,000원',
            rating: '4.7',
            reviews: '리뷰 21,193',
            image: DefaultImg,
        },
        {
            id: 8,
            name: '밥상 메뉴는 봄나물',
            discount: '45%',
            price: '109,000원',
            originalPrice: '199,000원',
            rating: '4.7',
            reviews: '리뷰 21,193',
            image: DefaultImg,
        },
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(products.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <Container>
            <h5 className="my-4">전체 보기</h5>
            <hr/>
            <Row>
                {currentProducts.map((product) => (
                    <Col md={3} key={product.id} className="mb-4">
                        <Card className="product-card">
                            <div className="card-img-container">
                                <Card.Img variant="top" src={product.image} alt={product.name} className="product-image" />
                            </div>
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>
                                    <span className="discount">{product.discount}</span>
                                    <br />
                                    <span className="text-muted">{product.originalPrice}</span>{' '}
                                    <strong>{product.price}</strong>
                                    <br />
                                    <small>평점: {product.rating} / {product.reviews}</small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Pagination className="justify-content-center">
                {[...Array(totalPages).keys()].map((number) => (
                    <Pagination.Item
                        key={number + 1}
                        active={number + 1 === currentPage}
                        onClick={() => handlePageChange(number + 1)}
                    >
                        {number + 1}
                    </Pagination.Item>
                ))}
            </Pagination>
        </Container>
    )
}

export default ProductPage;
