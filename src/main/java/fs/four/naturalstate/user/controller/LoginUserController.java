package fs.four.naturalstate.user.controller;

import fs.four.naturalstate.user.service.LoginUserService;
import fs.four.naturalstate.user.vo.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/api/login")
@CrossOrigin(origins = "http://localhost:3000")
public class LoginUserController {

    @Autowired
    private LoginUserService loginUserService;

    // 로그인 요청 처리
    @PostMapping
    public String login(@RequestBody UserVO loginRequest, HttpSession session) {
        if (loginRequest.getUserId() == null || loginRequest.getPassword() == null) {
            return "UserId and Password must not be null!";
        }

        boolean isAuthenticated = loginUserService.authenticate(loginRequest.getUserId(), loginRequest.getPassword());
        if (isAuthenticated) {
            // 사용자 정보를 세션에 저장
            session.setAttribute("user", loginRequest.getUserId());
            return "Login successful!";
        } else {
            return "Invalid userId or password!";
        }
    }

    // 현재 로그인한 사용자 정보 조회
    @GetMapping("/session")
    public String getSessionUser(HttpSession session) {
        String userId = (String) session.getAttribute("user");
        if (userId != null) {
            return "Logged-in user: " + userId;
        } else {
            return "No user is currently logged in.";
        }
    }

    // 로그아웃 처리
    @PostMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate(); // 세션 무효화
        return "Logout successful!";
    }
}

//   getMapping 404로 controller쪽으로 옮겨서 http://localhost:18080/login 잘 나올것
//    // React의 index.html로 포워딩
//    @GetMapping("/login")
//    public String loginPage() {
//        return "forward:/index.html";
//    }

