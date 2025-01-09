import React from "react";
import "./WebTerms.css"; // 분리된 CSS 파일 import

const WebTerms = () => {
  return (
    <div className="terms-container">
      <h4 className="terms-header">이용 약관</h4>
      <div className="terms-section">
        <h5>1. 소개</h5>
        <p>
          본 이용 약관(이하 "약관")은 사용자가 본 서비스를 이용함에 있어 준수해야 할 조건과
          규정을 명시합니다. 서비스를 이용함으로써 사용자는 본 약관에 동의하게 됩니다.
        </p>
      </div>
      <div className="terms-section">
        <h5>2. 서비스 제공</h5>
        <p>
          본 서비스는 사용자의 편의를 위해 다양한 기능과 콘텐츠를 제공합니다. 서비스 제공자는
          서비스의 품질 유지와 개선을 위해 최선을 다하며, 필요에 따라 서비스 내용을 변경할 수
          있습니다.
        </p>
      </div>
      <div className="terms-section">
        <h5>3. 사용자 의무</h5>
        <ul>
          <li>서비스를 법적이고 윤리적인 방식으로 이용해야 합니다.</li>
          <li>타인의 권리를 침해하거나 불법적인 활동에 서비스를 사용해서는 안 됩니다.</li>
          <li>본 약관을 준수해야 하며, 위반 시 서비스 이용이 제한될 수 있습니다.</li>
        </ul>
      </div>
      <div className="terms-section">
        <h5>4. 책임 제한</h5>
        <p>
          서비스 제공자는 서비스 이용으로 인해 발생하는 직접적, 간접적 손해에 대해 책임을
          지지 않습니다. 사용자는 자신의 판단과 책임 하에 서비스를 이용해야 합니다.
        </p>
      </div>
      <div className="terms-section">
        <h5>5. 약관 변경</h5>
        <p>
          본 약관은 사전 공지 후 변경될 수 있습니다. 변경된 약관은 공지된 날로부터 효력이
          발생하며, 사용자가 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단할 수
          있습니다.
        </p>
      </div>
    </div>
  );
};

export default WebTerms;