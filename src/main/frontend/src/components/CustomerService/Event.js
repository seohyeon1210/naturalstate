import React from "react";
import "./Event.css"; // CSS 파일 import

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
    <div className="event-container">
      <h1 className="event-title">진행 중인 이벤트</h1>

      {/* 이벤트 목록 */}
      <div className="event-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} />
            <div className="event-card-content">
              <span className="event-card-label">{event.label}</span>
              <h2 className="event-card-title">{event.title}</h2>
              <p className="event-card-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventPage;