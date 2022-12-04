package com.diary.back.controller;

import com.diary.back.DTO.UserDTO;
import com.diary.back.model.User;
import com.diary.back.service.UserService;
import io.sentry.Sentry;
import io.sentry.spring.tracing.SentrySpan;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
@RequiredArgsConstructor
public class UserController {

    @Autowired
    private UserService userService;

//    @PostMapping
//    public List<User> findbyid(@RequestBody User user){
//
//        return userService.findbyid(user);
//    }

//     // 유저 등록
    @Operation(summary = "회원 가입 요청", description = "회원 정보를 등록합니다.", tags = {"User Controller"})
    @PostMapping("/v1/user/regist")
    @SentrySpan
    public ResponseEntity<?> registUser(@RequestBody User user){
        try{
            userService.registUser(user);
            return ResponseEntity.ok("Success Registing User");
        }
        catch (Exception e){
            Sentry.captureException(e);
            return ResponseEntity.badRequest().body("Failed Regist User");
        }
//        System.out.println("regist user");
//        return userService.registUser(user);
    }

    // 유저 로그인
    @Operation(summary = "회원 로그인 email", description = "이메일을 이용한 로그인", tags = {"User Controller"})
    @PostMapping("/v1/user/login")
    @SentrySpan
    public ResponseEntity<?> signInByEmail(@RequestBody UserDTO userDTO){
        try{
            User user = userService.signInByEmail(userDTO);
            UserDTO responseUserDTO = UserDTO.builder()
                    .id(user.getId())
                    .username(user.getUsername())
                    .email(user.getEmail())
                    .nickname(user.getNickname())
                    .postList(user.getPostList())
                    .build();
            return ResponseEntity.ok(responseUserDTO);
        }
        catch (Exception e){
            Sentry.captureException(e);
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

//    @Operation(summary = "sentry Test", description = "sentry test 를 위한 고의 에러 유발", tags = {"Sentry Test"})
//    @GetMapping("/v1/user/sentry/test")
//    @SentrySpan
//    public void sentryTest() {
//        try {
//            throw new Exception("Sentry Test Operation");
//        } catch (Exception e) {
//            Sentry.captureException(e);
//        }
//    }

//    // 유저 수정
//    @PatchMapping
//    public List<User> update(@RequestBody User user){
//        System.out.println("update user");
//        return userService.update(user);
//    }
}

