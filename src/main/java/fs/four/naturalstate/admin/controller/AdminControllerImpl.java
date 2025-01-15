package fs.four.naturalstate.admin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AdminControllerImpl{
    @GetMapping ("/adminpage")
    public String Adminpage() {
        return "forward:/index.html";
    }

    @GetMapping ("/adminorder")
    public String AdminOrder () { return "forward:/index.html"; }

    @GetMapping ("/adminuserlist")
    public String AdminUserlist () { return "forward:/index.html"; }

    @GetMapping ("/adminconfirmlist")
    public String AdminConfirmlist () { return "forward:/index.html"; }
}