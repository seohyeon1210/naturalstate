package fs.four.naturalstate.cart.controller;

import fs.four.naturalstate.cart.service.CartService;
import fs.four.naturalstate.cart.vo.CartVO;
import fs.four.naturalstate.user.vo.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import jakarta.servlet.http.HttpSession;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    /**
     * 장바구니 항목 추가
     * @param cartVO 장바구니에 추가할 항목 정보
     * @param session 사용자 세션
     * @return 성공 메시지
     */
    @PostMapping("/add")
    public String addCart(@RequestBody CartVO cartVO, HttpSession session) {
        UserVO user = (UserVO) session.getAttribute("user");
        if (user == null) {
            throw new RuntimeException("로그인된 사용자 정보가 없습니다.");
        }

        // 세션에서 가져온 userId를 cartVO에 설정
        cartVO.setUserId(user.getUserId());
        cartService.addCart(cartVO);
        return "장바구니에 추가되었습니다.";
    }

    /**
     * 사용자별 장바구니 목록 조회
     * @param session 사용자 세션
     * @return 장바구니 항목 목록
     */
    @GetMapping("/list")
    public List<CartVO> getCartByUser(HttpSession session) {
        UserVO user = (UserVO) session.getAttribute("user");
        if (user == null) {
            throw new RuntimeException("로그인된 사용자 정보가 없습니다.");
        }

        // 세션의 사용자 ID로 장바구니 목록 조회
        return cartService.getCartByUser(user.getUserId());
    }

    /**
     * 장바구니 항목 삭제
     * @param cartId 장바구니 항목 ID
     * @param session 사용자 세션
     * @return 성공 메시지
     */
    @DeleteMapping("/delete/{cartId}")
    public String deleteCart(@PathVariable Long cartId, HttpSession session) {
        UserVO user = (UserVO) session.getAttribute("user");
        if (user == null) {
            throw new RuntimeException("로그인된 사용자 정보가 없습니다.");
        }

        cartService.removeCartItem(cartId);
        return "장바구니 항목이 삭제되었습니다.";
    }

    /**
     * 장바구니 항목 수량 업데이트
     * @param cartId 장바구니 항목 ID
     * @param quantity 새로운 수량
     * @param session 사용자 세션
     * @return 성공 메시지
     */
    @PutMapping("/update/{cartId}")
    public String updateCartQuantity(@PathVariable Long cartId, @RequestParam int quantity, HttpSession session) {
        UserVO user = (UserVO) session.getAttribute("user");
        if (user == null) {
            throw new RuntimeException("로그인된 사용자 정보가 없습니다.");
        }

        cartService.updateCartQuantity(cartId, quantity);
        return "장바구니 수량이 업데이트되었습니다.";
    }
}
