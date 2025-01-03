import React from 'react';
import { useNavigate } from "react-router-dom"; // React Router 사용

function Terms() {
  const navigate = useNavigate(); // 페이지 이동을 위한 Hook

  const handleAgreement = () => {
    navigate("/"); // 루트 경로로 이동
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h1 style={{ textAlign: 'center' }}>이용약관</h1>
      <section>
        <h2>제 1조 (목적)</h2>
        <p>
          이 약관은 [회사명](이하 "회사")이 제공하는 서비스(이하 "서비스")의 이용과 관련하여 회사와
          이용자 간의 권리, 의무, 책임사항 및 기타 필요한 사항을 규정함을 목적으로 합니다.
        </p>
      </section>
      <section>
        <h2>제 2조 (용어의 정의)</h2>
        <p>
          본 약관에서 사용하는 용어의 정의는 다음과 같습니다:
        </p>
        <ul>
          <li>"서비스"란 회사가 제공하는 모든 온라인 서비스를 의미합니다.</li>
          <li>"회원"이란 본 약관에 동의하고 서비스를 이용하는 자를 말합니다.</li>
          <li>"콘텐츠"란 서비스 내에서 제공되는 텍스트, 이미지, 동영상 등의 모든 정보를 말합니다.</li>
        </ul>
      </section>
      <section>
        <h2>제 3조 (약관의 효력과 변경)</h2>
        <p>
          본 약관은 이용자가 회원가입 시 약관에 동의함으로써 효력이 발생합니다. 회사는 필요에 따라
          약관을 변경할 수 있으며, 변경된 약관은 공지사항 또는 이메일을 통해 사전 통지합니다.
        </p>
      </section>
      <section>
        <h2>제 4조 (회원의 의무)</h2>
        <ul>
          <li>회원은 서비스 이용 시 관련 법령, 약관, 공지사항 등을 준수해야 합니다.</li>
          <li>타인의 정보를 도용하거나 허위 정보를 제공해서는 안 됩니다.</li>
          <li>서비스를 통해 얻은 정보를 회사의 승인 없이 외부에 유출하거나 상업적으로 이용할 수 없습니다.</li>
        </ul>
      </section>
      <section>
        <h2>제 5조 (서비스의 중단)</h2>
        <p>
          회사는 천재지변, 시스템 점검, 기술적 문제 등 불가피한 사유가 발생한 경우 서비스 제공을 일시적으로
          중단할 수 있습니다. 이 경우 회사는 사전에 이를 공지하며, 긴급한 상황에서는 사후에 공지할 수 있습니다.
        </p>
      </section>
      <section>
        <h2>제 6조 (개인정보 보호)</h2>
        <p>
          회사는 회원의 개인정보를 보호하기 위해 관련 법령에 따라 최선을 다하며, 개인정보 처리방침에 따라 이를
          관리 및 운영합니다.
        </p>
      </section>
      <section>
        <h2>제 7조 (면책 조항)</h2>
        <p>
          회사는 다음의 경우 책임을 지지 않습니다:
        </p>
        <ul>
          <li>회원의 부주의로 인해 발생한 서비스 이용 장애</li>
          <li>회원이 본 약관을 위반하여 발생한 문제</li>
          <li>불가항력적 사유로 발생한 서비스 중단</li>
        </ul>
      </section>
      <section>
        <h2>제 8조 (기타)</h2>
        <p>
          본 약관에 명시되지 않은 사항은 관련 법령 및 관례에 따릅니다. 회사와 회원 간의 분쟁이 발생할 경우
          관할 법원은 회사의 소재지 법원으로 합니다.
        </p>
      </section>

      {/* 체크박스 추가 */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <label>
          <input
            type="checkbox"
            onChange={handleAgreement}
            style={{ marginRight: '10px' }}
          />
          이용약관을 읽고 동의합니다
        </label>
      </div>
    </div>
  );
}

export default Terms;
