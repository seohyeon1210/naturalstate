import React from "react";
import "./DeliveryMethod.css";
import HanjinLogo from '../../images/한진.png'; // 로고 이미지 경로 (로고 이미지를 프로젝트에 추가해야 합니다)

function DeliveryMethod() {
  return (
    <div className="delivery-method-container">
      <h1 className="delivery-method-title">배송시스템 안내</h1>
      <hr className="delivery-divider" />

      {/* 배송업체 정보 */}
      <div className="delivery-section">
        <h2 className="delivery-subtitle">배송업체</h2>
        <img src={HanjinLogo} alt="Hanjin Logo" className="delivery-logo" />
      </div>

      {/* 배송비 정보 */}
      <div className="delivery-section">
        <h2 className="delivery-subtitle">배송비</h2>
        <p className="delivery-text">
          2,500원 (실 결제금액 2만원 이상은 무료배송)
        </p>
        <p className="delivery-note">
          * 배송비는 한 번에 결제하신 동일 주문번호, 동일 배송지 기준으로 부과됩니다.
        </p>
      </div>

      {/* 배송 안내 */}
      <div className="delivery-section">
        <h2 className="delivery-subtitle">배송안내</h2>
        <ul className="delivery-list">
          <li>당일 22시 59분 이전 주문건에 한해 다음날 배송이 시작됩니다.</li>
          <li>이벤트 기간 중에는 주문량에 따라 순차 출고될 수 있습니다.</li>
          <li>
            출고 진행 후 취소를 원하실 경우 상품 수령 후 반품으로만 처리 가능하며, 왕복 택배비는
            5,000원이 발생됩니다.
          </li>
          <li>
            주문 취소 및 정보 변경을 원하실 경우, 1:1 문의를 통해 문의 부탁드립니다.
            <br />
            * 문의 가능 시간: 월~금 오전 9시~오후 4시 (공휴일 제외)
          </li>
          <li>
            주문 접수 후 3일 이내에 입금이 확인되지 않는 경우 자동으로 주문취소됩니다.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DeliveryMethod;