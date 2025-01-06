package fs.four.naturalstate.util;

import org.mindrot.jbcrypt.BCrypt;

public class PasswordEncryptionExample {
    public static void main(String[] args) {
        String rawPassword = "123456"; // 사용자 비밀번호

        // 비밀번호 암호화
        String hashedPassword = BCrypt.hashpw(rawPassword, BCrypt.gensalt());
        System.out.println("암호화된 비밀번호: " + hashedPassword);

        // 암호화된 비밀번호를 DB에 저장하세요.
    }
}
