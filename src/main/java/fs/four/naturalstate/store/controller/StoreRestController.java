package fs.four.naturalstate.store.controller;

import fs.four.naturalstate.store.service.StoreService;
import fs.four.naturalstate.store.vo.StoreVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class StoreRestController {
    @Autowired
    private StoreService storeService;

    @PostMapping("/storejoin")
    public ResponseEntity<String> storeJoin(@RequestBody StoreVO storeVO) throws Exception {
        System.out.println("입점신청 요청 데이터: " + storeVO);
        try {
            storeService.addStore(storeVO);
            return ResponseEntity.ok("성공");
        } catch (Exception e) {
            System.out.println("입점신청 중 오류 발생: " + e.getMessage());
            return ResponseEntity.status(500).body("입점신청 실패");
        }
    }
}
