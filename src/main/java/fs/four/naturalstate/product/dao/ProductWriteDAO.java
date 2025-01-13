package fs.four.naturalstate.product.dao;

import fs.four.naturalstate.product.vo.ProductWriteVO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.dao.DataAccessException;

@Mapper
public interface ProductWriteDAO {
    public int insertProductWrite(ProductWriteVO productWriteVO) throws DataAccessException;
}
