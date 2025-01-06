package fs.four.naturalstate.user.dao;

import fs.four.naturalstate.user.vo.LoginUserVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface LoginUserDAO {

    /**
     * 사용자 정보를 userId로 검색
     * @param userId 사용자 ID
     * @return 사용자 정보 (LoginUserVO)
     */
    @Select("SELECT user_id AS userId, user_password AS password FROM users WHERE user_id = #{userId}")
    LoginUserVO findByUserId(String userId);
}
