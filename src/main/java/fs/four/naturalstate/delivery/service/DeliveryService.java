package fs.four.naturalstate.delivery.service;

import fs.four.naturalstate.delivery.vo.DeliveryVO;
import fs.four.naturalstate.delivery.dao.DeliveryDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeliveryService {

    @Autowired
    private DeliveryDAO deliveryDAO;

    /**
     * 특정 사용자 ID에 해당하는 배송지 목록을 반환합니다.
     * @param userId 사용자 ID
     * @return 배송지 목록
     */
    public List<DeliveryVO> getDeliveryList(String userId) {
        if (userId == null || userId.isEmpty()) {
            throw new IllegalArgumentException("사용자 ID는 필수입니다.");
        }
        // 로그 추가: 조회 요청
        System.out.println("배송지 목록 조회 - 사용자 ID: " + userId);
        return deliveryDAO.findByUserId(userId);
    }

    /**
     * 배송지를 추가합니다.
     * @param delivery 추가할 배송지 정보
     * @return 추가된 배송지 정보
     */
    public DeliveryVO addDelivery(DeliveryVO delivery) {
        if (delivery == null || delivery.getUserId() == null) {
            throw new IllegalArgumentException("배송지 정보와 사용자 ID는 필수입니다.");
        }
        // 로그 추가: 추가 요청
        System.out.println("배송지 추가 요청: " + delivery);
        deliveryDAO.insertDelivery(delivery);
        return delivery;
    }


    public DeliveryVO updateDelivery(DeliveryVO delivery) {
        // 오라클 DB에 데이터 업데이트
        deliveryDAO.updateDelivery(delivery);
        return delivery; // 수정된 데이터 반환
    }



    public void deleteDelivery(Long deliveryNumber, String userId) {
        // 로그 추가
        System.out.println("Service - 삭제할 배송지 번호: " + deliveryNumber + ", 사용자 ID: " + userId);

        // 배송지 삭제
        deliveryDAO.deleteDelivery(deliveryNumber, userId);
    }

}

