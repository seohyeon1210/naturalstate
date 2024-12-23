package fs.four.naturalstate.main.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainControllerImpl {

    @GetMapping("/main")
    public String main() {
        return "메인 페이지입니다.";
    }
}
