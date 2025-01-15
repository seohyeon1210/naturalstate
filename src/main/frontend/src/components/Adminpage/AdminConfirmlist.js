import React from "react";
import "./AdminConfirmlist.css";

const AdminConfirmlist = () => {
  const data = [
    {
      name: "이상형",
      id: "sang1111",
      phone: "010-1234-1234",
      company: "이상형컴퍼니",
      companyPhone: "031-345-345",
      ceo: "이상형",
      ceoContact: "010-1234-1234",
      registration: "1234566",
      address: "천안시",
      status: "승인",
    },
    {
      name: "김건우",
      id: "gungun2222",
      phone: "010-2345-2345",
      company: "건우컴퍼니",
      companyPhone: "031-345-345",
      ceo: "김건우",
      ceoContact: "010-2345-2345",
      registration: "1266526",
      address: "천안시",
      status: "승인",
    },
    {
      name: "박수신",
      id: "susin3333",
      phone: "010-3456-3456",
      company: "수신컴퍼니",
      companyPhone: "031-345-345",
      ceo: "박수신",
      ceoContact: "010-2345-2345",
      registration: "43636346",
      address: "천안시",
      status: "승인",
    },
    {
      name: "김서현",
      id: "seohyeon1210",
      phone: "010-4567-4567",
      company: "서현컴퍼니",
      companyPhone: "031-345-345",
      ceo: "김서현",
      ceoContact: "010-2345-2345",
      registration: "3452378",
      address: "천안시",
      status: "승인",
    },
  ];

  return (
    <div className="admin-confirmlist">
      <h1>입점신청 승인 리스트</h1>
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>아이디</th>
            <th>휴대폰번호</th>
            <th>회사명</th>
            <th>회사전화번호</th>
            <th>대표자 이름</th>
            <th>대표자연락처</th>
            <th>사업자등록번호</th>
            <th>사업자주소</th>
            <th>승인</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.id}</td>
              <td>{item.phone}</td>
              <td>{item.company}</td>
              <td>{item.companyPhone}</td>
              <td>{item.ceo}</td>
              <td>{item.ceoContact}</td>
              <td>{item.registration}</td>
              <td>{item.address}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminConfirmlist;