package fs.four.naturalstate.user.controller;

import fs.four.naturalstate.user.service.LoginUserService;
import fs.four.naturalstate.user.vo.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<String> login(@RequestBody UserVO loginRequest, HttpSession session) {
        if (loginRequest.getUserId() == null || loginRequest.getPassword() == null) {
            return ResponseEntity.badRequest().body("UserId and Password must not be null!");
        }

        boolean isAuthenticated = loginUserService.authenticate(loginRequest.getUserId(), loginRequest.getPassword());
        if (isAuthenticated) {
            // 사용자 정보를 DB에서 조회 후 세션에 저장
            UserVO user = loginUserService.getUserDetails(loginRequest.getUserId());
            session.setAttribute("user", user);
            return ResponseEntity.ok("Login successful!");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid userId or password!");
        }
    }

    // 현재 로그인한 사용자 ID 조회
    @GetMapping("/session")
    public ResponseEntity<String> getSessionUser(HttpSession session) {
        UserVO user = (UserVO) session.getAttribute("user");
        if (user != null) {
            return ResponseEntity.ok("Logged-in user: " + user.getUserId());
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("No user is currently logged in.");
        }
    }

    // 현재 로그인한 사용자 상세 정보 조회
    @GetMapping("/session/detail")
    public ResponseEntity<UserVO> getSessionUserDetails(HttpSession session) {
        UserVO user = (UserVO) session.getAttribute("user");
        if (user != null) {
            return ResponseEntity.ok(user);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }

    // 로그아웃 처리
    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpSession session) {
        session.invalidate(); // 세션 무효화
        return ResponseEntity.ok("Logout successful!");
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

    //회원정보 수정
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
