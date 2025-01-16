package fs.four.naturalstate.user.service;

import fs.four.naturalstate.user.dao.FindUserDAO;
import fs.four.naturalstate.user.vo.FindUserVO;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * 사용자 관련 비즈니스 로직을 처리하는 서비스 클래스.
 */
@Service
public class FindUserService {

    private final FindUserDAO findUserDAO;

    public FindUserService(FindUserDAO findUserDAO) {
        this.findUserDAO = findUserDAO;
    }

    /**
     * 아이디 찾기
     * @param name 사용자 이름
     * @param phone 사용자 전화번호
     * @param email 사용자 이메일
     * @return 찾은 사용자 아이디
     */
    public String findUserId(String name, String phone, String email) {
        // DAO에서 사용자 정보 검색
        Optional<FindUserVO> user = findUserDAO.findByNameAndPhoneAndEmail(name, phone, email);

        // 사용자 아이디 반환
        if (user.isPresent()) {
            return user.get().getUserId();
        } else {
            throw new IllegalArgumentException("해당 정보를 가진 사용자를 찾을 수 없습니다.");
        }
    }

    /**
     * 비밀번호 찾기 및 임시 비밀번호 설정
     * @param userId 사용자 아이디
     * @param name 사용자 이름
     * @param phone 사용자 전화번호
     * @param email 사용자 이메일
     * @return 생성된 임시 비밀번호
     */
    public String resetPassword(String userId, String name, String phone, String email) {
        // DAO에서 사용자 정보 검색
        Optional<FindUserVO> user = findUserDAO.findByUserIdAndNameAndPhoneAndEmail(userId, name, phone, email);

        if (user.isPresent()) {
            // 임시 비밀번호 생성
            String tempPassword = generateTemporaryPassword();

            // 비밀번호 업데이트
            findUserDAO.updatePassword(userId, tempPassword);

            // 생성된 임시 비밀번호 반환
            return tempPassword;
        } else {
            throw new IllegalArgumentException("해당 정보를 가진 사용자를 찾을 수 없습니다.");
        }
    }

    /**
     * 임시 비밀번호 생성
     * @return 생성된 임시 비밀번호
     */
    private String generateTemporaryPassword() {
        // 간단한 임시 비밀번호 생성 로직 (실제 사용 시 더 복잡한 로직 권장)
        return "Temp1234!";
    }
}
