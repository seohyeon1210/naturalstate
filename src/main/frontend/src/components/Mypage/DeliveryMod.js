import React, { useState, useEffect } from "react";
import DaumPostcode from "react-daum-postcode"; // DaumPostcode 컴포넌트
import "./DeliveryMod.css"; // CSS 파일 import

function DeliveryMod({ onSave, onClose }) {
  const [username, setUsername] = useState(""); // 이름 상태
  const [phone, setPhone] = useState(""); // 전화번호 상태
  const [address, setAddress] = useState(""); // 주소 상태
  const [zip, setZip] = useState(""); // 우편번호 상태
  const [detailAddress, setDetailAddress] = useState(""); // 상세주소 상태
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false); // 주소 모달 상태

  // 세션 데이터 불러오기
  useEffect(() => {
    const fetchSessionData = async () => {
      try {
        const response = await fetch(
          "http://localhost:18080/api/login/session/detail",
          {
            credentials: "include",
          }
        );
        const data = await response.json();
        if (response.ok) {
          setUsername(data.username); // 올바른 변수로 변경
          setPhone(data.phone);
          setAddress(data.address);
          setZip(data.zip); // 올바른 변수로 변경
          setDetailAddress(data.detailAddress);
        } else {
          console.error("세션 정보 불러오기 실패:", data);
        }
      } catch (error) {
        console.error("세션 정보 요청 중 오류:", error);
      }
    };
    fetchSessionData();
  }, []);

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
  const handleSave = async () => {
    if (!username || !phone || !address || !zip || !detailAddress) {
      alert("필수 입력값을 모두 입력해주세요.");
      return;
    }

    const updatedAddress = {
      username,
      phone,
      address,
      zip,
      detailAddress,
    };

    try {
      const response = await fetch("http://localhost:18080/api/delivery/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(updatedAddress),
      });
      const result = await response.json();
      if (response.ok) {
        alert("배송지가 성공적으로 수정되었습니다.");
        onSave(updatedAddress); // 상위 컴포넌트에 업데이트된 데이터 전달
      } else {
        alert("수정 실패: " + result.message);
      }
    } catch (error) {
      console.error("배송지 수정 요청 실패:", error);
      alert("배송지 수정 요청 중 오류가 발생했습니다.");
    }
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
          <input
            type="text"
            value={zip}
            readOnly
            className="form-input"
          />
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
