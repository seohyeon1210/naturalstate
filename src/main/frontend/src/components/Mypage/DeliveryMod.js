import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode"; // DaumPostcode 컴포넌트
import "./DeliveryMod.css"; // 분리된 CSS 파일 import

function DeliveryMod({ currentAddress, onSave, onClose }) {
  const [name, setName] = useState(currentAddress.name);
  const [phone, setPhone] = useState(currentAddress.phone);
  const [address, setAddress] = useState(currentAddress.address);
  const [postcode, setPostcode] = useState(currentAddress.postcode || "");
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

  // DaumPostcode 완료 핸들러
  const handleCompleteAddress = (data) => {
    const fullAddress = data.roadAddress || data.jibunAddress;
    setAddress(fullAddress);
    setPostcode(data.zonecode);
    setIsAddressModalOpen(false);
  };

  // 전화번호 입력 핸들러 (숫자만 허용, 11자리로 제한)
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    if (value.length <= 11) {
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
    onSave(updatedAddress);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">배송지 수정</h2>

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

        {/* 저장 및 취소 버튼 */}
        <div className="button-group">
          <button onClick={onClose} className="btn-cancel">
            취소
          </button>
          <button onClick={handleSave} className="btn-submit">
            저장하기
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

export default DeliveryMod;