import React, { useState, useEffect } from "react";
import DaumPostcode from "react-daum-postcode"; // DaumPostcode 컴포넌트
import "./DeliveryMod.css"; // CSS 파일 import

function DeliveryMod({ currentAddress, onSave, onClose }) {
  const [username, setUsername] = useState(currentAddress?.deliveryUsername || ""); // 이름 상태
  const [phone, setPhone] = useState(currentAddress?.deliveryPhone || ""); // 전화번호 상태
  const [address, setAddress] = useState(currentAddress?.deliveryAddress || ""); // 주소 상태
  const [zip, setZip] = useState(currentAddress?.deliveryZip || ""); // 우편번호 상태
  const [detailAddress, setDetailAddress] = useState(currentAddress?.deliveryDetailAddress || ""); // 상세주소 상태
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false); // 주소 모달 상태

  // DaumPostcode 완료 핸들러
  const handleCompleteAddress = (data) => {
    const fullAddress = data.roadAddress || data.jibunAddress;
    setAddress(fullAddress);
    setZip(data.zonecode);
    setIsAddressModalOpen(false);
  };

  // 전화번호 입력 핸들러
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    if (value.length <= 11) {
      setPhone(value);
    }
  };

  // 저장 버튼 클릭 핸들러
  const handleSave = () => {
    if (!username || !phone || !address || !zip || !detailAddress) {
      alert("필수 입력값을 모두 입력해주세요.");
      return;
    }

    const updatedAddress = {
      deliveryNumber: currentAddress?.deliveryNumber, // 현재 배송지 번호 유지
      deliveryUsername: username,
      deliveryPhone: phone,
      deliveryAddress: address,
      deliveryZip: zip,
      deliveryDetailAddress: detailAddress,
    };

    onSave(updatedAddress); // 상위 컴포넌트에 업데이트된 데이터 전달
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
            <input type="text" value={zip} readOnly className="form-input" />
          </div>

          {/* 상세주소 */}
          <div className="form-group">
            <label>상세주소</label>
            <input
                type="text"
                value={detailAddress}
                onChange={(e) => setDetailAddress(e.target.value)}
                className="form-input"
                placeholder="상세주소 입력"
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
