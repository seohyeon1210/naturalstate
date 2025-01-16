package fs.four.naturalstate.user.vo;

import java.time.LocalDate;

/**
 * 사용자 정보를 관리하는 VO 클래스.
 * 모든 사용자 관련 기능 (아이디 찾기, 비밀번호 찾기, 회원가입 등)에 사용됩니다.
 */
public class FindUserVO {

    // 공통 필드
    private String userId;   // 사용자 아이디
    private String password; // 비밀번호
    private String email;    // 이메일 주소
    private String userName; // 사용자 이름
    private String phone;    // 전화번호
    private LocalDate joindate; // 가입 날짜
    private String auth;     // 사용자 권한 (예: USER, ADMIN)

    // 선택적 필드
    private String zip;           // 우편번호
    private String address;       // 기본 주소
    private String detailAddress; // 상세 주소
    private boolean receiveEmail; // 이메일 수신 여부

    // 기본 생성자
    public FindUserVO() {
    }

    // Getters and Setters
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public LocalDate getJoindate() {
        return joindate;
    }

    public void setJoindate(LocalDate joindate) {
        this.joindate = joindate;
    }

    public String getAuth() {
        return auth;
    }

    public void setAuth(String auth) {
        this.auth = auth;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getDetailAddress() {
        return detailAddress;
    }

    public void setDetailAddress(String detailAddress) {
        this.detailAddress = detailAddress;
    }

    public boolean isReceiveEmail() {
        return receiveEmail;
    }

    public void setReceiveEmail(boolean receiveEmail) {
        this.receiveEmail = receiveEmail;
    }

    @Override
    public String toString() {
        return "FindUserVo{" +
                "userId='" + userId + '\'' +
                ", userName='" + userName + '\'' +
                ", phone='" + phone + '\'' +
                ", email='" + email + '\'' +
                ", joindate=" + joindate +
                ", auth='" + auth + '\'' +
                '}';
    }
}
