package com.diary.back.service;

import com.diary.back.model.Emotion;
import com.diary.back.repository.EmotionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmotionServiceImpl implements EmotionService {

    @Autowired
    private EmotionRepository repository;

    @Override
    public List<Emotion> findAll(){
        return repository.findAll();
    }
}
