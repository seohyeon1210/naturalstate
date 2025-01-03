package fs.four.naturalstate.store.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class StoreControllerImpl {
    @GetMapping("/storejoin")
    public String StoreJoin() {
        return "forward:/index.html";
    }

    @GetMapping("/productwrite")
    public String ProductWrite() {
        return "forward:/index.html";
    }
}
