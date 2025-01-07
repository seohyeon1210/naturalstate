import React, { useState } from "react";
import DeliveryPopup from "./DeliveryPopup"; // DeliveryPopup 컴포넌트 불러오기

function DeliveryList() {
  const [addresses, setAddresses] = useState([
    { id: 1, name: "홍길동", address: "서울특별시 강남구 테헤란로 123", phone: "010-1234-5678" },
    { id: 2, name: "김철수", address: "부산광역시 해운대구 우동 456", phone: "010-5678-1234" },
  ]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // 팝업 열기
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  // 팝업 닫기
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  // 새 배송지 추가
  const handleSaveAddress = (newAddress) => {
    const updatedAddresses = [
      ...addresses,
      { id: addresses.length + 1, ...newAddress },
    ];
    setAddresses(updatedAddresses);
  };

  // 배송지 삭제
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
            <th style={{ padding: "10px", textAlign: "center" }}>전화번호</th>
            <th style={{ padding: "10px", textAlign: "center" }}>삭제</th>
          </tr>
        </thead>
        <tbody>
          {addresses.map((item) => (
            <tr key={item.id} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "10px", textAlign: "center" }}>{item.id}</td>
              <td style={{ padding: "10px" }}>{item.name}</td>
              <td style={{ padding: "10px" }}>{item.address}</td>
              <td style={{ padding: "10px", textAlign: "center" }}>{item.phone}</td>
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

      {/* 팝업 열기 버튼 */}
      <div style={{ textAlign: "right", marginTop: "20px" }}>
        <button
          onClick={openPopup}
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

      {/* 팝업 컴포넌트 */}
      <DeliveryPopup
        isOpen={isPopupOpen}
        onClose={closePopup}
        onSave={handleSaveAddress}
      />
    </div>
  );
}

export default DeliveryList;