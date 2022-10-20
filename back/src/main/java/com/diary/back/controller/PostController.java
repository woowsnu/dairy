package com.diary.back.controller;

import com.diary.back.model.Emotion;
import com.diary.back.model.Post;
import com.diary.back.service.PostService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
@RequiredArgsConstructor
public class PostController {

//    @Autowired
//    private PostServiceImpl;

    @Autowired
    private PostService postService;

    @Operation(summary = "게시글 작성 요청", description = "게시물을 등록합니다.", tags = {"Post Controller"})
    @PostMapping("/v1/post/regist")
    public ResponseEntity<?> registPost(@RequestBody Post post){
        try{
            postService.registPost(post);
            return ResponseEntity.ok("Success to Regist Post");
        }
        catch (Exception e){
            return ResponseEntity.badRequest().body("Failed to Regist Post");
        }
    }

    @Operation(summary = "게시글 전체 조회", description = "전체 게시글을 조회합니다.", tags = {"Post Controller"})
    @GetMapping("/v1/posts")
    public List<Post> findAll(){

        return postService.findAll();
    }

//    @PostMapping
//    public Post save(@RequestBody Post post){
//
//        return postService.save(post);
//    }
    @Operation(summary = "게시글 수정", description = "게시글을 수정합니다.", tags = {"Post Controller"})
    @PutMapping("/v1/post/update")
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
