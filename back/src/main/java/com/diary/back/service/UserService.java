package com.diary.back.service;

//import com.diary.back.model.Model;
import com.diary.back.DTO.UserDTO;
import com.diary.back.model.User;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

public interface UserService {

    User registUser(User user);

    User signInByEmail(UserDTO userDTO);

//    List<User> findbyid(User user);

    // 유저 등록
//    User regist(User user);

    // 유저 수정
//    List<User> update(User user);

//    void login(User user);

//    Boolean isThereUseridAndPassword(Model model);
}
