package fs.four.naturalstate.delivery.dao;

import fs.four.naturalstate.delivery.vo.DeliveryVO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.data.repository.query.Param;

import java.util.List;

@Mapper
public interface DeliveryDAO {
    List<DeliveryVO> findByUserId(String userId);
    void insertDelivery(DeliveryVO delivery);
    void updateDelivery(DeliveryVO delivery);
    void deleteDelivery(@Param("deliveryNumber") Long deliveryNumber, @Param("userId") String userId);

}
