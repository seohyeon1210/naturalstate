package fs.four.naturalstate.admin.controller;

import fs.four.naturalstate.admin.service.AdminService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller("adminController")
public class AdminControllerImpl implements AdminController {

    @Autowired
    private AdminService adminService;

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

    @Override
    public ModelAndView listUsers(HttpServletRequest request,
                                  HttpServletResponse response) throws Exception {
        List usersList = adminService.listUsers();

        ModelAndView mav = new ModelAndView("forward:/index.html");
        mav.addObject("usersList", usersList);
        return mav;
    }
}