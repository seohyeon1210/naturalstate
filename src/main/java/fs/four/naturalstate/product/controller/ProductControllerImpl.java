package fs.four.naturalstate.product.controller;

import fs.four.naturalstate.product.service.ProductWriteServiceImpl;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller("productController")
public class ProductControllerImpl implements ProductController {
    private final ProductWriteServiceImpl productWriteService;

    public ProductControllerImpl(ProductWriteServiceImpl productWriteService) {
        this.productWriteService = productWriteService;
    }

    @GetMapping("/productdetail")
    public String productdetail() {
        return "forward:/index.html";
    }

    @GetMapping("/bestproduct")
    public String bestproduct() {
        return "forward:/index.html";
    }

    @GetMapping("/recommendedproduct")
    public String recommendedproduct() {
        return "forward:/index.html";
    }

    @GetMapping("/fruitsproduct")
    public String fruitsproduct() {
        return "forward:/index.html";
    }

    @GetMapping("/grainsproduct")
    public String grainsproduct() {
        return "forward:/index.html";
    }

    @GetMapping("vegetablesproduct")
    public String vegetablesproduct() {
        return "forward:/index.html";
    }

    @GetMapping("productpage")
    public String productpage() {
        return "forward:/index.html";
    }

    @GetMapping("productwrite")
    public String Productwrite() {
        return "forward:/index.html";
    }

    @Override
    public ModelAndView listProducts(HttpServletRequest request,
                                     HttpServletResponse response) throws Exception {
        List productsList = productWriteService.listProducts();

        ModelAndView mav = new ModelAndView("forward:/index.html");
        mav.addObject("productsList", productsList);
        return mav;
    }
}
