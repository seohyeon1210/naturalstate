import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode"; // DaumPostcode 컴포넌트

function DeliveryMod({ currentAddress, onSave, onClose }) {
  const [name, setName] = useState(currentAddress.name);
  const [phone, setPhone] = useState(currentAddress.phone);
  const [address, setAddress] = useState(currentAddress.address);
  const [postcode, setPostcode] = useState(currentAddress.postcode || ""); // 우편번호 상태
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false); // 주소찾기 모달 상태



  // DaumPostcode 완료 핸들러
  const handleCompleteAddress = (data) => {
    const fullAddress = data.roadAddress || data.jibunAddress;
    setAddress(fullAddress);
    setPostcode(data.zonecode); // 우편번호 설정
    setIsAddressModalOpen(false); // 모달 닫기
  };

  // 전화번호 입력 핸들러 (숫자만 허용, 11자리로 제한)
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // 숫자 이외의 값 제거
    if (value.length <= 11) { // 11자리로 제한
      setPhone(value);
    }
  };

  // 저장 버튼 클릭 핸들러
  const handleSave = () => {
    if (!name || !phone || !address || !postcode) {
      alert("필수 입력값을 모두 입력해주세요.");
      return;
    }

    const updatedAddress = {
      ...currentAddress,
      name,
      phone,
      address,
      postcode,
    };
    onSave(updatedAddress); // 상위 컴포넌트로 전달
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          width: "400px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h2 style={{ marginBottom: "20px", fontSize: "18px", fontWeight: "bold" }}>
          배송지 수정
        </h2>

        {/* 이름 */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>
            이름
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          />
        </div>

        {/* 전화번호 */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>
            전화번호
          </label>
          <input
            type="text"
            value={phone}
            onChange={handlePhoneChange} // 숫자 입력 및 11자리 제한 적용
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
            placeholder="숫자만 입력 (11자리)"
          />
        </div>

        {/* 주소 */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>
            주소
          </label>
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="text"
              value={address}
              readOnly
              style={{
                flex: 1,
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "4px",
              }}
            />
            <button
              onClick={() => setIsAddressModalOpen(true)}
              style={{
                padding: "10px",
                backgroundColor: "#007BFF",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              주소찾기
            </button>
          </div>
        </div>

        {/* 우편번호 */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>
            우편번호
          </label>
          <input
            type="text"
            value={postcode}
            readOnly
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          />
        </div>

        {/* 저장 및 취소 버튼 */}
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
          <button
            onClick={onClose}
            style={{
              padding: "10px 20px",
              backgroundColor: "#ddd",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            취소
          </button>
          <button
            onClick={handleSave}
            style={{
              padding: "10px 20px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            저장하기
          </button>
        </div>

        {/* DaumPostcode 모달 */}
        {isAddressModalOpen && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "400px",
                padding: "20px",
                backgroundColor: "#fff",
                borderRadius: "8px",
              }}
            >
              <DaumPostcode onComplete={handleCompleteAddress} />
              <button
                onClick={() => setIsAddressModalOpen(false)}
                style={{
                  marginTop: "10px",
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#FF6347",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                닫기
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DeliveryMod;