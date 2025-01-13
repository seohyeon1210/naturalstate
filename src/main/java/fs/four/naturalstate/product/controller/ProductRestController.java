package fs.four.naturalstate.product.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import fs.four.naturalstate.product.service.ProductWriteService;
import fs.four.naturalstate.product.vo.ProductWriteVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
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
}
