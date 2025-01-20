package fs.four.naturalstate.delivery.controller;

import fs.four.naturalstate.delivery.vo.DeliveryVO;
import fs.four.naturalstate.delivery.service.DeliveryService;
import fs.four.naturalstate.user.vo.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
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
    public List<DeliveryVO> getDeliveryList(HttpSession session) {
        UserVO loggedInUser = (UserVO) session.getAttribute("user");
        if (loggedInUser == null) {
            throw new IllegalStateException("로그인이 필요합니다.");
        }

        System.out.println("로그인된 사용자 ID: " + loggedInUser.getUserId());
        List<DeliveryVO> deliveryList = deliveryService.getDeliveryList(loggedInUser.getUserId());

        // 디버깅 로그: 데이터 확인
        System.out.println("배송지 목록 조회 결과: " + deliveryList);

        return deliveryList;
    }

    // 배송지 추가
    @PostMapping("/add")
    public DeliveryVO addDelivery(@RequestBody DeliveryVO delivery, HttpSession session) {
        System.out.println("Controller - 배송지 추가 요청 도착"); // 1. Controller 메서드 호출 로그
        UserVO loggedInUser = (UserVO) session.getAttribute("user");
        if (loggedInUser == null) {
            System.out.println("Controller - 로그인된 사용자 없음");
            throw new IllegalStateException("로그인이 필요합니다.");
        }
        System.out.println("Controller - 로그인된 사용자 ID: " + loggedInUser.getUserId()); // 3. 사용자 정보 로그

        // 배송지 정보에 사용자 ID 추가
        delivery.setUserId(loggedInUser.getUserId());
        System.out.println("추가할 DeliveryVO: " + delivery);

        // Service 호출
        DeliveryVO addedDelivery = deliveryService.addDelivery(delivery);

        // 디버깅 로그: 추가된 데이터 확인
        System.out.println("추가된 배송지 데이터: " + addedDelivery);

        return addedDelivery;
    }

    // 배송지 수정
    @PostMapping("/update")
    public DeliveryVO updateDelivery(@RequestBody DeliveryVO delivery, HttpSession session) {
        UserVO loggedInUser = (UserVO) session.getAttribute("user");
        if (loggedInUser == null) {
            throw new IllegalStateException("로그인이 필요합니다.");
        }

        delivery.setUserId(loggedInUser.getUserId());
        return deliveryService.updateDelivery(delivery);
    }


    // 배송지 삭제
    @DeleteMapping("/delete/{id}")
    public void deleteDelivery(@PathVariable Long id, HttpSession session) {
        // 세션에서 로그인된 사용자 정보 가져오기
        UserVO loggedInUser = (UserVO) session.getAttribute("user");
        if (loggedInUser == null) {
            throw new IllegalStateException("로그인이 필요합니다.");
        }

        // 로그 추가: 삭제 요청 정보 확인
        System.out.println("삭제 요청 - 배송지 ID: " + id + ", 사용자 ID: " + loggedInUser.getUserId());

        // 배송지 삭제
        deliveryService.deleteDelivery(id, loggedInUser.getUserId());
    }
}
