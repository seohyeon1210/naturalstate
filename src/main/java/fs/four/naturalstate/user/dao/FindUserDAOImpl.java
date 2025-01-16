package fs.four.naturalstate.user.dao;


import fs.four.naturalstate.user.vo.FindUserVO;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * FindUserDAO의 구현체.
 * JdbcTemplate을 사용하여 데이터베이스와 상호작용합니다.
 */
@Repository
public class FindUserDAOImpl implements FindUserDAO {

    private final JdbcTemplate jdbcTemplate;

    public FindUserDAOImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    // RowMapper를 사용하여 ResultSet을 FindUserVo 객체로 매핑
    private final RowMapper<FindUserVO> userRowMapper = (rs, rowNum) -> {
        FindUserVO user = new FindUserVO();
        user.setUserId(rs.getString("user_id"));
        user.setPassword(rs.getString("password"));
        user.setUserName(rs.getString("name"));
        user.setPhone(rs.getString("phone"));
        user.setEmail(rs.getString("email"));
        user.setJoindate(rs.getDate("joindate").toLocalDate());
        user.setAuth(rs.getString("auth"));
        return user;
    };

    @Override
    public Optional<FindUserVO> findByNameAndPhoneAndEmail(String name, String phone, String email) {
        String sql = "SELECT * FROM users WHERE name = ? AND phone = ? AND email = ?";
        return jdbcTemplate.query(sql, userRowMapper, name, phone, email).stream().findFirst();
    }

    @Override
    public Optional<FindUserVO> findByUserIdAndNameAndPhoneAndEmail(String userId, String name, String phone, String email) {
        String sql = "SELECT * FROM users WHERE user_id = ? AND name = ? AND phone = ? AND email = ?";
        return jdbcTemplate.query(sql, userRowMapper, userId, name, phone, email).stream().findFirst();
    }

    @Override
    public void updatePassword(String userId, String password) {
        String sql = "UPDATE users SET password = ? WHERE user_id = ?";
        jdbcTemplate.update(sql, password, userId);
    }
}
