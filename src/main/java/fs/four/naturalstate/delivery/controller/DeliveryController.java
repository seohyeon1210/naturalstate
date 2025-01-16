package fs.four.naturalstate.delivery.controller;

import fs.four.naturalstate.delivery.service.DeliveryService;
import fs.four.naturalstate.delivery.vo.DeliveryVO;
import fs.four.naturalstate.user.vo.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.servlet.http.HttpSession;
import java.util.List;

@RestController
@RequestMapping("/api/delivery")
public class DeliveryController {

    @Autowired
    private DeliveryService deliveryService;

    // 배송지 목록 조회
    @GetMapping("/list")
    public ResponseEntity<?> getDeliveryList(HttpSession session) {
        UserVO user = (UserVO) session.getAttribute("user"); // 세션에서 사용자 정보 가져오기
        if (user == null) {
            System.err.println("Error: No user in session!"); // 디버깅 출력
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("로그인이 필요합니다.");
        }

        String userId = user.getUserId(); // UserVO에서 userId 가져오기
        System.out.println("Fetching delivery list for userId: " + userId); // 디버깅 출력

        try {
            List<DeliveryVO> deliveryList = deliveryService.getDeliveryList(userId); // userId로 배송지 조회
            return ResponseEntity.ok(deliveryList); // 배송지 목록 반환
        } catch (Exception e) {
            System.err.println("Error fetching delivery list: " + e.getMessage()); // 예외 출력
            e.printStackTrace(); // 전체 스택 트레이스 출력
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Server Error");
        }
    }



    // 배송지 추가
    @PostMapping("/add")
    public ResponseEntity<?> addDelivery(@RequestBody DeliveryVO deliveryVO, HttpSession session) {
        String userId = (String) session.getAttribute("userId"); // 세션에서 사용자 ID 가져오기
        if (userId == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("로그인이 필요합니다.");
        }
        deliveryVO.setUserId(userId); // 세션 사용자 ID 설정
        boolean isAdded = deliveryService.addDelivery(deliveryVO);
        if (isAdded) {
            return ResponseEntity.ok(deliveryVO); // 추가된 데이터를 반환
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("배송지 추가에 실패했습니다.");
        }
    }

    // 배송지 수정
    @PostMapping("/update")
    public ResponseEntity<?> updateDelivery(@RequestBody DeliveryVO deliveryVO, HttpSession session) {
        String userId = (String) session.getAttribute("userId"); // 세션에서 사용자 ID 가져오기
        if (userId == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("로그인이 필요합니다.");
        }
        deliveryVO.setUserId(userId); // 세션 사용자 ID 설정
        boolean isUpdated = deliveryService.updateDelivery(deliveryVO);
        if (isUpdated) {
            return ResponseEntity.ok("배송지가 성공적으로 수정되었습니다.");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("배송지 수정에 실패했습니다.");
        }
    }

    // 배송지 삭제
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteDelivery(@PathVariable("id") String id, HttpSession session) {
        String userId = (String) session.getAttribute("userId"); // 세션에서 사용자 ID 가져오기
        if (userId == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("로그인이 필요합니다.");
        }
        boolean isDeleted = deliveryService.deleteDelivery(id, userId);
        if (isDeleted) {
            return ResponseEntity.ok("배송지가 성공적으로 삭제되었습니다.");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("배송지 삭제에 실패했습니다.");
        }
    }
}
