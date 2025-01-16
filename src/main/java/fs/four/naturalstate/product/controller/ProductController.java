package fs.four.naturalstate.product.controller;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.servlet.ModelAndView;

public interface ProductController {
    public ModelAndView listProducts(HttpServletRequest request,
                                     HttpServletResponse response) throws Exception;
}
