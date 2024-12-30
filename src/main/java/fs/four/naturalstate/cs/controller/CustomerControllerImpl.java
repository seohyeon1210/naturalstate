package fs.four.naturalstate.cs.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CustomerControllerImpl {

    @GetMapping("/cs")
    public String cs() {
        return "forward:/index.html";
    }

}


