package fs.four.naturalstate.customerService.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CustomerServiceControllerImpl {
    @GetMapping("/customerservice")
    public String CustomerService() {
        return "forward:/index.html";
    }

    @GetMapping("/post")
    public String PostForm() { return "forward:/index.html"; }

    @GetMapping("/events")
    public String Event() { return "forward:/index.html"; }

    @GetMapping("/inquiry")
    public String Inquiry () { return "forward:/index.html"; }

    @GetMapping("/notice")
    public String Notice () { return "forward:/index.html"; }

    @GetMapping("/deliverymethod")
    public String DeliveryMethod () { return "forward:/index.html"; }
}
