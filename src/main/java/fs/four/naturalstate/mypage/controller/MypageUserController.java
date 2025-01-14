package fs.four.naturalstate.mypage.controller;


import fs.four.naturalstate.mypage.service.MypageUserService;
import fs.four.naturalstate.mypage.vo.MypageVO;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/mypage/user")
public class MypageUserController {

    @Autowired
    private MypageUserService mypageUserService;

    @GetMapping("/detail")
    public ResponseEntity<MypageVO> getUserDetail(HttpSession session) {
        String userId = (String) session.getAttribute("userId");
        MypageVO user = mypageUserService.getUserById(userId);
        return ResponseEntity.ok(user);
    }

    @PostMapping("/update")
    public ResponseEntity<String> updateUser(@RequestBody MypageVO mypageVO) {
        boolean updated = mypageUserService.updateUser(mypageVO);
        if (updated) {
            return ResponseEntity.ok("User updated successfully.");
        } else {
            return ResponseEntity.status(500).body("Failed to update user.");
        }
    }
}
