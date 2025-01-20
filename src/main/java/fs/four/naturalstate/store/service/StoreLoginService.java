package fs.four.naturalstate.store.service;

import fs.four.naturalstate.store.vo.StoreVO;

public interface StoreLoginService {
    StoreVO authenticate(String storeId, String password);
}
