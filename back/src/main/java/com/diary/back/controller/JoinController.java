package com.diary.back.controller;

//import com.diary.back.model.Join;
import com.diary.back.model.Post;
import com.diary.back.model.User;
import com.diary.back.repository.JoinRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping
public class JoinController {

//    @Autowired
//    private JoinRepository repository;




//    @PostMapping("/api")
//    public List<Join> searchDateAndUserid(String post_date, Long user_id, Long category_id){
//
////        final Optional<Join> map = repository.findById(join.getPost_id());
////
////            map.ifPresent(newJoin ->{
////            newJoin.setPost_id(post.getPost_id());
////            newJoin.setPost_date(post.getPost_date());
////            newJoin.setPost_text(post.getPost_text());
////
////            repository.save(newPost);
////        });
//
//        return repository.searchDateAndUserid(post_date, user_id, category_id);
//        return repository.searchDateAndUserid();
    }
//}
