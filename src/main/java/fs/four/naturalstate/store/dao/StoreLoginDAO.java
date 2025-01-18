package fs.four.naturalstate.store.dao;

import fs.four.naturalstate.store.vo.StoreVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface StoreLoginDAO {
    StoreVO findByStoreId(String storeId);
}