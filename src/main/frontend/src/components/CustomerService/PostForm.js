import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PostForm() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    content: "",
  });
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Post:", formData);
    alert("글이 등록되었습니다!");
    navigate("/customerservice"); // /customerservice 경로로 이동
  };

  const handleClose = () => {
    navigate("/customerservice"); // /customerservice 경로로 이동
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
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          width: "500px",
        }}
      >
        <h1 style={{ textAlign: "center" }}>글쓰기</h1>
        <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>제목:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>작성자:</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>내용:</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                height: "150px",
              }}
            ></textarea>
          </div>
          {/* 버튼 영역 */}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
            <button
              type="button"
              onClick={handleClose} // 닫기 버튼 클릭 시 경로 이동
              style={{
                padding: "10px 20px",
                backgroundColor: "gray",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              닫기
            </button>
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                backgroundColor: "#007BFF",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              등록하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostForm;