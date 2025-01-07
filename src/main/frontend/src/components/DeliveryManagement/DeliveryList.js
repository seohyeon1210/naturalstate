import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function DeliveryList() {
  const [addresses, setAddresses] = useState([
    { id: 1, name: "홍길동", address: "서울특별시 강남구 테헤란로 123" },
    { id: 2, name: "김철수", address: "부산광역시 해운대구 우동 456" },
  ]);
  const [formData, setFormData] = useState({ name: "", address: "" });
  const navigate = useNavigate();

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 배송지 추가 핸들러
  const handleAddAddress = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.address) {
      alert("모든 필드를 입력해주세요!");
      return;
    }
    const newAddress = {
      id: addresses.length + 1,
      name: formData.name,
      address: formData.address,
    };
    setAddresses([...addresses, newAddress]);
    setFormData({ name: "", address: "" });
  };

  // 배송지 삭제 핸들러
  const handleDeleteAddress = (id) => {
    const updatedAddresses = addresses.filter((item) => item.id !== id);
    setAddresses(updatedAddresses);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>배송지 관리</h1>

      {/* 배송지 목록 */}
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid #ccc" }}>
            <th style={{ padding: "10px", textAlign: "center" }}>번호</th>
            <th style={{ padding: "10px", textAlign: "left" }}>이름</th>
            <th style={{ padding: "10px", textAlign: "left" }}>주소</th>
            <th style={{ padding: "10px", textAlign: "center" }}>삭제</th>
          </tr>
        </thead>
        <tbody>
          {addresses.map((item) => (
            <tr key={item.id} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "10px", textAlign: "center" }}>{item.id}</td>
              <td style={{ padding: "10px" }}>{item.name}</td>
              <td style={{ padding: "10px" }}>{item.address}</td>
              <td style={{ padding: "10px", textAlign: "center" }}>
                <button
                  onClick={() => handleDeleteAddress(item.id)}
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "#FF6347",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 배송지 추가 폼 */}
      <form onSubmit={handleAddAddress} style={{ marginTop: "20px", maxWidth: "600px", margin: "0 auto" }}>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>이름:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>주소:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
          />
        </div>
        <div style={{ textAlign: "right" }}>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            배송지 추가
          </button>
        </div>
      </form>
    </div>
  );
}

export default DeliveryList;