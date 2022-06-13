package com.diary.back.controller;

import com.diary.back.service.EmotionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.FileInputStream;
import java.io.FileNotFoundException;

@RestController
//@RequestMapping("???")    // 뭐라고 주소를 적어야하지? 주소를 꼭 적어야하나?
public class EmotionController {

    @Autowired
    private EmotionService emotionService;

    // 파일 불러오기
    public static Workbook upload(){
        try{
            String filePath = "../../../../../../../../감정단어 정리_20220613.xlsx";
            FileInputStream fileStream = null;

            fileStream = new FileInputStream(filePath);

        } catch (FileNotFoundException e){
            throw new RuntimeException(e.getMessage(), e);
        }
    }

}
