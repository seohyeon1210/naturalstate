package fs.four.naturalstate.delivery.vo;

import lombok.Getter;
import lombok.Setter;

public class DeliveryVO {
    // Getter & Setter
    @Setter
    @Getter
    private Long deliveryId;         // 배송지 ID
    @Setter
    @Getter
    private String userId;           // 사용자 ID
    @Setter
    @Getter
    private String recipientName;    // 받는 사람 이름
    @Setter
    @Getter
    private String phoneNumber;      // 전화번호
    @Setter
    @Getter
    private String address;          // 기본 주소
    @Setter
    @Getter
    private String detailAddress;    // 상세 주소
    @Setter
    @Getter
    private String postalCode;       // 우편번호
    private boolean isDefault;       // 기본 배송지 여부

    // 생성자
    public DeliveryVO() {}

    public DeliveryVO(Long deliveryId, String userId, String recipientName, String phoneNumber, String address,
                      String detailAddress, String postalCode, boolean isDefault) {
        this.deliveryId = deliveryId;
        this.userId = userId;
        this.recipientName = recipientName;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.detailAddress = detailAddress;
        this.postalCode = postalCode;
        this.isDefault = isDefault;
    }

    public boolean isDefault() {
        return isDefault;
    }

    public void setDefault(boolean aDefault) {
        isDefault = aDefault;
    }
}
