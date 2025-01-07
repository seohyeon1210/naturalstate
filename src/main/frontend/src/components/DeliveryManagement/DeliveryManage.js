import React, { useState } from "react";

function DeliveryManage({ onClose }) {
  const [formData, setFormData] = useState({
    deliveryName: "",
    recipient: "",
    postalCode: "",
    address: "",
    contact: "",
    mobile: "",
    message: "",
    saveAsDefault: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = () => {
    console.log("Saved Data:", formData);
    alert("배송지가 저장되었습니다!");
    onClose(); // 모달 닫기
  };

  const handleCancel = () => {
    onClose(); // 모달 닫기
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "1000",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          width: "600px",
          maxHeight: "90%",
          overflowY: "auto",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>배송지 추가</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            <tr>
              <td style={{ padding: "10px", fontWeight: "bold", width: "30%" }}>배송지명</td>
              <td>
                <input
                  type="text"
                  name="deliveryName"
                  value={formData.deliveryName}
                  onChange={handleChange}
                  style={{ width: "100%", padding: "5px" }}
                />
              </td>
            </tr>
            <tr>
              <td style={{ padding: "10px", fontWeight: "bold" }}>받는 사람</td>
              <td>
                <input
                  type="text"
                  name="recipient"
                  value={formData.recipient}
                  onChange={handleChange}
                  style={{ width: "100%", padding: "5px" }}
                />
              </td>
            </tr>
            <tr>
              <td style={{ padding: "10px", fontWeight: "bold" }}>주소</td>
              <td>
                <div style={{ display: "flex", gap: "10px", marginBottom: "5px" }}>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    placeholder="우편번호"
                    style={{ flex: "1", padding: "5px" }}
                  />
                  <button
                    style={{
                      padding: "5px 10px",
                      backgroundColor: "#007BFF",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    우편번호 검색
                  </button>
                </div>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  style={{ width: "100%", padding: "5px" }}
                />
              </td>
            </tr>
            <tr>
              <td style={{ padding: "10px", fontWeight: "bold" }}>연락처</td>
              <td>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="000-0000-0000"
                  style={{ width: "100%", padding: "5px" }}
                />
              </td>
            </tr>
            <tr>
              <td style={{ padding: "10px", fontWeight: "bold" }}>핸드폰</td>
              <td>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="000-0000-0000"
                  style={{ width: "100%", padding: "5px" }}
                />
              </td>
            </tr>
            <tr>
              <td style={{ padding: "10px", fontWeight: "bold" }}>주문메시지</td>
              <td>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  maxLength="100"
                  style={{ width: "100%", padding: "5px" }}
                ></textarea>
              </td>
            </tr>
          </tbody>
        </table>

        <div style={{ marginTop: "10px" }}>
          <label>
            <input
              type="checkbox"
              name="saveAsDefault"
              checked={formData.saveAsDefault}
              onChange={handleChange}
              style={{ marginRight: "5px" }}
            />
            기본 배송지로 저장
          </label>
        </div>

        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <button
            onClick={handleSave}
            style={{
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "5px",
              marginRight: "10px",
              cursor: "pointer",
            }}
          >
            저장
          </button>
          <button
            onClick={handleCancel}
            style={{
              padding: "10px 20px",
              backgroundColor: "gray",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeliveryManage;