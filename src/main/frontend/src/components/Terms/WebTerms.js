import React from "react";
import "./WebTerms.css"; // CSS 파일 import

const WebTerms = () => {
  return (
    <div className="web-terms-container">
      <div className="web-terms-content">
        <h2 className="web-terms-title">이용약관</h2>
            <div className="web-terms-section">
              <h3>1. 소개</h3>
                  <p>
                    본 이용 약관(이하 "약관")은 사용자가 "그대로" 농산물 직거래 마켓
                    서비스를 이용함에 있어 준수해야 할 조건과 규정을 명시합니다. 서비스를
                    이용함으로써 사용자는 본 약관에 동의하게 됩니다.
                  </p>
            </div>
            <div className="web-terms-section">
              <h3>2. 서비스 제공</h3>
                  <p>
                    "그대로"는 신선한 농산물을 직거래로 구매할 수 있는 플랫폼을 제공합니다.
                    판매자와 구매자 간의 원활한 거래를 지원하며, 서비스의 품질 유지와
                    개선을 위해 최선을 다합니다. 필요에 따라 서비스 내용을 변경할 수 있습니다.
                  </p>
            </div>
            <div className="web-terms-section">
              <h3>3. 사용자 의무</h3>
                  <ul>
                    <li>서비스를 법적이고 윤리적인 방식으로 이용해야 합니다.</li>
                    <li>
                      타인의 권리를 침해하거나 불법적인 활동에 서비스를 사용해서는 안
                      됩니다.
                    </li>
                    <li>등록된 농산물 정보와 거래 내용을 정확히 입력해야 합니다.</li>
                    <li>
                      본 약관을 준수해야 하며, 위반 시 서비스 이용이 제한될 수 있습니다.
                    </li>
                  </ul>
            </div>
            <div className="web-terms-section">
                <h3>4. 책임 제한</h3>
                <p>
                  "그대로"는 거래 당사자 간의 직거래 과정에서 발생하는 문제에 대해 직접적인
                   책임을 지지 않습니다. 사용자는 거래 시 신중히 판단해야 하며, 본 플랫폼은
                   중개 서비스만 제공합니다.
                </p>
              </div>
              <div className="web-terms-section">
                <h3>5. 약관 변경</h3>
                <p>
                  본 약관은 사전 공지 후 변경될 수 있습니다. 변경된 약관은 공지된 날로부터 효력이
                  발생하며, 사용자가 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단할 수
                  있습니다.
                </p>
              </div>
      </div>
    </div>
  );
};

export default WebTerms;