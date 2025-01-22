import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CartList from "./CartList";
import CartAmount from "./CartAmount";

function Cart() {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]); // 선택된 항목
  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState(null);

  // 로그인 사용자 정보 가져오기
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch("http://localhost:18080/api/login/session/detail", {
          method: "GET",
          credentials: "include",
        });

        if (response.ok) {
          const user = await response.json();
          setUserId(user.userId); // 로그인 사용자 ID 저장
        } else {
          console.error("로그인 정보를 가져오지 못했습니다.");
        }
      } catch (error) {
        console.error("로그인 API 호출 중 오류 발생:", error);
      }
    };

    fetchUserDetails();
  }, []);

  // 장바구니 데이터 로드
  useEffect(() => {
    if (userId) {
      const fetchCartItems = async () => {
        try {
          const response = await fetch(`http://localhost:18080/api/cart/list`, {
            method: "GET",
            credentials: "include",
          });

          if (response.ok) {
            const data = await response.json();
            console.log("장바구니 데이터:", data); // 콘솔에 데이터 출력
            setItems(data);
            setSelectedItems(data.map((item) => item.cartId)); // 초기 선택된 항목 설정
          } else {
            console.error("장바구니 데이터를 가져오지 못했습니다.");
          }
        } catch (error) {
          console.error("장바구니 API 호출 중 오류 발생:", error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchCartItems();
    }
  }, [userId]);

  // 수량 변경 핸들러
  const handleQuantityChange = async (id, newQuantity) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.cartId === id ? { ...item, quantity: newQuantity } : item
      )
    );

    try {
      await fetch(`http://localhost:18080/api/cart/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity: newQuantity }),
      });
    } catch (error) {
      console.error("수량 업데이트 중 오류:", error);
    }
  };

  // 항목 삭제 핸들러
  const handleDelete = async (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.cartId !== id));
    setSelectedItems((prevSelected) => prevSelected.filter((itemId) => itemId !== id));

    try {
      await fetch(`http://localhost:18080/api/cart/delete/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error("항목 삭제 중 오류:", error);
    }
  };

  // 선택 항목 관리
  const handleSelectItem = (id) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((itemId) => itemId !== id)
        : [...prevSelected, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedItems.length === items.length) {
      setSelectedItems([]); // 모든 선택 해제
    } else {
      setSelectedItems(items.map((item) => item.cartId)); // 모든 항목 선택
    }
  };

  // 선택된 항목에 대한 총합 계산
  const totalPrice = items
    .filter((item) => selectedItems.includes(item.cartId))
    .reduce((acc, item) => acc + item.productPrice * item.quantity, 0);

  const totalItems = selectedItems.length;

  if (isLoading) {
    return <div>로그인 정보가 없습니다!</div>;
  }

  return (
    <Container>
      <Row className="mt-4">
        <Col md={8}>
          <CartList
            items={items}
            selectedItems={selectedItems}
            onSelectItem={handleSelectItem}
            onSelectAll={handleSelectAll}
            onQuantityChange={handleQuantityChange}
            onDelete={handleDelete}
          />
        </Col>
        <Col md={4}>
          <CartAmount
            totalItems={totalItems}
            totalPrice={totalPrice}
            shipping={3000} // 배송비를 3000원으로 고정
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
