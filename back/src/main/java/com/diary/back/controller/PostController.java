package com.diary.back.controller;

import com.diary.back.model.Post;
import com.diary.back.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("post")
@CrossOrigin
public class PostController {

    @Autowired
    private PostService postService;



    @PutMapping
    public List<Post> update(@RequestBody Post post){

        return postService.update(post);
    }
    

}
