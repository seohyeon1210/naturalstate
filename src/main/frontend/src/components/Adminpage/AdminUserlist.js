import React, { useState } from "react";
import "./AdminUserlist.css";

function AdminUserlist() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "이상형",
      username: "sang1111",
      email: "sang123@naver.com",
      joinDate: "2024-12-19",
      emailConsent: "Y",
    },
    {
      id: 2,
      name: "김건우",
      username: "gungun2222",
      email: "shogun123@naver.com",
      joinDate: "2024-12-17",
      emailConsent: "Y",
    },
    {
      id: 3,
      name: "박수신",
      username: "susin3333",
      email: "qwer123@naver.com",
      joinDate: "2024-12-31",
      emailConsent: "N",
    },
    {
      id: 4,
      name: "김서현",
      username: "seohyeon1210",
      email: "seo123@naver.com",
      joinDate: "2024-12-26",
      emailConsent: "Y",
    },
  ]);

  const handleDelete = (id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      setUsers(users.filter((user) => user.id !== id));
    }
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
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.joinDate}</td>
              <td>{user.emailConsent}</td>
              <td>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(user.id)}
                >
                  x
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminUserlist;