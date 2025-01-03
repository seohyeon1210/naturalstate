package fs.four.naturalstate.store.service;

import fs.four.naturalstate.store.dao.StoreDAO;
import fs.four.naturalstate.store.vo.StoreVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Service("storeService")
@Transactional(propagation = Propagation.REQUIRED)
public class StoreServiceImpl implements StoreService {

    @Autowired
    StoreDAO storeDAO;

    @Override
    public int addStore(StoreVO storeVO) throws Exception{
        return storeDAO.insertStore(storeVO);
    }
}
