import React from "react";
import "./Event.css"; // CSS 파일 import
import NewStore from '../../images/신규입점.jpg';

function EventPage() {
  const events = [
    {
      id: 1,
      label: "이벤트",
      image: "../../images/신규입점.jpg", // Placeholder image
      description: "새롭게 입점신청한 스토어를 만나보세요.",
    },
    {
      id: 2,
      label: "이벤트",
      image: "https://via.placeholder.com/300x200", // Placeholder image
      title: "우수 스토어 리뷰 이벤트!",
      description: "총 10명 모집. 댓글로 기대평을 남겨주세요~!",
    },
    {
      id: 3,
      label: "이벤트",
      image: "https://via.placeholder.com/300x200", // Placeholder image
      title: "단 일주일! 연휴 전 특별 할인 이벤트!",
      description: "~20% 쿠폰 & 카드 할인",
    },
    {
      id: 4,
      label: "이벤트",
      image: "https://via.placeholder.com/300x200", // Placeholder image
      title: "1월 특별 할인 이벤트!",
      description: "1월 세일 이벤트 예고",
    },
  ];

  return (
    <div className="event-container">
      <h1 className="event-title">진행 중인 이벤트</h1>

      {/* 이벤트 목록 */}
      <div className="event-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <img src={NewStore} alt={event.title} />
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