package com.diary.back.service;

import com.diary.back.model.PostEmotion;
import com.diary.back.repository.PostEmotionRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class PostEmotionServiceImpl implements PostEmotionService{

    @Autowired
    private PostEmotionRepository repository;

    public List<PostEmotion> findAll(){
        return repository.findAll();
    }
}
