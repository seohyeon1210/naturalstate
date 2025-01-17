package fs.four.naturalstate.product.service;

import fs.four.naturalstate.product.dao.ProductWriteDAO;
import fs.four.naturalstate.product.vo.ProductWriteVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.List;
import java.util.UUID;

@Service("productWriteService")
@Transactional(propagation = Propagation.REQUIRED)
public class ProductWriteServiceImpl implements ProductWriteService {
    @Autowired
    private ProductWriteDAO productWriteDAO;

    @Value("${file.upload-dir}")
    private String uploadDir;

    @Override
    public int addProductWrite(ProductWriteVO productWrite, MultipartFile thumbnailFile, MultipartFile detailFile) throws Exception {
        if (thumbnailFile != null && !thumbnailFile.isEmpty()) {
            String thumbnailFileName = saveFile(thumbnailFile);
            productWrite.setProduct_thumbnail_name(thumbnailFileName);
            productWrite.setProduct_thumbnail_path("/images/product/" + thumbnailFileName);
        }

        if (detailFile != null && !detailFile.isEmpty()) {
            String detailFileName = saveFile(detailFile);
            productWrite.setProduct_detail_name(detailFileName);
            productWrite.setProduct_detail_path("/images/product/" + detailFileName);
        }
        return productWriteDAO.insertProductWrite(productWrite);
    }

    private String saveFile(MultipartFile file) throws Exception {
        String directory = System.getProperty("user.dir") + "/src/main/resources/static/images/product/";
        directory = directory.endsWith("/") ? directory : directory + "/";
        File dir = new File(directory);

        String encodedFileName = file.getOriginalFilename();
        if (encodedFileName == null) {
            throw new Exception("파일 이름을 가져올 수 없습니다.");
        }
        String decodedFileName = java.net.URLDecoder.decode(encodedFileName, "UTF-8");
        File destFile = new File(directory + decodedFileName);

        file.transferTo(destFile);

        return decodedFileName;
    }

    @Override
    public List listProducts() throws Exception{
        List productsList = null;
        productsList = productWriteDAO.selectAllProductList();

        return productsList;
    }
}
