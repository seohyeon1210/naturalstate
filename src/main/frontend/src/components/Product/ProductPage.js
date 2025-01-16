import React, {useEffect, useState} from 'react';
import { Card, Container, Row, Col, Pagination } from 'react-bootstrap';
import './ProductPage.css';
import DefaultImg from "../../assets/default.jpg";
import axios from "axios";

function ProductPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:18080/api/products");
                setProducts(response.data);
            } catch (error) {
                console.error("네트워크 에러: ", error);
            }
        };
        fetchProducts();
    }, []);


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
                    <Col md={3} key={product.product_number} className="mb-4">
                        <Card className="product-card">
                            <div className="card-img-container">
                                <Card.Img
                                    variant="top"
                                    src={`http://localhost:18080${product.product_thumbnail_path.startsWith('/') ? '' : '/'}${product.product_thumbnail_path}`}
                                    alt={product.product_title}
                                    className="product-image"
                                />
                            </div>
                            <Card.Body>
                                <Card.Title>{product.product_title}</Card.Title>
                                <Card.Text>
                                    <strong>{product.product_price.toLocaleString()}원</strong>
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
