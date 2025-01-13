package fs.four.naturalstate.product.service;

import fs.four.naturalstate.product.vo.ProductWriteVO;
import org.springframework.web.multipart.MultipartFile;

public interface ProductWriteService {

    public int addProductWrite(ProductWriteVO productWriteVO, MultipartFile thumbnailFile, MultipartFile detailFile) throws Exception;
}
