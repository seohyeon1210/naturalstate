import React, { useState } from "react";
import DeliveryMod from "./DeliveryMod";
import DeliveryPopup from "./DeliveryPopup";

// 전화번호 포맷팅 함수
const formatPhoneNumber = (phone) => {
  if (!phone) return "";
  const cleaned = phone.replace(/[^0-9]/g, ""); // 숫자 이외의 값 제거
  const match = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/);
  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`;
  }
  return phone; // 11자리 아닌 경우 그대로 반환
};

function DeliveryList() {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "홍길동",
      address: "서울 서초구 언남길 5",
      postcode: "06608",
      phone: "898-9800-0000",
    },
    {
      id: 2,
      name: "김철수",
      address: "부산광역시 해운대구 우동 456",
      postcode: "48060",
      phone: "010-5678-1234",
    },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [currentAddress, setCurrentAddress] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  // 수정 버튼 클릭 핸들러
  const handleEditAddress = (address) => {
    setIsEditing(true);
    setCurrentAddress(address);
  };

  // 수정 완료 핸들러
  const handleSaveAddress = (updatedAddress) => {
    const updatedAddresses = addresses.map((item) =>
      item.id === updatedAddress.id ? updatedAddress : item
    );
    setAddresses(updatedAddresses);
    setIsEditing(false);
  };

  // 삭제 버튼 클릭 핸들러
  const handleDeleteAddress = (id) => {
    const updatedAddresses = addresses.filter((item) => item.id !== id);
    setAddresses(updatedAddresses);
  };

  // 추가 완료 핸들러
  const handleAddAddress = (newAddress) => {
    const newId = addresses.length ? addresses[addresses.length - 1].id + 1 : 1;
    const updatedAddresses = [
      ...addresses,
      { id: newId, ...newAddress },
    ];
    setAddresses(updatedAddresses);
    setIsAdding(false);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>배송지 관리</h1>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "20px",
        }}
      >
        <thead>
          <tr style={{ borderBottom: "2px solid #ddd" }}>
            <th style={{ padding: "10px", textAlign: "center" }}>번호</th>
            <th style={{ padding: "10px", textAlign: "left" }}>이름</th>
            <th style={{ padding: "10px", textAlign: "left" }}>주소</th>
            <th style={{ padding: "10px", textAlign: "center" }}>우편번호</th>
            <th style={{ padding: "10px", textAlign: "center" }}>전화번호</th>
            <th style={{ padding: "10px", textAlign: "center" }}>액션</th>
          </tr>
        </thead>
        <tbody>
          {addresses.map((item) => (
            <tr key={item.id} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "10px", textAlign: "center" }}>{item.id}</td>
              <td style={{ padding: "10px" }}>{item.name}</td>
              <td style={{ padding: "10px" }}>{item.address}</td>
              <td style={{ padding: "10px", textAlign: "center" }}>{item.postcode}</td>
              <td style={{ padding: "10px", textAlign: "center" }}>{item.phone}</td>
              <td style={{ padding: "10px", textAlign: "center" }}>
                <button
                  onClick={() => handleDeleteAddress(item.id)}
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "#FF6347",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    marginRight: "10px",
                    cursor: "pointer",
                  }}
                >
                  삭제
                </button>
                <button
                  onClick={() => handleEditAddress(item)}
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "#007BFF",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  수정
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ textAlign: "right" }}>
        <button
          onClick={() => setIsAdding(true)}
          style={{
            padding: "10px 20px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          배송지 추가
        </button>
      </div>

      {isEditing && (
        <DeliveryMod
          currentAddress={currentAddress}
          onSave={handleSaveAddress}
          onClose={() => setIsEditing(false)}
        />
      )}

      {isAdding && (
        <DeliveryPopup
          onAdd={handleAddAddress}
          onClose={() => setIsAdding(false)}
        />
      )}
    </div>
  );
}

export default DeliveryList;