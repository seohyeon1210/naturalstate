package fs.four.naturalstate.cart.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CartControllerImpl {
    @GetMapping("/cart")
    public String Cart() {
        return "forward:/index.html";
    }
}
