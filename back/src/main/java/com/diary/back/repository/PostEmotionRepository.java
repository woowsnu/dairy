package com.diary.back.repository;

import com.diary.back.model.PostEmotion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostEmotionRepository extends JpaRepository<PostEmotion, Long> {
}
