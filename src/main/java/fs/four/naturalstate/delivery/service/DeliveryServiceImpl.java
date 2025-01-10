package fs.four.naturalstate.delivery.service;

import fs.four.naturalstate.delivery.dao.DeliveryDAO;
import fs.four.naturalstate.delivery.vo.DeliveryVO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeliveryServiceImpl {
    private final DeliveryDAO deliveryDAO;

    // 생성자를 통해 DAO 주입
    public DeliveryServiceImpl(DeliveryDAO deliveryDAO) {
        this.deliveryDAO = deliveryDAO;
    }

    // 배송지 목록 조회
    public List<DeliveryVO> getDeliveryList(String userId) {
        // DAO에서 특정 사용자 ID에 해당하는 배송지 목록 반환
        return deliveryDAO.getDeliveryList(userId);
    }

    // 배송지 추가
    public void addDelivery(DeliveryVO deliveryVO) {
        // 새로운 배송지를 DAO를 통해 추가
        deliveryDAO.addDelivery(deliveryVO);
    }

    // 배송지 수정
    public void updateDelivery(DeliveryVO deliveryVO) {
        // 특정 배송지 정보를 수정
        deliveryDAO.updateDelivery(deliveryVO);
    }

    // 배송지 삭제
    public void deleteDelivery(Long deliveryId) {
        // 특정 ID의 배송지를 삭제
        deliveryDAO.deleteDelivery(deliveryId);
    }

    // 기본 배송지 설정
    public void setDefaultDelivery(Long deliveryId) {
        // 모든 배송지를 기본값 해제 후, 특정 배송지를 기본 배송지로 설정
        List<DeliveryVO> deliveryList = deliveryDAO.getDeliveryList(null);
        for (DeliveryVO delivery : deliveryList) {
            if (delivery.getDeliveryId().equals(deliveryId)) {
                delivery.setDefault(true);
            } else {
                delivery.setDefault(false);
            }
        }
    }
}
