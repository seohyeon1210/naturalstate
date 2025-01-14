package fs.four.naturalstate.mypage.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashMap;
import java.util.Map;

@RestController
public class MypageController {

    @GetMapping("/mypage")
    public Map<String, String> mypage() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "마이페이지입니다..");
        return response;
    }
    
    //건우 새로 추가함
    @RestController
    @RequestMapping("/api/user")
    public class UserController {

        @GetMapping("/welcome")
        public String getWelcomeMessage() {
            // 예시: 사용자 이름을 반환
            String username = "김춘배";
            return username + "님 환영합니다.";
        }
    }

}
