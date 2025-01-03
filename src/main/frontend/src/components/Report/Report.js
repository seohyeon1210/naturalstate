import React, { useState } from "react";

function Report() {
  const [formData, setFormData] = useState({
    productId: "",
    reason: "",
    details: "",
  });

  const [submitted, setSubmitted] = useState(false);

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
    // TODO: 서버로 데이터를 전송하는 API 호출 코드 추가
    setSubmitted(true); // 제출 완료 상태로 변경
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>상품 신고하기</h1>
      {submitted ? (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h2>신고가 정상적으로 접수되었습니다.</h2>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            backgroundColor: "#f9f9f9",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="productId"
              style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
            >
              상품 ID:
            </label>
            <input
              type="text"
              id="productId"
              name="productId"
              value={formData.productId}
              onChange={handleChange}
              placeholder="신고하려는 상품의 ID를 입력하세요"
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
            <label
              htmlFor="reason"
              style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
            >
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
            <label
              htmlFor="details"
              style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
            >
              상세 내용:
            </label>
            <textarea
              id="details"
              name="details"
              value={formData.details}
              onChange={handleChange}
              placeholder="신고 내용을 구체적으로 작성해주세요"
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
              fontWeight: "bold",
            }}
          >
            신고 제출
          </button>
        </form>
      )}
    </div>
  );
}

export default Report;
