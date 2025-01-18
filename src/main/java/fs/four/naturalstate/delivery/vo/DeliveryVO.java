package fs.four.naturalstate.delivery.vo;

import lombok.Data;

@Data
public class DeliveryVO {

    private Long deliveryNumber;       // 배송 고유 번호
    private String userId;             // 사용자 ID
    private String deliveryUsername;   // 배송지 이름
    private String deliveryPhone;      // 배송지 전화번호
    private String deliveryAddress;    // 배송지 주소
    private String deliveryZip;        // 배송지 우편번호
    private String deliveryDetailAddress; // 배송지 상세 주소
}
