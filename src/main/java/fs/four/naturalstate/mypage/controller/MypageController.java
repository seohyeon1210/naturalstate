package fs.four.naturalstate.mypage.controller;

import org.springframework.web.bind.annotation.GetMapping;
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
}
