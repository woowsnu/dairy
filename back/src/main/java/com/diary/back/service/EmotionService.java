package com.diary.back.service;

import com.diary.back.model.Emotion;

import java.util.List;

public interface EmotionService {

    List<Emotion> findByCategoryId(Long categoryId);

    List<Emotion> findAll();

//    Optional<Emotion> findbycatid(Long categoryId);



//    Optional<Emotion> findByUseridAndDate(Long emotion_cat_id);

//    List<Emotion> searchBycatid(Emotion emotion);

//    Emotion post(Long emotion_cat_id, Emotion emotion);

//    List<Emotion> findEmotion(Long emotion_cat_id);
}
