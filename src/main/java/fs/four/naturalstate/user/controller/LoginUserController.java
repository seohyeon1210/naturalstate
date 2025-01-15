package fs.four.naturalstate.user.controller;

import fs.four.naturalstate.user.service.LoginUserService;
import fs.four.naturalstate.user.vo.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

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

    // 현재 로그인한 사용자 ID 조회
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

    // 현재 로그인한 사용자 상세 정보 조회
    @GetMapping("/session/detail")
    public ResponseEntity<UserVO> getSessionUserDetails(HttpSession session) {
        String userId = (String) session.getAttribute("user");
        if (userId != null) {
            UserVO user = loginUserService.getUserDetails(userId);
            if (user != null) {
                return ResponseEntity.ok(user); // 사용자 데이터 반환
            }
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build(); // 인증되지 않은 상태 반환
    }

    // 회원탈퇴 요청 처리
    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteUser(HttpSession session) {
        UserVO user = (UserVO) session.getAttribute("user");
        if (user != null) {
            boolean isDeleted = loginUserService.deleteUser(user.getUserId());
            if (isDeleted) {
                session.invalidate(); // 세션 무효화
                return ResponseEntity.ok("User deleted successfully.");
            } else {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to delete user.");
            }
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not logged in.");
    }
}
