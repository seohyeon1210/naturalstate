package fs.four.naturalstate.store.controller;

import fs.four.naturalstate.store.service.StoreLoginService;
import fs.four.naturalstate.store.vo.StoreVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.servlet.http.HttpSession;

import java.util.Map;

@RestController
@RequestMapping("/api/store")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
 // CORS 허용
public class StoreLoginController {

    @Autowired
    private StoreLoginService storeLoginService;

    // 스토어 로그인 처리
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody StoreVO loginRequest, HttpSession session) {
        if (loginRequest.getStoreId() == null || loginRequest.getPassword() == null) {
            return ResponseEntity.badRequest().body("StoreId and Password must not be null!");
        }

        StoreVO store = storeLoginService.authenticate(loginRequest.getStoreId(), loginRequest.getPassword());
        if (store != null) {
            session.setAttribute("store", store);
            session.setAttribute("userType", "store");

            // JSON 형식으로 반환
            return ResponseEntity.ok(store);
        } else {
            return ResponseEntity.status(401).body("Invalid store ID or password.");
        }
    }

    // 현재 로그인한 스토어 세션 정보 조회
    @GetMapping("/session")
    public ResponseEntity<?> getSession(HttpSession session) {
        String userType = (String) session.getAttribute("userType");
        StoreVO store = (StoreVO) session.getAttribute("store");

        if ("store".equals(userType) && store != null) {
            return ResponseEntity.ok(Map.of("userType", "store"));


        } else {
            return ResponseEntity.status(401).body("로그인이 필요합니다.");
        }
    }

    // 로그아웃 처리
    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpSession session) {
        session.invalidate(); // 세션 무효화
        return ResponseEntity.ok("Logout successful!");
    }
}
