import React, { useState } from 'react';

const Terms = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const containerStyle = {
    margin: '20px auto',
    padding: '20px',
    width: '90%',
    maxWidth: '800px',
    border: '2px solid #ccc',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    fontFamily: 'Arial, sans-serif',
  };

  const sectionStyle = {
    margin: '10px auto',
    padding: '10px',
    width: '90%',
    border: '1px solid #ccc',
    borderRadius: '5px',
    textAlign: 'center',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#007BFF',
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <div style={containerStyle}>
        <h1>
          <a href="/terms" style={linkStyle}>
            이용 약관
          </a>
        </h1>
        <p>최종 수정일: 2025년 1월 7일</p>
        <div style={sectionStyle}>
          <h2>1. 소개</h2>
          <p>
            본 이용 약관(이하 "약관")은 사용자가 본 서비스를 이용함에 있어 준수해야 할 조건과
            규정을 명시합니다. 서비스를 이용함으로써 사용자는 본 약관에 동의하게 됩니다.
          </p>
        </div>
        <div style={sectionStyle}>
          <h2>2. 서비스 제공</h2>
          <p>
            본 서비스는 사용자의 편의를 위해 다양한 기능과 콘텐츠를 제공합니다. 서비스 제공자는
            서비스의 품질 유지와 개선을 위해 최선을 다하며, 필요에 따라 서비스 내용을 변경할 수
            있습니다.
          </p>
        </div>
        <div style={sectionStyle}>
          <h2>3. 사용자 의무</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>서비스를 법적이고 윤리적인 방식으로 이용해야 합니다.</li>
            <li>타인의 권리를 침해하거나 불법적인 활동에 서비스를 사용해서는 안 됩니다.</li>
            <li>본 약관을 준수해야 하며, 위반 시 서비스 이용이 제한될 수 있습니다.</li>
          </ul>
        </div>
        <div style={sectionStyle}>
          <h2>4. 책임 제한</h2>
          <p>
            서비스 제공자는 서비스 이용으로 인해 발생하는 직접적, 간접적 손해에 대해 책임을
            지지 않습니다. 사용자는 자신의 판단과 책임 하에 서비스를 이용해야 합니다.
          </p>
        </div>
        <div style={sectionStyle}>
          <h2>5. 약관 변경</h2>
          <p>
            본 약관은 사전 공지 후 변경될 수 있습니다. 변경된 약관은 공지된 날로부터 효력이
            발생하며, 사용자가 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단할 수
            있습니다.
          </p>
        </div>
        <footer style={{ marginTop: '20px' }}>
          <p>문의사항이 있는 경우 고객센터로 연락해 주시기 바랍니다.</p>
        </footer>
        <div style={{ marginTop: '20px' }}>
          <input
            type="checkbox"
            id="agree"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="agree" style={{ marginLeft: '10px' }}>
            이용약관을 읽었으며, 동의합니다.
          </label>
        </div>
      </div>
    </div>
  );
};

export default Terms;