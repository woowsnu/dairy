package com.diary.back.controller;

import com.diary.back.model.Emotion;
import com.diary.back.service.EmotionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.List;

@RestController
//@RequestMapping("???")    // 뭐라고 주소를 적어야하지? 주소를 꼭 적어야하나?
public class EmotionController {

    @Autowired
    private EmotionService emotionService;

    // 슬라이드로 보여주기
    @GetMapping(path = "/{emotion_cat_id}")
    public List<Emotion> findEmotion(@PathVariable(name = "emotion_cat_id") Long emotion_cat_id){
        System.out.println("findEmotion");
        return emotionService.findEmotion(emotion_cat_id);
    }


    // 슬라이드에서 선택된 감정을 포스트로 넘겨주기
    @GetMapping
    public Emotion post(@RequestParam Long emotion_cat_id, @RequestBody Emotion emotion){
        System.out.println("post emotion");
        return emotionService.post(emotion_cat_id, emotion);
    }

}
