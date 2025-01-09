package fs.four.naturalstate.user.service;

import fs.four.naturalstate.user.dao.UserDAO;
import fs.four.naturalstate.user.vo.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Controller
@Service("joinService")
@Transactional(propagation = Propagation.REQUIRED)
public class UserServiceImpl implements UserService {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    UserDAO userDAO;

    @Override
    public int addUser(UserVO user) throws Exception{
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        return userDAO.insertUser(user);
    }
}
