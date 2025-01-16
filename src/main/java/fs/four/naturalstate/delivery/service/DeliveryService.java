package fs.four.naturalstate.delivery.service;

import fs.four.naturalstate.delivery.dao.DeliveryDAO;
import fs.four.naturalstate.delivery.vo.DeliveryVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeliveryService {

    @Autowired
    private DeliveryDAO deliveryDAO;

    public List<DeliveryVO> getDeliveryList(String userId) {
        return deliveryDAO.getDeliveryList(userId); // DAO 호출
    }


    // 배송지 추가
    public boolean addDelivery(DeliveryVO deliveryVO) {
        return deliveryDAO.addDelivery(deliveryVO) > 0;
    }

    // 배송지 수정
    public boolean updateDelivery(DeliveryVO deliveryVO) {
        return deliveryDAO.updateDelivery(deliveryVO) > 0;
    }

    // 배송지 삭제
    public boolean deleteDelivery(String id, String userId) {
        return deliveryDAO.deleteDelivery(id, userId) > 0;
    }
}
