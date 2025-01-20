package fs.four.naturalstate.product.service;

import fs.four.naturalstate.product.vo.ProductWriteVO;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ProductWriteService {

    public int addProductWrite(ProductWriteVO productWriteVO, MultipartFile thumbnailFile, MultipartFile detailFile) throws Exception;

    public List listProducts() throws Exception;

    public List<ProductWriteVO> listProductsByCategory(String category) throws Exception;
}
