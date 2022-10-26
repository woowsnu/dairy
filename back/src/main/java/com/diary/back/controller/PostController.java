package com.diary.back.controller;

import com.diary.back.DTO.UserDTO;
import com.diary.back.model.Post;
import com.diary.back.service.PostService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
@RequiredArgsConstructor
public class PostController {

    @Autowired
    private final PostService postService;

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

    // userId 로 필터링 된 post 조회
    @Operation(summary = "게시글 일부 조회 with userId", description = "user Id 로 필터링 된 post 조회", tags = {"Post Controller"})
    @PostMapping("/v1/post/user")   // postId 를 이용한 조회도 있을 수 있다고 생각해 /user 까지 넣음.
    public ResponseEntity<?> findByUserId(@RequestBody UserDTO userDTO){
        if(userDTO != null) {
            return ResponseEntity.ok().body(postService.findByUserId(userDTO.getId()));
        }
        return ResponseEntity.badRequest().body("Failed to Look up user's posts");
    }

    // postId 로 필터링 된 post 조회
    @Operation(summary = "게시글 일부 조회 with postId", description = "post Id 로 필터링 된 post 조회 ", tags = {"Post Controller"})
    @GetMapping("/v1/post/{postId}")
    public ResponseEntity<?> findByPostId(@PathVariable Long postId){
        try{
            Optional<Post> post = postService.findByPostId(postId);
            return ResponseEntity.ok().body(post);
        }
        catch (Exception e){
            return ResponseEntity.badRequest().body("Failed to Look up the post");
        }
    }

    @Operation(summary = "게시글 전체 조회", description = "전체 게시글을 조회합니다.", tags = {"Post Controller"})
    @GetMapping("/v1/posts")
    public List<Post> findAll(){

        return postService.findAll();
    }

    @Operation(summary = "게시글 수정", description = "게시글을 수정합니다.", tags = {"Post Controller"})
    @PatchMapping("/v1/post/update")
    public Post update(@RequestBody Post post){

        return postService.update(post);
    }

    @Operation(summary = "게시글 삭제", description = "post Id 를 이용해 게시글을 삭제합니다.", tags = {"Post Controller"})
    @DeleteMapping("/v1/post/delete/{postId}")
    public ResponseEntity<?> deletePost(@PathVariable Long postId){
        try{
            return ResponseEntity.ok(postService.delete(postId));
        }
        catch (Exception e){
            return ResponseEntity.badRequest().body("Failed to Delete the Post");
        }
    }

//    public ResponseEntity<Post> getPostPostEmotion(@PathVariable("user_id") Long user_id, @RequestParam("post_date")){
//        Optional<Post> post =
//                getPostPostEmotion()
//                emotionService.findbycatid(emotion_cat_id);
//        return new ResponseEntity<Emotion>(emotion.get(), HttpStatus.OK);
//    }


}
