import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col, Pagination, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import './ProductPage.css';
import axios from "axios";
import * as XLSX from "xlsx";

function ProductPage() {
    const [products, setProducts] = useState([])
    const { category } = useParams();
    const fileName = "product_data";

    const categoryMapping = {
        "fruits": 1,
        "vegetables": 2,
        "grains": 3,
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                if (!category) {
                    console.log("카테고리 없음, 전체 상품 조회");
                    const response = await axios.get(`http://192.168.0.48:18080/api/products`);
                    setProducts(response.data);
                    return;
                }

                const categoryId = categoryMapping[category];
                console.log("URL category:", category);
                console.log("Mapped categoryId:", categoryId);
                if (!categoryId) {
                    console.error("Invalid category: ", category);
                    setProducts([]);
                    return;
                }

                const response = await axios.get(`http://192.168.0.48:18080/api/products?category=${categoryId}`);
                console.log("Response Data:", response.data);
                setProducts(response.data);
            } catch (error) {
                console.error("네트워크 에러: ", error);
            }
        };
        fetchProducts();
    }, [category]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(products.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // 엑셀 다운로드 함수
    const handleDownloadExcel = () => {
        if (products.length === 0) {
            alert("No data to export!");
            return;
        }
        const worksheet = XLSX.utils.json_to_sheet(products);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Products");
        XLSX.writeFile(workbook, `${fileName}.xlsx`);
    };

    return (
        <Container>
            <h5 className="my-4">{
                category === "fruits" ? "과일 상품" :
                    category === "grains" ? "곡류 상품" :
                        category === "vegetables" ? "야채·채소 상품" :
                            `${category} 상품`
            }</h5>
            <hr />
            <Button variant="primary" onClick={handleDownloadExcel} className="mb-4">
                엑셀 다운로드
            </Button>

            <Row>
                {currentProducts.map((product) => (
                    <Col md={3} key={product.product_number} className="mb-4">
                        <Link to={`/product/${product.product_number}`} className="text-decoration-none">
                            <Card className="product-card">
                                <div className="card-img-container">
                                    <Card.Img
                                        variant="top"
                                        src={`http://192.168.0.48:18080${product.product_thumbnail_path.startsWith('/') ? '' : '/'}${product.product_thumbnail_path}`}
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
                        </Link>
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
    );
}

export default ProductPage;
