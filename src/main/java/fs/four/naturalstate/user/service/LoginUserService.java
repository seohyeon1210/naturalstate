package fs.four.naturalstate.user.service;

import fs.four.naturalstate.user.dao.LoginUserDAO;
import fs.four.naturalstate.user.vo.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.mindrot.jbcrypt.BCrypt;

@Service
public class LoginUserService {

    @Autowired
    private LoginUserDAO loginUserDAO;

    /**
     * 사용자 인증 메서드
     * @param userId 입력된 사용자 ID
     * @param rawPassword 입력된 사용자 비밀번호
     * @return 인증 성공 여부
     */
    public boolean authenticate(String userId, String rawPassword) {
        // 데이터베이스에서 사용자 정보 가져오기
        UserVO user = loginUserDAO.findByUserId(userId);

        // 사용자 존재 여부와 비밀번호 검증
        if (user != null) {
            System.out.println("DB에 저장된 비밀번호: " + user.getPassword());
            System.out.println("입력된 비밀번호: " + rawPassword);

            boolean isValidPassword = BCrypt.checkpw(rawPassword, user.getPassword());
            System.out.println("비밀번호 검증 결과: " + isValidPassword);

            return isValidPassword;
        }

        System.out.println("해당 사용자 ID를 찾을 수 없습니다.");
        return false;
    }

    /**
     * 사용자 상세 정보 조회 메서드
     * @param userId 사용자 ID
     * @return 사용자 정보 (UserVO 객체)
     */
    public UserVO getUserDetails(String userId) {
        // 데이터베이스에서 사용자 정보 가져오기
        UserVO user = loginUserDAO.findByUserId(userId);

        if (user != null) {
            System.out.println("사용자 정보 조회 성공: " + user.toString());
            return user;
        }

        System.out.println("해당 사용자 ID를 찾을 수 없습니다.");
        return null;
    }
}
