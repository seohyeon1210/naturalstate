package fs.four.naturalstate.delivery.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DeliveryControllerImpl {

    @GetMapping("/delivery")
    public String DeliveryManage() {
        return "forward:/index.html";
    }

    @GetMapping("/deliverylist")
    public String DeliveryList() { return "forward:/index.html"; }

}
