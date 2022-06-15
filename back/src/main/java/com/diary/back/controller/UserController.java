package com.diary.back.controller;

import com.diary.back.model.User;
import com.diary.back.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

@RestController
@RequestMapping("user")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userService;

//    @PostMapping
//    public List<User> findbyid(@RequestBody User user){
//
//        return userService.findbyid(user);
//    }

    // 유저 등록
    @PostMapping("/regist")
    public User regist(@RequestBody User user){
        System.out.println("regist user");
        return userService.regist(user);
    }
//
//    // 유저 수정
//    @PatchMapping
//    public List<User> update(@RequestBody User user){
//        System.out.println("update user");
//        return userService.update(user);
//    }



//    @PostMapping("/login")
//    public void login(@RequestBody User user){
//        System.out.println("login");
//        System.out.println(user.getUser_name());
//        System.out.println(user.getUser_password());
//        userService.login(user);
//    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public String isThere(@ModelAttribute User user) {
        if (userService.isThereUseridAndPassword(user)) {
            return "redirect:/";
        }
        return "로그인페이지";
    }
}
