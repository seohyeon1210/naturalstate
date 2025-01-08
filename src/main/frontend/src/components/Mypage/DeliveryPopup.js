import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";

function DeliveryPopup({ isOpen, onClose, onSave }) {
  const [formData, setFormData] = useState({
    country: "대한민국",
    name: "",
    postalCode: "",
    address: "",
    detailAddress: "",
    email: "",
    phone: "",
    memo: "",
  });
  const [isAddressPopupOpen, setIsAddressPopupOpen] = useState(false); // 주소 검색 팝업 상태

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 주소 검색 팝업 완료 핸들러
  const handleCompleteAddress = (data) => {
    const fullAddress = data.address;
    const postalCode = data.zonecode;
    setFormData({ ...formData, address: fullAddress, postalCode });
    setIsAddressPopupOpen(false); // 팝업 닫기
  };

  // 저장 핸들러
  const handleSave = () => {
    if (!formData.name || !formData.postalCode || !formData.address || !formData.phone || !formData.email) {
      alert("필수 항목을 입력해주세요.");
      return;
    }
    onSave(formData); // 상위 컴포넌트로 데이터 전달
    onClose(); // 팝업 닫기
  };

  if (!isOpen) return null; // 팝업이 열려있지 않으면 렌더링하지 않음

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px",
          width: "500px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>배송지 변경</h2>
        <form>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>국가 *</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              readOnly
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                backgroundColor: "#f9f9f9",
              }}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>이름 *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>

          <div style={{ marginBottom: "10px", display: "flex", gap: "10px" }}>
            <div style={{ flex: 2 }}>
              <label style={{ display: "block", marginBottom: "5px" }}>우편번호 *</label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                placeholder="우편번호"
                readOnly
                style={{
                  width: "100%",
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  backgroundColor: "#f9f9f9",
                }}
              />
            </div>
            <button
              type="button"
              onClick={() => setIsAddressPopupOpen(true)}
              style={{
                flex: 1,
                padding: "8px",
                backgroundColor: "#333",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              주소 검색
            </button>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>주소 *</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="상세주소"
              readOnly
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                backgroundColor: "#f9f9f9",
              }}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>상세 주소</label>
            <input
              type="text"
              name="detailAddress"
              value={formData.detailAddress}
              onChange={handleChange}
              placeholder="상세주소를 입력하세요"
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>

          <div style={{ marginBottom: "10px", display: "flex", gap: "10px" }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: "block", marginBottom: "5px" }}>이메일 *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: "block", marginBottom: "5px" }}>전화번호 *</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>주문메모</label>
            <textarea
              name="memo"
              value={formData.memo}
              onChange={handleChange}
              rows="3"
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
            <button
              type="button"
              onClick={handleSave}
              style={{
                padding: "10px 20px",
                backgroundColor: "#007BFF",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              저장
            </button>
            <button
              type="button"
              onClick={onClose}
              style={{
                padding: "10px 20px",
                backgroundColor: "#6c757d",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              닫기
            </button>
          </div>
        </form>

        {/* 다음 주소 검색 팝업 */}
        {isAddressPopupOpen && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 1000,
            }}
          >
            <div
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "10px",
                width: "400px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              <DaumPostcode onComplete={handleCompleteAddress} />
              <button
                type="button"
                onClick={() => setIsAddressPopupOpen(false)}
                style={{
                  marginTop: "10px",
                  padding: "10px 20px",
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
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

export default DeliveryPopup;