package fs.four.naturalstate.admin.service;

import fs.four.naturalstate.admin.dao.AdminDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(propagation = Propagation.REQUIRED)
public class AdminServiceImpl implements AdminService {
    @Autowired
    private AdminDAO adminDAO;

    @Override
    public List listUsers() throws Exception{
        List usersList = null;
        usersList = adminDAO.selectAllUserList();
        return usersList;
    }
}
