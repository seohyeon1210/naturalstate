import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PostForm.css"; // CSS 파일 import

const PostForm = () => {
  const [formData, setFormData] = useState({
    inquiryType: "",
    name: "",
    email: "",
    subject: "",
    message: "",
    file: null,
  });

  const navigate = useNavigate();

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
    navigate("/customerservice");
  };

  return (
    <div className="post-form-container">
      <h1 className="post-form-title">문의하기</h1>
      <form onSubmit={handleSubmit} className="post-form">
        {/* 문의 유형 */}
        <label>
          문의 유형
        </label>
        <select
          name="inquiryType"
          value={formData.inquiryType}
          onChange={handleChange}
          required
        >
          <option value="">문의 유형 선택</option>
          <option value="배송">배송</option>
          <option value="환불">환불</option>
          <option value="제품문의">제품 문의</option>
          <option value="기타">기타</option>
        </select>

        {/* 이름 */}
        <label>
          이름 <span>*</span>
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        {/* 이메일 */}
        <label>
          이메일 <span>*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* 제목 */}
        <label>
          제목 <span>*</span>
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        {/* 문의 내용 */}
        <label>
          문의 내용 <span>*</span>
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        ></textarea>

        {/* 첨부 파일 */}
        <label>첨부파일</label>
        <input
          type="file"
          name="file"
          onChange={handleFileChange}
        />

        {/* 제출 버튼 */}
        <button type="submit">제출하기</button>
      </form>
    </div>
  );
};

export default PostForm;