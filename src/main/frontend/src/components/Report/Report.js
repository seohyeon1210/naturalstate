import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 React Router
import "./Report.css"; // 분리된 CSS 파일 import

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
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">상품 신고하기</h2>
        {submitted ? (
          <div className="success-message">
            <h3>신고가 정상적으로 접수되었습니다.</h3>
            <p>관리자가 빠르게 검토하겠습니다.</p>
            <button onClick={handleClose} className="close-button">
              닫기
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="productId">상품 ID:</label>
              <input
                type="text"
                id="productId"
                name="productId"
                value={formData.productId}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="reason">신고 사유:</label>
              <select
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
                className="form-select"
              >
                <option value="">신고 사유를 선택하세요</option>
                <option value="허위 정보">허위 정보</option>
                <option value="부적절한 내용">부적절한 내용</option>
                <option value="사기성 상품">사기성 상품</option>
                <option value="기타">기타</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="details">상세 내용:</label>
              <textarea
                id="details"
                name="details"
                value={formData.details}
                onChange={handleChange}
                required
                rows="5"
                className="form-textarea"
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              신고 제출
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Report;