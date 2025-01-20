package fs.four.naturalstate.cart.dao;

import fs.four.naturalstate.cart.vo.CartVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CartDAO {
    void insertCart(CartVO cartVO); // 장바구니 항목 추가
    List<CartVO> getCartByUserId(String userId); // 사용자별 장바구니 목록 조회
    void deleteCart(Long cartId); // 장바구니 항목 삭제
    void updateQuantity(Long cartId, int quantity); // 장바구니 항목 수량 업데이트
}
