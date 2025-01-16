package fs.four.naturalstate.delivery.dao;

import fs.four.naturalstate.delivery.vo.DeliveryVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface DeliveryDAO {
    List<DeliveryVO> getDeliveryList(String userId); // 배송지 목록 조회

    int addDelivery(DeliveryVO deliveryVO); // 배송지 추가

    int updateDelivery(DeliveryVO deliveryVO); // 배송지 수정

    int deleteDelivery(String id, String userId); // 배송지 삭제
}
