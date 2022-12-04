package com.diary.back.repository;

import com.diary.back.model.Emotion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmotionRepository extends JpaRepository<Emotion, Long> {

    public List<Emotion> findByCategoryId(Long categoryId);

}
