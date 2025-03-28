import React from "react";
import "./CustomerService.css"; // CSS 파일 불러오기

function CustomerService() {
  return (
    <div className="customer-service-container">
      <div className="customer-service-menu">
        {/* 왼쪽 고객센터 메뉴 */}
        <div className="customer-service-sidebar">
          <h2 className="cs-title">고객센터</h2>
          <ul>
            <li>
              <a href="/notice">공지사항</a>
            </li>
            <li>
              <a href="/inquiry">자주 묻는 질문</a>
            </li>
            <li>
              <a href="/deliverymethod">배송 방식 안내</a>
            </li>
            <li>
              <a href="/post">1:1 문의</a>
            </li>
          </ul>
          <hr />
          <div className="phone-number">02-6013-0855</div>
          <div className="working-hours">
            상담시간: AM 10:00 ~ PM 17:00
            <br />
            (주말 및 공휴일 휴무)
          </div>
        </div>

        {/* 공지사항 */}
        <div className="customer-service-section">
          <h2 className="cs-title">
            공지사항
            <a href="/notice">더보기 &gt;</a>
          </h2>
          <ul>
            {/*내용 변경 요청*/}
            <li>그대로 배송정책 변경 안내</li>
            <li>배송 지연 안내 (폭설, 강풍으로 인한 교통 통제)</li>
            <li>그대로 휴면 회원 정책 변경에 따른 이용약관&개인정보 안내</li>
            <li>교환 및 환불 정책 업데이트</li>
            <li>2030년 추석 연휴 배송 및 고객 상담 운영 안내</li>
          </ul>
        </div>

        {/* 이벤트 */}
        <div className="customer-service-section">
          <h2 className="cs-title">
            이벤트
            <a href="/events">더보기 &gt;</a>
          </h2>
          <ul>
            <li>그대로 리뷰 이벤트!</li>
            <li>새해 첫 쇼핑 만원으로 끝!</li>
            <li>2024 베스트 스토어 명예의 전당</li>
            <li>베스트 스토어 우수평가 기념 할인전</li>
            <li>1월 신규 이벤트 안내</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CustomerService;