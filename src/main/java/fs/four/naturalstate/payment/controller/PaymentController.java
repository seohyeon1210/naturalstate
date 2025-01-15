package fs.four.naturalstate.payment.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PaymentController {

    @GetMapping("/sandbox")
    public String Sandbox() {
        return "forward:/index.html";
    }

    @GetMapping("/sandbox/success")
    public String SandboxSuccess() {
        return "forward:/index.html";
    }

    @GetMapping("/sandbox/fail")
    public String SandboxFail() {
        return "forward:/index.html";
    }

}
