package fs.four.naturalstate.user.controller;

import fs.four.naturalstate.user.vo.UserVO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class UserControllerImpl{

    @GetMapping("/join")
    public String join() {
        return "forward:/index.html";
    }

    @PostMapping("/join")
    public ResponseEntity<String> addUser(@RequestBody UserVO userVO) {
        try {
            // 회원가입 처리 로직
//            userService.addUser(userVO);
            return ResponseEntity.ok("회원가입 성공");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("회원가입 실패");
        }
    }
}
