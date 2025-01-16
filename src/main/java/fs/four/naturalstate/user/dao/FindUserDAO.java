package fs.four.naturalstate.user.dao;

import fs.four.naturalstate.user.vo.FindUserVO;
import org.apache.ibatis.annotations.Mapper;


import java.util.Optional;

/**
 * 사용자 정보를 데이터베이스에서 검색하거나 업데이트하는 DAO 인터페이스.
 * 데이터베이스와의 직접적인 상호작용을 처리합니다.
 */
@Mapper
public interface FindUserDAO {

    /**
     * 이름, 전화번호, 이메일로 사용자 검색 (아이디 찾기)
     *
     * @param name  사용자 이름
     * @param phone 사용자 전화번호
     * @param email 사용자 이메일
     * @return 사용자 정보를 담은 Optional 객체
     */
    Optional<FindUserVO> findByNameAndPhoneAndEmail(String name, String phone, String email);

    /**
     * 아이디, 이름, 전화번호, 이메일로 사용자 검색 (비밀번호 찾기)
     * @param userId 사용자 아이디
     * @param name 사용자 이름
     * @param phone 사용자 전화번호
     * @param email 사용자 이메일
     * @return 사용자 정보를 담은 Optional 객체
     */
    Optional<FindUserVO> findByUserIdAndNameAndPhoneAndEmail(String userId, String name, String phone, String email);

    /**
     * 사용자 비밀번호 업데이트
     * @param userId 사용자 고유 ID
     * @param password 새 비밀번호
     */
    void updatePassword(String userId, String password);
}
