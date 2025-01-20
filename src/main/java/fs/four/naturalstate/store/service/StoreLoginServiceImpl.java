package fs.four.naturalstate.store.service;

import fs.four.naturalstate.store.dao.StoreLoginDAO;
import fs.four.naturalstate.store.vo.StoreVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service("storeLoginService")
public class StoreLoginServiceImpl implements StoreLoginService {

    @Autowired
    private StoreLoginDAO storeLoginDAO;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public StoreVO authenticate(String storeId, String password) {
        StoreVO store = storeLoginDAO.findByStoreId(storeId);
        if (store != null) {
            System.out.println("DB에서 조회된 스토어 정보: " + store);
            System.out.println("입력된 비밀번호: " + password);
            System.out.println("DB 저장된 비밀번호: " + store.getPassword());
            if (passwordEncoder.matches(password, store.getPassword())) {
                System.out.println("비밀번호 일치");
                return store;
            } else {
                System.out.println("비밀번호 불일치");
            }
        } else {
            System.out.println("스토어 ID를 찾을 수 없음");
        }
        return null;
    }
}