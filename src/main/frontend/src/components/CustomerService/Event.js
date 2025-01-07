import React from "react";

function EventPage() {
  const events = [
    {
      id: 1,
      label: "이벤트",
      image: "https://via.placeholder.com/300x200", // Placeholder image
      title: "SSG PICK! 신규 입점 브랜드",
      description: "새로운 브랜드 상품을 만나보세요.",
    },
    {
      id: 2,
      label: "이벤트",
      image: "https://via.placeholder.com/300x200", // Placeholder image
      title: "[체험단] 개과천선 프레디 강아지 펫...",
      description: "총 10명 모집. 댓글로 기대평을 남겨주세요~!",
    },
    {
      id: 3,
      label: "이벤트",
      image: "https://via.placeholder.com/300x200", // Placeholder image
      title: "단 일주일, 아울렛 슈퍼위크",
      description: "~12% 쿠폰 & 카드 할인",
    },
    {
      id: 4,
      label: "이벤트",
      image: "https://via.placeholder.com/300x200", // Placeholder image
      title: "럭셔리 뷰티 기프트",
      description: "에스티 로더, 라메르 외 SSG 단독 사은증정 & 상품권",
    },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>진행 중인 이벤트</h1>

      {/* 이벤트 목록 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {events.map((event) => (
          <div
            key={event.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={event.image}
              alt={event.title}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "15px" }}>
              <span
                style={{
                  display: "inline-block",
                  backgroundColor: "#000",
                  color: "#fff",
                  padding: "3px 8px",
                  borderRadius: "4px",
                  fontSize: "12px",
                  marginBottom: "10px",
                }}
              >
                {event.label}
              </span>
              <h2 style={{ fontSize: "18px", margin: "10px 0" }}>{event.title}</h2>
              <p style={{ fontSize: "14px", color: "#666" }}>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventPage;