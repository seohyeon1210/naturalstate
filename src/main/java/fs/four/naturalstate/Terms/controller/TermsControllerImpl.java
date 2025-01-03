package fs.four.naturalstate.Terms.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TermsControllerImpl {
    @GetMapping("/terms")
    public String terms() {
        return "forward:/index.html";
    }
}