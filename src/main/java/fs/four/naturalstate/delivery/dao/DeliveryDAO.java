package fs.four.naturalstate.delivery.dao;

import fs.four.naturalstate.delivery.vo.DeliveryVO;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class DeliveryDAO {
    // 가상 데이터베이스
    private final List<DeliveryVO> deliveryList = new ArrayList<>();

    // 배송지 목록 조회
    public List<DeliveryVO> getDeliveryList(String userId) {
        if (userId == null) {
            return deliveryList; // 모든 데이터 반환
        }
        // 특정 사용자 ID에 해당하는 배송지 반환
        List<DeliveryVO> userDeliveries = new ArrayList<>();
        for (DeliveryVO delivery : deliveryList) {
            if (delivery.getUserId().equals(userId)) {
                userDeliveries.add(delivery);
            }
        }
        return userDeliveries;
    }

    // 특정 배송지 조회
    public DeliveryVO getDeliveryById(Long deliveryId) {
        for (DeliveryVO delivery : deliveryList) {
            if (delivery.getDeliveryId().equals(deliveryId)) {
                return delivery;
            }
        }
        return null; // 해당 ID를 찾지 못한 경우
    }

    // 배송지 추가
    public void addDelivery(DeliveryVO deliveryVO) {
        deliveryList.add(deliveryVO);
    }

    // 배송지 수정
    public void updateDelivery(DeliveryVO deliveryVO) {
        for (int i = 0; i < deliveryList.size(); i++) {
            if (deliveryList.get(i).getDeliveryId().equals(deliveryVO.getDeliveryId())) {
                deliveryList.set(i, deliveryVO);
                return;
            }
        }
    }

    // 배송지 삭제
    public void deleteDelivery(Long deliveryId) {
        deliveryList.removeIf(delivery -> delivery.getDeliveryId().equals(deliveryId));
    }
}
