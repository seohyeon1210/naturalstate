package fs.four.naturalstate.user.vo;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * 사용자 로그인 요청을 처리하기 위한 VO 클래스
 */
public class LoginUserVO {

    @JsonProperty("userId") // JSON 요청의 "userId" 필드를 매핑
    private String userId;

    @JsonProperty("userPassword") // JSON 요청의 "userPassword" 필드를 매핑
    private String password;

    // 기본 생성자
    public LoginUserVO() {
    }

    // Getter 및 Setter 메서드
    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
