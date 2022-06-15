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

    @PostMapping("/login")
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException{
        System.out.println("doPost 실행");
        res.setContentType("text/html;charset=UTF-8");


        PrintWriter out = res.getWriter();
        out.print("user login post방식");
        System.out.println("doPost get");

        String id = req.getParameter("user_name");
        String pw = req.getParameter("password");

        out.print("id " + id);
        out.print("pw " + pw);
        out.close();
    }
}
