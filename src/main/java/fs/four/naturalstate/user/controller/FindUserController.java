package fs.four.naturalstate.user.controller;

import fs.four.naturalstate.user.service.FindUserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * 사용자 관련 요청을 처리하는 컨트롤러 클래스.
 */
@RestController
@RequestMapping("/api/finduser")
public class FindUserController {

    private final FindUserService findUserService;

    public FindUserController(FindUserService findUserService) {
        this.findUserService = findUserService;
    }

    @PostMapping("/findid")
    public ResponseEntity<Map<String, String>> findUserId(@RequestBody Map<String, String> request) {
        String name = request.get("name");
        String phone = request.get("phone");
        String email = request.get("email");
        try {
            String userId = findUserService.findUserId(name, phone, email);
            return ResponseEntity.ok(Map.of("userId", userId, "message", "아이디 찾기 성공"));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }


    /**
     * 비밀번호 찾기 요청 처리
     * @param userId 사용자 아이디
     * @param name 사용자 이름
     * @param phone 사용자 전화번호
     * @param email 사용자 이메일
     * @return 성공 또는 에러 메시지
     */
    @PostMapping("/findpw")
    public ResponseEntity<Map<String, String>> resetPassword(
            @RequestParam String userId,
            @RequestParam String name,
            @RequestParam String phone,
            @RequestParam String email
    ) {
        try {
            // 비밀번호 재설정 로직 호출
            String tempPassword = findUserService.resetPassword(userId, name, phone, email);

            // 성공 메시지와 임시 비밀번호 반환
            return ResponseEntity.ok(Map.of("tempPassword", tempPassword, "message", "임시 비밀번호가 생성되었습니다."));
        } catch (IllegalArgumentException e) {
            // 에러 메시지 반환
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }
}
