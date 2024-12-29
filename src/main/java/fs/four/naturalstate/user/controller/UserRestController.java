package fs.four.naturalstate.user.controller;

import fs.four.naturalstate.user.service.UserService;
import fs.four.naturalstate.user.vo.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class UserRestController {

    @Autowired
    private UserService joinService;

    @PostMapping("/join")
    public ResponseEntity<String> join(@RequestBody UserVO userVO) throws Exception {

        System.out.println("회원가입 요청 데이터: " + userVO);
        try {
            joinService.addUser(userVO);
            return ResponseEntity.ok("성공");
        } catch (Exception e) {
            System.err.println("회원가입 처리 중 오류 발생: " + e.getMessage());
            return ResponseEntity.status(500).body("회원가입 실패");
        }
    }
}
