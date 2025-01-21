package fs.four.naturalstate.user.controller;

import fs.four.naturalstate.user.service.LoginUserService;
import fs.four.naturalstate.user.vo.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.servlet.http.HttpSession;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/login")
@CrossOrigin(origins = "http://localhost:3000")

public class LoginUserController {

    @Autowired
    private LoginUserService loginUserService;

    // 로그인 요청 처리
    @PostMapping
    public ResponseEntity<Map<String, String>> login(@RequestBody UserVO loginRequest, HttpSession session) {
        Map<String, String> response = new HashMap<>();

        if (loginRequest.getUserId() == null || loginRequest.getPassword() == null) {
            response.put("error", "UserId and Password must not be null!");
            return ResponseEntity.badRequest().body(response);
        }

        boolean isAuthenticated = loginUserService.authenticate(loginRequest.getUserId(), loginRequest.getPassword());
        if (isAuthenticated) {
            // 사용자 정보를 DB에서 조회 후 세션에 저장
            UserVO user = loginUserService.getUserDetails(loginRequest.getUserId());
            session.setAttribute("user", user);
            session.setAttribute("userType", "user"); // 사용자 유형 추가
            response.put("message", "그대로에 오신걸 환영합니다!");
            return ResponseEntity.ok(response);
        } else {
            response.put("error", "아이디 및 비밀번호가 다릅니다!");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }

    // 현재 로그인한 사용자 상세 정보 조회
    @GetMapping("/session/detail")
    public ResponseEntity<?> getSessionUserDetails(HttpSession session) {
        UserVO user = (UserVO) session.getAttribute("user");
        if (user != null) {
            return ResponseEntity.ok(user); // 사용자 정보를 반환
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("No user is currently logged in.");
    }

    // 로그아웃 처리
    @PostMapping("/logout")
    public ResponseEntity<Map<String, String>> logout(HttpSession session) {
        session.invalidate(); // 세션 무효화
        Map<String, String> response = new HashMap<>();
        response.put("message", "Logout successful!");
        return ResponseEntity.ok(response);
    }

    // 회원 탈퇴 요청 처리
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

    // 회원정보 수정
    @PostMapping("/update")
    public ResponseEntity<String> updateUserInfo(@RequestBody UserVO updatedUser, HttpSession session) {
        UserVO user = (UserVO) session.getAttribute("user");
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("로그인 상태가 아닙니다.");
        }

        try {
            // 기존 사용자 정보 업데이트
            loginUserService.updateUserInfo(updatedUser);
            // 세션 정보도 갱신
            session.setAttribute("user", updatedUser);
            return ResponseEntity.ok("회원정보가 성공적으로 수정되었습니다.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("회원정보 수정에 실패했습니다.");
        }
    }
}
