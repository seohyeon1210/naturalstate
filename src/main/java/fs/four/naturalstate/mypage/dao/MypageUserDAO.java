package fs.four.naturalstate.mypage.dao;


import fs.four.naturalstate.mypage.vo.MypageVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MypageUserDAO {

    MypageVO findById(String userId);

    int updateUser(MypageVO mypageVO);
}
