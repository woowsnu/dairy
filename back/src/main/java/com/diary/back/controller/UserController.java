package com.diary.back.controller;

import com.diary.back.model.Model;
import com.diary.back.model.User;
import com.diary.back.service.UserService;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("/user")
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
//    @PostMapping("/regist")
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



//    @PostMapping("/login")
//    public void login(@RequestBody User user){
//        System.out.println("login");
//        System.out.println(user.getUser_name());
//        System.out.println(user.getUser_password());
//        userService.login(user);
//    }

//    @ModelAttribute("login")
//    public Model getlogin(){
//        return getlogin(1);
//    }


//
//    @ModelAttribute("login")
//    public Model model(String username, String userpassword){
//        this.username = username;
//        this.userpassword = userpassword;
//    }
//
//    public static model of(final)

//    @ModelAttribute("login")
//    public void login(String username, String userpassword){
//        this.username = username;
//        this.userpassword = userpassword;
//    }
//    @GetMapping(path = "/loginfail 로그인실패페이지")
//    public String loginfail(){
//        return "loginfail";
//    }



    @PostMapping(value = "/login")
//    public String isThere(@ModelAttribute("login") Model model) {
    public String isThere(@RequestBody Model model, HttpSession session, RedirectAttributes redirectAttr){
        //여기서부터 다 살리기


        try{userService.isThereUseridAndPassword(model);
//            String s =
            session.setAttribute("username",model.getUsername());
//            return "redirect:/login";
            session.setMaxInactiveInterval(-1);
            return "redirect:/";
        } catch(Exception e){

        return "로그인실패 페이지";

//        return userService.isThereUseridAndPassword(model);
    }
    }



}

