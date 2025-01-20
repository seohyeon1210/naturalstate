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

  const handleCompleteAddress = (data) => {
    const fullAddress = data.roadAddress || data.jibunAddress;
    setAddress(fullAddress);
    setPostcode(data.zonecode);
    setIsAddressModalOpen(false);
  };

  const handleAdd = async () => {
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

    console.log("Frontend - API 요청 데이터: ", newAddress);

    try {
      const response = await fetch("http://localhost:18080/api/delivery/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(newAddress),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Frontend - API 응답 데이터: ", data);
        onAdd(data);
      } else {
        console.error("Frontend - API 요청 실패");
      }
    } catch (error) {
      console.error("Frontend - API 요청 중 오류: ", error);
    }

    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">배송지 추가</h2>

        <div className="form-group">
          <label>이름</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>전화번호</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>주소</label>
          <div className="address-wrapper">
            <input type="text" value={address} readOnly className="form-input" />
            <button
              onClick={() => setIsAddressModalOpen(true)}
              className="btn-address-search"
            >
              주소찾기
            </button>
          </div>
        </div>

        <div className="form-group">
          <label>우편번호</label>
          <input type="text" value={postcode} readOnly className="form-input" />
        </div>

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

        <div className="button-group">
          <button onClick={onClose} className="btn-cancel">
            취소
          </button>
          <button onClick={handleAdd} className="btn-submit">
            추가하기
          </button>
        </div>

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
