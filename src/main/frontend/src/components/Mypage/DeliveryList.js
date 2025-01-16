import React, { useState, useEffect } from "react";
import DeliveryMod from "./DeliveryMod";
import DeliveryPopup from "./DeliveryPopup";
import "./DeliveryList.css";

// 전화번호 포맷팅 함수
const formatPhoneNumber = (phone) => {
  if (!phone) return "";
  const cleaned = phone.replace(/[^0-9]/g, "");
  const match = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/);
  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`;
  }
  return phone;
};

function DeliveryList() {
  const [addresses, setAddresses] = useState([]); // 배송지 목록
  const [isEditing, setIsEditing] = useState(false); // 수정 상태
  const [currentAddress, setCurrentAddress] = useState(null); // 현재 수정 중인 주소
  const [isAdding, setIsAdding] = useState(false); // 추가 상태

  // 세션 데이터 불러오기
  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await fetch("http://localhost:18080/api/delivery/list", {
          credentials: "include", // 세션 정보 포함
        });
        const data = await response.json();
        if (response.ok) {
          setAddresses(data); // 배송지 목록 설정
        } else {
          console.error("배송지 목록 불러오기 실패:", data);
        }
      } catch (error) {
        console.error("배송지 목록 요청 중 오류:", error);
      }
    };
    fetchAddresses();
  }, []);

  // 수정 저장 핸들러
  const handleSaveAddress = async (updatedAddress) => {
    try {
      const response = await fetch("http://localhost:18080/api/delivery/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(updatedAddress),
      });
      if (response.ok) {
        // 성공적으로 업데이트된 경우 로컬 상태도 업데이트
        const updatedAddresses = addresses.map((item) =>
          item.id === updatedAddress.id ? updatedAddress : item
        );
        setAddresses(updatedAddresses);
        setIsEditing(false);
      } else {
        console.error("배송지 수정 실패");
      }
    } catch (error) {
      console.error("배송지 수정 요청 중 오류:", error);
    }
  };

  // 삭제 핸들러
  const handleDeleteAddress = async (id) => {
    try {
      const response = await fetch(`http://localhost:18080/api/delivery/delete/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (response.ok) {
        // 성공적으로 삭제된 경우 로컬 상태 업데이트
        const updatedAddresses = addresses.filter((item) => item.id !== id);
        setAddresses(updatedAddresses);
      } else {
        console.error("배송지 삭제 실패");
      }
    } catch (error) {
      console.error("배송지 삭제 요청 중 오류:", error);
    }
  };

  // 추가 핸들러
  const handleAddAddress = async (newAddress) => {
    try {
      const response = await fetch("http://localhost:18080/api/delivery/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(newAddress),
      });
      const addedAddress = await response.json();
      if (response.ok) {
        // 성공적으로 추가된 경우 로컬 상태 업데이트
        setAddresses((prevAddresses) => [...prevAddresses, addedAddress]);
        setIsAdding(false);
      } else {
        console.error("배송지 추가 실패");
      }
    } catch (error) {
      console.error("배송지 추가 요청 중 오류:", error);
    }
  };

  // 수정 시작 핸들러
  const handleEditAddress = (address) => {
    setIsEditing(true);
    setCurrentAddress(address);
  };

  return (
    <div className="delivery-container">
      <h1 className="delivery-manage">배송지 관리</h1>
      <table className="delivery-table">
        <thead className="delivery-thead">
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>주소</th>
            <th>상세주소</th>
            <th>우편번호</th>
            <th>전화번호</th>
            <th>삭제/수정</th>
          </tr>
        </thead>
        <tbody>
          {addresses.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.userName}</td>
              <td>{item.address}</td>
              <td>{item.detailAddress}</td>
              <td>{item.zip}</td>
              <td>{formatPhoneNumber(item.phone)}</td>
              <td>
                <button
                  className="delete"
                  onClick={() => handleDeleteAddress(item.id)}
                >
                  삭제
                </button>
                <button
                  className="edit"
                  onClick={() => handleEditAddress(item)}
                >
                  수정
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="add-container">
        <button className="add" onClick={() => setIsAdding(true)}>
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
