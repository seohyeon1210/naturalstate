import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// 스타일 정의
const Container = styled.div`
    padding: 20px;
    background-color: #f9f9f9;
    min-height: 100vh;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;

    th, td {
        border: 1px solid #ddd;
        padding: 10px;
        text-align: center;
    }

    th {
        background-color: #f4f4f4;
        font-weight: bold;
    }
`;

const Message = styled.div`
    margin-top: 20px;
    font-size: 16px;
    color: #555;
`;

function SettlementPage() {
    const [data, setData] = useState([]); // 정산 데이터를 저장
    const [loading, setLoading] = useState(true); // 로딩 상태 관리
    const [errorMessage, setErrorMessage] = useState(''); // 오류 메시지

    // API에서 데이터 가져오기 (백엔드 연결 예정)
    useEffect(() => {
        // 샘플 데이터
        const fetchData = async () => {
            try {
                // 백엔드 연결 시 axios나 fetch를 활용
                // const response = await fetch('/api/settlement/{storeId}');
                // const result = await response.json();

                // 샘플 데이터
                const sampleData = [
                    {
                        settlementId: 1,
                        totalSales: '1,000,000원',
                        platformFee: '100,000원',
                        settlementAmount: '900,000원',
                        status: '완료',
                        settlementDate: '2025-01-21',
                    },
                    {
                        settlementId: 2,
                        totalSales: '500,000원',
                        platformFee: '50,000원',
                        settlementAmount: '450,000원',
                        status: '진행 중',
                        settlementDate: '2025-01-20',
                    },
                ];

                setData(sampleData); // 데이터 설정
                setLoading(false); // 로딩 완료
            } catch (error) {
                setErrorMessage('데이터를 가져오는 데 실패했습니다.');
                setLoading(false); // 로딩 완료
            }
        };

        fetchData();
    }, []);

    return (
        <Container>
            <Header>
                <Title>정산 페이지</Title>
            </Header>
            {loading ? (
                <Message>데이터를 불러오는 중입니다...</Message>
            ) : errorMessage ? (
                <Message>{errorMessage}</Message>
            ) : (
                <Table>
                    <thead>
                        <tr>
                            <th>정산 번호</th>
                            <th>총 판매 금액</th>
                            <th>수수료</th>
                            <th>정산 금액</th>
                            <th>정산 상태</th>
                            <th>정산 날짜</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                            data.map((item) => (
                                <tr key={item.settlementId}>
                                    <td>{item.settlementId}</td>
                                    <td>{item.totalSales}</td>
                                    <td>{item.platformFee}</td>
                                    <td>{item.settlementAmount}</td>
                                    <td>{item.status}</td>
                                    <td>{item.settlementDate}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6">정산 데이터가 없습니다.</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            )}
        </Container>
    );
}

export default SettlementPage;
