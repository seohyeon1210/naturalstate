package fs.four.naturalstate.cart.vo;

import lombok.Data;
import java.util.Date;

@Data
public class CartVO {
    private Long cartId; // 장바구니 고유 번호
    private String userId; // 사용자 ID
    private Long productNumber; // 상품 고유 번호
    private String productTitle; // 상품 이름
    private int productPrice; // 상품 단가
    private int quantity; // 수량
    private String productThumbnailPath; // 상품 썸네일 이미지 경로
    private String itemOption; // 상품 옵션
    private Date createdDate; // 장바구니 추가 날짜
}
