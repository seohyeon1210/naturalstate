import React, { useState, useEffect } from "react";
import "./AdminOrder.css";
import axios from "axios";
import * as XLSX from "xlsx";
import {Button} from "react-bootstrap";

function AdminOrder() {
  const [adminProducts, setAdminProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const fileName = "product_data";

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await axios.get("http://localhost:18080/api/products")
        setAdminProducts(response.data);
        console.log("Fetched stores: ", response.data);
      } catch (error) {
        console.error("네트워크 에러: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllProducts();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentAdminProducts = adminProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(adminProducts.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleDownloadExcel = () => {
    if (adminProducts.length === 0) {
      alert("No data to export!");
      return;
    }
    const worksheet = XLSX.utils.json_to_sheet(adminProducts);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Products");
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };

  return (
      <div className="admin-order-container">
        <h1 className="admin-order-title">전체 상품 리스트</h1>
        <hr/>
        <Button variant="primary" onClick={handleDownloadExcel} className="mb-4">
          엑셀 다운로드
        </Button>

        <table className="admin-order-table">
          <thead>
          <tr>
            <th>상품 번호</th>
            <th>회사명</th>
            <th>카테고리</th>
            <th>상품명</th>
            <th>상품 가격</th>
            <th>게시일</th>
          </tr>
          </thead>
          <tbody>
          {currentAdminProducts.map((product) => (
              <tr key={product.product_number}>
                <td>{product.product_number}</td>
                <td>{product.storeid}</td>
                <td>{product.product_category}</td>
                <td>{product.product_title}</td>
                <td>{product.product_price.toLocaleString()}원</td>
                <td>{new Date(product.product_created_date).toLocaleDateString()}</td>
              </tr>
          ))}
          </tbody>
        </table>
        
        <div className="pagination">
          <button
              className="pagination-button"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
          >
            ◀
          </button>
          {Array.from({length: totalPages}, (_, index) => index + 1).map((page) => (
              <button
                  key={page}
                  className={`pagination-button ${currentPage === page ? "active" : ""}`}
                  onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
          ))}
          <button
              className="pagination-button"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
          >
            ▶
          </button>
        </div>
      </div>
  );
}

export default AdminOrder;