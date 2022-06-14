package com.diary.back.controller;

import com.diary.back.model.PostEmotion;
import com.diary.back.repository.EmotionRepository;
import com.diary.back.repository.PostEmotionRepository;
import com.diary.back.service.PostEmotionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("PostEmotion")
@CrossOrigin
public class PostEmotionController {


//   @PutMapping
//    List<PostEmotion> searchDateAndUserid(String post_date, Long user_id,Long category_id){

//       return List<PostEmotion>;
//   };
//    searchDateAndUserid
    @Autowired
    private PostEmotionService postEmotionService;

    @Autowired
    private PostEmotionRepository repository;

//   @PutMapping
//   public List<PostEmotion> searchDateAndUserid(@Param("post_date") String post_date, @Param("user_id") Long user_id, @Param("category_id") Long category_id){
//
//
//
//       return repository.searchDateAndUserid(post_date, user_id, category_id);
//   };

}
