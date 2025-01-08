package fs.four.naturalstate.product.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ProductControllerImpl {
    @GetMapping("/productdetail")
    public String productdetail() {
        return "forward:/index.html";
    }

    @GetMapping("/bestproduct")
    public String bestproduct() {
        return "forward:/index.html";
    }

    @GetMapping("/recommendedproduct")
    public String recommendedproduct() {
        return "forward:/index.html";
    }

    @GetMapping("/fruitsproduct")
    public String fruitsproduct() {
        return "forward:/index.html";
    }

    @GetMapping("/grainsproduct")
    public String grainsproduct() {
        return "forward:/index.html";
    }

    @GetMapping("vegetablesproduct")
    public String vegetablesproduct() {
        return "forward:/index.html";
    }
}
