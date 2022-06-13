package com.diary.back.controller;

import com.diary.back.model.Emotion;
import com.diary.back.service.EmotionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.FileInputStream;
import java.io.FileNotFoundException;

@RestController
//@RequestMapping("???")    // 뭐라고 주소를 적어야하지? 주소를 꼭 적어야하나?
public class EmotionController {

    @Autowired
    private EmotionService emotionService;

}
