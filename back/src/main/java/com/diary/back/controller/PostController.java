package com.diary.back.controller;

import com.diary.back.model.Post;
import com.diary.back.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("post")
@CrossOrigin
public class PostController {

//    @Autowired
//    private Post post;



//    밑줄은 데이터가 아직없어서 못쓰는거
//    @GetMapping
//    public List<Post> update(){
//
//        return PostService.update();
//    }

//    public List<Post> update;

}
