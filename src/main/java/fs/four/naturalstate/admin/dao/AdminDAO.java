package fs.four.naturalstate.admin.dao;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.dao.DataAccessException;

import java.util.List;

@Mapper
public interface AdminDAO {
    public List selectAllUserList() throws DataAccessException;

    public List selectAllStoreList() throws DataAccessException;

    public List selectProductList() throws DataAccessException;
}
