package fs.four.naturalstate.product.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ProductControllerImpl {
    @GetMapping("/productdetail")
    public String productdetail() {
        return "forward:/index.html";
    }
}
