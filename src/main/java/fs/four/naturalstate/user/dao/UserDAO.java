package fs.four.naturalstate.user.dao;

import fs.four.naturalstate.user.vo.UserVO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.dao.DataAccessException;

@Mapper
public interface UserDAO {
    public int insertUser(UserVO userVO) throws DataAccessException;

}
