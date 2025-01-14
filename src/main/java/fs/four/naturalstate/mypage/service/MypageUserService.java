package fs.four.naturalstate.mypage.service;


import fs.four.naturalstate.mypage.dao.MypageUserDAO;
import fs.four.naturalstate.mypage.vo.MypageVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MypageUserService {

    @Autowired
    private MypageUserDAO mypageUserDAO;

    public MypageVO getUserById(String userId) {
        return mypageUserDAO.findById(userId);
    }

    public boolean updateUser(MypageVO mypageVO) {
        int rowsUpdated = mypageUserDAO.updateUser(mypageVO);
        return rowsUpdated > 0;
    }
}
