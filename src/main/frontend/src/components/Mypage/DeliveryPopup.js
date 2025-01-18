import React, { useState, useEffect } from "react";
import DaumPostcode from "react-daum-postcode";
import "./DeliveryMod.css";

function DeliveryPopup({ onAdd, onClose }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [userId, setUserId] = useState("");

  // 세션에서 userId 가져오기
  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/session/userId", {
          method: "GET",
          credentials: "include",
        });
        if (response.ok) {
          const data = await response.json();
          setUserId(data.userId);
        } else {
          console.error("세션 정보를 가져오지 못했습니다.");
        }
      } catch (error) {
        console.error("세션 요청 중 에러:", error);
      }
    };

    fetchUserId();
  }, []);

  // DaumPostcode 완료 핸들러
  const handleCompleteAddress = (data) => {
    const fullAddress = data.roadAddress || data.jibunAddress;
    setAddress(fullAddress);
    setPostcode(data.zonecode);
    setIsAddressModalOpen(false);
  };

  // 추가 버튼 클릭 핸들러
  const handleAdd = () => {
    if (!name || !phone || !address || !postcode || !detailAddress) {
      alert("필수 입력값을 모두 입력해주세요.");
      return;
    }

    const newAddress = {
      userId,
      deliveryUsername: name,
      deliveryPhone: phone,
      deliveryAddress: address,
      deliveryZip: postcode,
      deliveryDetailAddress: detailAddress,
    };

    console.log("New address data:", newAddress);
    onAdd(newAddress);
    onClose();
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
                onChange={(e) => setPhone(e.target.value)}
                className="form-input"
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
