package com.diary.back.controller;

import com.diary.back.model.Emotion;
import com.diary.back.service.EmotionService;
import io.sentry.Sentry;
import io.sentry.spring.tracing.SentrySpan;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")    // 뭐라고 주소를 적어야하지? 주소를 꼭 적어야하나?
@CrossOrigin("*")
@RequiredArgsConstructor
public class EmotionController {

    @Autowired
    private EmotionService emotionService;

    @Operation(summary = "감정 조회", description = "카테고리로 필터링 된 감정 조회", tags = {"Emotion Controller"})
    @GetMapping("/v1/emotion/{categoryId}")
    @SentrySpan
    public ResponseEntity<?> findByCategoryId(@PathVariable Long categoryId){
        try{
            List<Emotion> emotionList = emotionService.findByCategoryId(categoryId);
            return ResponseEntity.ok().body(emotionList);
        }
        catch (Exception e){
            Sentry.captureException(e);
            return ResponseEntity.badRequest().body("Failed to Looking Up Emotion With CategoryId");
        }
    }

//    // 슬라이드로 보여주기
//    @GetMapping(path = "/{emotion_cat_id}")
//    public List<Emotion> findEmotion(@PathVariable(name = "emotion_cat_id") Long emotion_cat_id){
//        System.out.println("findEmotion");
//        return emotionService.findEmotion(emotion_cat_id);
//    }
//
//
//    // 슬라이드에서 선택된 감정을 포스트로 넘겨주기
//    @GetMapping
//    public Emotion post(@RequestParam Long emotion_cat_id, @RequestBody Emotion emotion){
//        System.out.println("post emotion");
//        return emotionService.post(emotion_cat_id, emotion);
//    }

//    //emotion_cat_id에 맞는 값을 보냄, 슬라이더값받아서 <Component>에 비동기처리하는건 여기선 불가능한듯...
//    @GetMapping(value = "모달창까지url/{emotion_cat_id}", produces = {MediaType.APPLICATION_JSON_VALUE})
//    public ResponseEntity<Emotion> getEmotion(@PathVariable("emotion_cat_id") Long emotion_cat_id){
//        Optional<Emotion> emotion = emotionService.findbycatid(emotion_cat_id);
//        return new ResponseEntity<Emotion>(emotion.get(), HttpStatus.OK);
//    }

//    //emotion_cat_id에 맞는 값을 보냄, 슬라이더값받아서 <Component>에 비동기처리하는건 여기선 불가능한듯...
//    @GetMapping(value = "url/{emotion_cat_id}", produces = {MediaType.APPLICATION_JSON_VALUE})
//    public ResponseEntity<Emotion> getEmotion(@PathVariable("emotion_cat_id") Long emotion_cat_id){
//        Optional<Emotion> emotion = emotionService.findbycatid(emotion_cat_id);
//        return new ResponseEntity<Emotion>(emotion.get(), HttpStatus.OK);
//    }

//    @GetMapping
//    public List<Emotion> findAll(){
//        System.out.println("Get요청 전송됨");
//        return emotionService.findAll();
//    }

}