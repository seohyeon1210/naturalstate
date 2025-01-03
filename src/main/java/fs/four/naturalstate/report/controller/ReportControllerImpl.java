package fs.four.naturalstate.report.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ReportControllerImpl {
    @GetMapping("/report")
    public String Report() {
        return "forward:/index.html";
    }
}
