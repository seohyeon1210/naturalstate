package fs.four.naturalstate.customerService.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CustomerServiceControllerImpl {
    @GetMapping("/customerservice")
    public String CustomerService() {
        return "forward:/index.html";
    }

}
