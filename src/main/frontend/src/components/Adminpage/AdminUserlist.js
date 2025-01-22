import React, {useEffect, useState} from "react";
import "./AdminUserlist.css";
import axios from "axios";
import {Pagination} from "react-bootstrap";

function AdminUserlist() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:18080/api/users");
        setUsers(response.data);
        console.log("Fetched users:", response.data);
      } catch (error) {
        console.error("네트워크 에러: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  },[]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(users.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="admin-userlist-container">
      <h1 className="admin-userlist-title">회원 리스트</h1>

      <table className="admin-userlist-table">
        <thead>
          <tr>
            <th>이름</th>
            <th>아이디</th>
            <th>이메일</th>
            <th>가입일시</th>
            <th>이메일 수신여부</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
        {currentUsers.map((user) => (
            <tr key={user.userId}>
              <td>{user.userName}</td>
              <td>{user.userId}</td>
              <td>{user.email}</td>
              <td>{new Date(user.joindate).toLocaleDateString()}</td>
              <td>{user.receiveEmail === 'Y' ? '예' : '아니오'}</td>
              <td>
                <button className="delete-button">x</button>
              </td>
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
}

export default AdminUserlist;