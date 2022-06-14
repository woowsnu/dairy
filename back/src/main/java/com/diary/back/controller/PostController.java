package com.diary.back.controller;

import com.diary.back.model.Emotion;
import com.diary.back.model.Post;
import com.diary.back.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("post")
@CrossOrigin("*")
public class PostController {

//    @Autowired
//    private PostServiceImpl;

    @Autowired
    private PostService postService;

    @GetMapping
    public List<Post> findAll(){
        return postService.findAll();
    }

    @PostMapping
    public Post save(@RequestBody Post post){
        return postService.save(post);
    }

    @PutMapping
    public List<Post> update(@RequestBody Post post){

        return postService.update(post);
    }

//    public ResponseEntity<Post> getPostPostEmotion(@PathVariable("user_id") Long user_id, @RequestParam("post_date")){
//        Optional<Post> post =
//                getPostPostEmotion()
//                emotionService.findbycatid(emotion_cat_id);
//        return new ResponseEntity<Emotion>(emotion.get(), HttpStatus.OK);
//    }


}
