import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 useNavigate 훅

function PostForm() {
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        content: "",
    });
    const navigate = useNavigate(); // 글 작성 후 페이지 이동

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
        navigate("/customerService"); // customerService 화면으로 이동
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1 style={{ textAlign: "center" }}>글쓰기</h1>
            <form onSubmit={handleSubmit} style={{ maxWidth: "600px", margin: "0 auto" }}>
                <div style={{ marginBottom: "10px" }}>
                    <label style={{ display: "block", marginBottom: "5px" }}>제목:</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
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
                        style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label style={{ display: "block", marginBottom: "5px" }}>내용:</label>
                    <textarea
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px", height: "250px", }}
                    ></textarea>
                </div>
                {/* .버튼을 오른쪽으로 정렬 */}
                <div style={{ textAlign: "right" }}>
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
    );
}

export default PostForm;
