package com.diary.back.service;

import com.diary.back.model.PostEmotion;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PostEmotionService {

    List<PostEmotion> findAll();

    //실패
//    List<PostEmotion> searchDateAndUserid(Long String post_date, Long user_id, Long category_id);


    //위치가이상함
//    List<PostEmotion> searchDateAndUserid(@Param("post_date") String post_date, @Param("user_id") Long user_id, @Param("category_id") Long category_id);



}
