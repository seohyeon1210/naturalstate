import React, { useState } from "react";
import DeliveryMod from "./DeliveryMod";
import DeliveryPopup from "./DeliveryPopup";
import "./DeliveryList.css";

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
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "김창섭",
      address: "서울 서초구 언남길 5",
      detailAddress: "101호",
      postcode: "06608",
      phone: "898-9800-0000",
    },
    {
      id: 2,
      name: "강원기",
      address: "부산광역시 해운대구 우동 456",
      detailAddress: "202호",
      postcode: "48060",
      phone: "010-5678-1234",
    },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [currentAddress, setCurrentAddress] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  const handleEditAddress = (address) => {
    setIsEditing(true);
    setCurrentAddress(address);
  };

  const handleSaveAddress = (updatedAddress) => {
    const updatedAddresses = addresses.map((item) =>
      item.id === updatedAddress.id ? updatedAddress : item
    );
    setAddresses(updatedAddresses);
    setIsEditing(false);
  };

  const handleDeleteAddress = (id) => {
    const updatedAddresses = addresses.filter((item) => item.id !== id);
    setAddresses(updatedAddresses);
  };

  const handleAddAddress = (newAddress) => {
    const newId = addresses.length ? addresses[addresses.length - 1].id + 1 : 1;
    const updatedAddresses = [...addresses, { id: newId, ...newAddress }];
    setAddresses(updatedAddresses);
    setIsAdding(false);
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
          {addresses.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.detailAddress}</td>
              <td>{item.postcode}</td>
              <td>{item.phone}</td>
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