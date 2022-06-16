package com.diary.back.controller;

import com.diary.back.model.User;
import com.diary.back.service.UserService;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

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



    @PostMapping(value = "/login")
//    public String isThere(@ModelAttribute("login") Model model) {
    public String isThere(@RequestBody Model model){
        if (userService.isThereUseridAndPassword(model)) {
//            return "redirect:/";
            return "naver.com";
        }
//        return "로그인페이지";
        return "google.com";
    }
}
