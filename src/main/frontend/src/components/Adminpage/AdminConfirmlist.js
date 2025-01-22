import React, {useEffect, useState} from "react";
import "./AdminConfirmlist.css";
import axios from "axios";
import {Pagination} from "react-bootstrap";

const AdminConfirmlist = () => {
    const [stores, setStores] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStores = async () => {
            try {
                const response = await axios.get("http://localhost:18080/api/stores")
                setStores(response.data);
                console.log("Fetched stores: ", response.data);
            } catch (error) {
                console.error("네트워크 에러: ", error);
            } finally {
                setLoading(false);
            }
        };
        fetchStores();
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentStores = stores.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(stores.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="admin-confirmlist">
            <h3>입점신청 승인 리스트</h3>
            <table>
                <thead>
                <tr>
                    <th>회사 아이디</th>
                    <th>회사명</th>
                    <th>회사 전화번호</th>
                    <th>사업자등록번호</th>
                    <th>회사 이메일</th>
                    <th>등록일</th>
                    <th>승인여부</th>
                </tr>
                </thead>
                <tbody>
                {currentStores.map((store) => (
                    <tr key={store.storeId}>
                        <td>{store.storeId}</td>
                        <td>{store.storeName}</td>
                        <td>{store.phone}</td>
                        <td>{store.taxId}</td>
                        <td>{store.email}</td>
                        <td>{store.joindate}</td>
                        <td>{store.status}</td>
                    </tr>
                ))}
                </tbody>
            </table>
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
        </div>
    );
};

export default AdminConfirmlist;