import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode"; // DaumPostcode 컴포넌트
import "./DeliveryMod.css";

// 전화번호 포맷팅 함수
const formatPhoneNumber = (phone) => {
  if (!phone) return "";
  const cleaned = phone.replace(/[^0-9]/g, ""); // 숫자 이외의 값 제거
  const match = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/);
  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`;
  }
  return phone;
};

function DeliveryPopup({ onAdd, onClose }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");
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
    if (value.length <= 11) {
      setPhone(value);
    }
  };

  // 추가 버튼 클릭 핸들러
  const handleAdd = () => {
    if (!name || !phone || !address || !postcode) {
      alert("필수 입력값을 모두 입력해주세요.");
      return;
    }

    const newAddress = {
      name,
      phone: formatPhoneNumber(phone), // 전화번호 포맷팅 적용
      address,
      postcode,
    };
    onAdd(newAddress); // 상위 컴포넌트로 전달
    onClose(); // 모달 닫기
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">배송지 추가</h2>

        {/* 이름 */}
        <div className="form-group">
          <label>이름</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          />
        </div>

        {/* 전화번호 */}
        <div className="form-group">
          <label>전화번호</label>
          <input
            type="text"
            value={phone}
            onChange={handlePhoneChange}
            className="form-input"
            placeholder="숫자만 입력 (11자리)"
          />
        </div>

        {/* 주소 */}
        <div className="form-group">
          <label>주소</label>
          <div className="address-wrapper">
            <input
              type="text"
              value={address}
              readOnly
              className="form-input"
            />
            <button
              onClick={() => setIsAddressModalOpen(true)}
              className="btn-address-search"
            >
              주소찾기
            </button>
          </div>
        </div>

        {/* 우편번호 */}
        <div className="form-group">
          <label>우편번호</label>
          <input
            type="text"
            value={postcode}
            readOnly
            className="form-input"
          />
        </div>

        {/* 추가 및 취소 버튼 */}
        <div className="button-group">
          <button onClick={onClose} className="btn-cancel">
            취소
          </button>
          <button onClick={handleAdd} className="btn-submit">
            추가하기
          </button>
        </div>

        {/* DaumPostcode 모달 */}
        {isAddressModalOpen && (
          <div className="modal-overlay">
            <div className="address-modal">
              <DaumPostcode onComplete={handleCompleteAddress} />
              <button
                onClick={() => setIsAddressModalOpen(false)}
                className="btn-close-modal"
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