import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 React Router

function Report() {
  const [formData, setFormData] = useState({
    productId: "",
    reason: "",
    details: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate(); // URL 이동을 위한 Hook

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 신고 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("신고 내용 제출:", formData);
    setSubmitted(true); // 제출 완료 상태로 변경
  };

  // 닫기 버튼 핸들러
  const handleClose = () => {
    navigate("/"); // 메인 페이지로 이동
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
        zIndex: 1000,
      }}
    >
      <div
        style={{
          width: "500px",
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h2 style={{ textAlign: "center" }}>상품 신고하기</h2>
        {submitted ? (
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h3>신고가 정상적으로 접수되었습니다.</h3>
            <p>관리자가 빠르게 검토하겠습니다.</p>
            <button
              onClick={handleClose} // 닫기 버튼 클릭 시 URL 이동
              style={{
                marginTop: "10px",
                padding: "10px 20px",
                backgroundColor: "#007BFF",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              닫기
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "15px" }}>
              <label htmlFor="productId" style={{ display: "block", marginBottom: "5px" }}>
                상품 ID:
              </label>
              <input
                type="text"
                id="productId"
                name="productId"
                value={formData.productId}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label htmlFor="reason" style={{ display: "block", marginBottom: "5px" }}>
                신고 사유:
              </label>
              <select
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              >
                <option value="">신고 사유를 선택하세요</option>
                <option value="허위 정보">허위 정보</option>
                <option value="부적절한 내용">부적절한 내용</option>
                <option value="사기성 상품">사기성 상품</option>
                <option value="기타">기타</option>
              </select>
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label htmlFor="details" style={{ display: "block", marginBottom: "5px" }}>
                상세 내용:
              </label>
              <textarea
                id="details"
                name="details"
                value={formData.details}
                onChange={handleChange}
                required
                rows="5"
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  resize: "none",
                }}
              ></textarea>
            </div>
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#007BFF",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              신고 제출
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Report;