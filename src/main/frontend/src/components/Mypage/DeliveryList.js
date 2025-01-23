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
  const [addresses, setAddresses] = useState([]); // 배송지 목록 상태
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태
  const [isEditing, setIsEditing] = useState(false); // 수정 상태
  const [currentAddress, setCurrentAddress] = useState(null); // 수정할 주소 상태
  const [isAdding, setIsAdding] = useState(false); // 추가 상태

  // 배송지 목록 조회
  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await fetch("http://192.168.0.48:18080/api/delivery/list", {
          credentials: "include", // 세션 포함
        });
        const data = await response.json();
        console.log("API 응답 데이터:", data); // 디버깅용 로그
        if (response.ok) {
          // API 응답에서 key가 null일 경우 빈 문자열로 처리
          const sanitizedData = data.map((item) => ({
            deliveryNumber: item.deliveryNumber || "",
            deliveryUsername: item.deliveryUsername || "",
            deliveryPhone: item.deliveryPhone || "",
            deliveryAddress: item.deliveryAddress || "",
            deliveryZip: item.deliveryZip || "",
            deliveryDetailAddress: item.deliveryDetailAddress || "",
          }));
          setAddresses(sanitizedData); // 상태 업데이트
        } else {
          console.error("배송지 목록 불러오기 실패:", data);
        }
      } catch (error) {
        console.error("배송지 목록 요청 중 오류:", error);
      } finally {
        setIsLoading(false); // 로딩 상태 해제
      }
    };
    fetchAddresses();
  }, []);

  // 배송지 수정
  const handleSaveAddress = async (updatedAddress) => {
    try {
      const response = await fetch("http://192.168.0.48:18080/api/delivery/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(updatedAddress),
      });
      if (response.ok) {
        const updatedAddresses = addresses.map((item) =>
            item.deliveryNumber === updatedAddress.deliveryNumber
                ? updatedAddress
                : item
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

  // 배송지 삭제
  const handleDeleteAddress = async (deliveryNumber) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      try {
        const response = await fetch(
            `http://192.168.0.48:18080/api/delivery/delete/${deliveryNumber}`,
            {
              method: "DELETE",
              credentials: "include",
            }
        );
        if (response.ok) {
          const updatedAddresses = addresses.filter(
              (item) => item.deliveryNumber !== deliveryNumber
          );
          setAddresses(updatedAddresses);
          alert("삭제되었습니다.");
        } else {
          console.error("배송지 삭제 실패");
          alert("삭제에 실패했습니다.");
        }
      } catch (error) {
        console.error("배송지 삭제 요청 중 오류:", error);
        alert("삭제 요청 중 오류가 발생했습니다.");
      }
    }
  };

  // 수정 버튼 클릭
  const handleEditAddress = (address) => {
    setIsEditing(true);
    setCurrentAddress(address);
  };

  // 로딩 상태 표시
  if (isLoading) {
    return <div className="loading">로딩 중...</div>;
  }

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
              <tr key={item.deliveryNumber}>
                <td>{index + 1}</td>
                <td>{item.deliveryUsername}</td>
                <td>{item.deliveryAddress}</td>
                <td>{item.deliveryDetailAddress}</td>
                <td>{item.deliveryZip}</td>
                <td>{formatPhoneNumber(item.deliveryPhone)}</td>
                <td>
                  <button
                      className="delete"
                      onClick={() => handleDeleteAddress(item.deliveryNumber)}
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
                onAdd={(newAddress) => {
                  setAddresses((prev) => [...prev, newAddress]);
                  setIsAdding(false);
                }}
                onClose={() => setIsAdding(false)}
            />
        )}
      </div>
  );
}

export default DeliveryList;
