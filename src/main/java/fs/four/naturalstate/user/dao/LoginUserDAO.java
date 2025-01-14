package fs.four.naturalstate.user.dao;

import fs.four.naturalstate.user.vo.UserVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface LoginUserDAO {

    /**
     * 사용자 정보를 userId로 검색
     * @param userId 사용자 ID
     * @return 사용자 정보 (LoginUserVO)
     */
    UserVO findByUserId(String userId);
    // 사용자 정보 삭제
    void deleteByUserId(String userId);
}
