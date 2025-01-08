import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 import

const PostForm = () => {
  const [formData, setFormData] = useState({
    inquiryType: "",
    name: "",
    email: "",
    subject: "",
    message: "",
    file: null,
  });

  const navigate = useNavigate(); // useNavigate 훅 초기화

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("문의가 성공적으로 제출되었습니다.");
    setFormData({
      inquiryType: "",
      name: "",
      email: "",
      subject: "",
      message: "",
      file: null,
    });

    // /customerservice URL로 이동
    navigate("/customerservice");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>문의하기</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {/* 문의 유형 */}
        <label style={{ fontWeight: "bold" }}>문의 유형</label>
        <select
          name="inquiryType"
          value={formData.inquiryType}
          onChange={handleChange}
          style={{ padding: "10px", fontSize: "14px", border: "1px solid #ddd", borderRadius: "5px" }}
          required
        >
          <option value="">문의 유형 선택</option>
          <option value="배송">배송</option>
          <option value="환불">환불</option>
          <option value="제품문의">제품 문의</option>
          <option value="기타">기타</option>
        </select>

        {/* 이름 */}
        <label style={{ fontWeight: "bold" }}>
          이름 <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={{ padding: "10px", fontSize: "14px", border: "1px solid #ddd", borderRadius: "5px" }}
          required
        />

        {/* 이메일 */}
        <label style={{ fontWeight: "bold" }}>
          이메일 <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{ padding: "10px", fontSize: "14px", border: "1px solid #ddd", borderRadius: "5px" }}
          required
        />

        {/* 제목 */}
        <label style={{ fontWeight: "bold" }}>
          제목 <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          style={{ padding: "10px", fontSize: "14px", border: "1px solid #ddd", borderRadius: "5px" }}
          required
        />

        {/* 문의 내용 */}
        <label style={{ fontWeight: "bold" }}>
          문의 내용 <span style={{ color: "red" }}>*</span>
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          style={{
            padding: "10px",
            fontSize: "14px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            resize: "none",
          }}
          required
        ></textarea>

        {/* 첨부 파일 */}
        <label style={{ fontWeight: "bold" }}>첨부파일</label>
        <input
          type="file"
          name="file"
          onChange={handleFileChange}
          style={{
            padding: "5px",
            fontSize: "14px",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        />

        {/* 제출 버튼 */}
        <button
          type="submit"
          style={{
            padding: "15px",
            backgroundColor: "#28a745",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          제출하기
        </button>
      </form>
    </div>
  );
};

export default PostForm;