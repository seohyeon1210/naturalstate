package fs.four.naturalstate.store.dao;

import fs.four.naturalstate.store.vo.StoreVO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.dao.DataAccessException;

@Mapper
public interface StoreDAO {
    public int insertStore(StoreVO storeVO) throws DataAccessException;
}
