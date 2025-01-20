package fs.four.naturalstate.product.controller;

import fs.four.naturalstate.product.service.ProductWriteServiceImpl;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

//    @GetMapping("/products/fruits")
//    public String fruitsproduct() {
//        return "forward:/index.html";
//    }
//
//    @GetMapping("/products/grains")
//    public String grainsproduct() {
//        return "forward:/index.html";
//    }
//
//    @GetMapping("/products/vegetables")
//    public String vegetablesproduct() {
//        return "forward:/index.html";
//    }

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

    @GetMapping("/products/{category}")
    public String productsByCategory(@PathVariable String category, HttpServletRequest request) {
        if (!category.matches("fruits|grains|vegetables")) {
            return "forward:/index.html";
        }

        try {
            List productsList = productWriteService.listProductsByCategory(category);
            request.setAttribute("category", category);
            request.setAttribute("productsList", productsList);
        } catch (Exception e) {
            e.printStackTrace();
        }

        return "forward:/index.html";
    }
}
