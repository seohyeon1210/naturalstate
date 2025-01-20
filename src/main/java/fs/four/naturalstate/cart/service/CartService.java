package fs.four.naturalstate.cart.service;

import fs.four.naturalstate.cart.dao.CartDAO;
import fs.four.naturalstate.cart.vo.CartVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {

    @Autowired
    private CartDAO cartDAO;

    /**
     * 장바구니 추가
     * @param cartVO 장바구니 항목 정보
     */
    public void addCart(CartVO cartVO) {
        cartDAO.insertCart(cartVO);
    }

    /**
     * 사용자별 장바구니 목록 조회
     * @param userId 사용자 ID
     * @return 장바구니 항목 목록
     */
    public List<CartVO> getCartByUser(String userId) {
        return cartDAO.getCartByUserId(userId);
    }

    /**
     * 장바구니 항목 삭제
     * @param cartId 장바구니 항목 ID
     */
    public void removeCartItem(Long cartId) {
        cartDAO.deleteCart(cartId);
    }

    /**
     * 장바구니 항목 수량 업데이트
     * @param cartId 장바구니 항목 ID
     * @param quantity 새로운 수량
     */
    public void updateCartQuantity(Long cartId, int quantity) {
        cartDAO.updateQuantity(cartId, quantity);
    }
}
