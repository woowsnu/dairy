package com.diary.back.controller;

import com.diary.back.model.User;
import com.diary.back.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("user")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public List<User> findbyid(@RequestBody User user){

        return userService.findbyid(user);
    }
//
//    // 유저 등록
//    @PostMapping
//    public User regist(@RequestBody User user){
//        System.out.println("regist user");
//        return userService.regist(user);
//    }
//
//    // 유저 수정
//    @PatchMapping
//    public List<User> update(@RequestBody User user){
//        System.out.println("update user");
//        return userService.update(user);
//    }

}
