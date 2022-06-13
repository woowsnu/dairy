package com.diary.back.service;

import com.diary.back.model.Emotion;

import java.util.List;

public interface EmotionService {

    List<Emotion> findAll();

    Emotion post(Long emotion_cat_id, Emotion emotion);

    List<Emotion> findEmotion(Long emotion_cat_id);
}
