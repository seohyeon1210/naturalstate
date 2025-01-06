package fs.four.naturalstate.user.controller;

import fs.four.naturalstate.user.service.LoginUserService;
import fs.four.naturalstate.user.vo.LoginUserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/login")
@CrossOrigin(origins = "http://localhost:3000")
public class LoginUserController {

    @Autowired
    private LoginUserService loginUserService;

    // 로그인 요청 처리
    @PostMapping
    public String login(@RequestBody LoginUserVO loginRequest) {
        if (loginRequest.getUserId() == null || loginRequest.getPassword() == null) {
            System.out.println("로그인 요청: UserId 또는 Password가 null입니다.");
            return "UserId and Password must not be null!";
        }

        boolean isAuthenticated = loginUserService.authenticate(loginRequest.getUserId(), loginRequest.getPassword());
        if (isAuthenticated) {
            System.out.println("로그인 성공: UserId = " + loginRequest.getUserId());
            return "Login successful!";
        } else {
            System.out.println("로그인 실패: 아이디 또는 비밀번호가 잘못되었습니다.");
            return "Invalid userId or password!";
        }
    }

    // React의 index.html로 포워딩
    @GetMapping("/login")
    public String loginPage() {
        return "forward:/index.html";
    }
}
