package fs.four.naturalstate.product.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import fs.four.naturalstate.product.service.ProductWriteService;
import fs.four.naturalstate.product.vo.ProductWriteVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ProductRestController {

    @Autowired
    private ProductWriteService productWriteService;

    @PostMapping("/productwrite")
    public ResponseEntity<String> productwrite(@RequestParam("productThumbnailImg") MultipartFile thumbnail,
                                               @RequestParam("productDetailImg") MultipartFile detail,
                                               @RequestParam("productData") String productData) throws Exception {

        System.out.println("상품 등록 요청 데이터: " + productData);
        try {
            ProductWriteVO productWriteVO = new ObjectMapper().readValue(productData, ProductWriteVO.class);

            productWriteService.addProductWrite(productWriteVO, thumbnail, detail);
            return ResponseEntity.ok("성공");
        } catch (Exception e) {
            System.err.println("상품 등록 처리 중 오류 발생: " + e.getMessage());
            return ResponseEntity.status(500).body("상품 등록 실패");
        }
    }

    @GetMapping("/products")
    public ResponseEntity<List> getProducts(@RequestParam(value = "category", required = false) String category) {
        try {
            List productsList;

            if (category != null && !category.isEmpty()) {
                productsList = productWriteService.listProductsByCategory(category);
            } else {
                productsList = productWriteService.listProducts();
            }

            return ResponseEntity.ok(productsList);
        } catch (Exception e) {
            System.err.println("상품 조회 중 오류 발생: " + e.getMessage());
            return ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping("/product/{productNumber}")
    public ResponseEntity<ProductWriteVO> getProduct(@PathVariable long productNumber) {
        try {
            ProductWriteVO product = productWriteService.getProductById(productNumber);

            if (product != null) {
                return ResponseEntity.ok(product);
            } else {
                return ResponseEntity.status(404).body(null);
            }
        } catch (Exception e) {
            System.err.println("상품 조회 중 오류 발생: " + e.getMessage());
            return ResponseEntity.internalServerError().build();
        }
    }
}
