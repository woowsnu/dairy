package com.diary.back.repository;

import com.diary.back.model.Join;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JoinRepository {

    @Query("SELECT * FROM post p LEFT OUTER JOIN post_emotion pe ON p.post_id=pe.post_id  AND p.post_id= :post_id AND p.post_date= :post_date UNION SELECT * FROM post p RIGHT OUTER JOIN post_emotion pe ON p.post_id=pe.post_id AND pe.emotion_cat_id= :category_id")
    List<Join> searchDateAndUserid(@Param("post_date") String post_date, @Param("user_id") Long user_id, @Param("category_id") Long category_id);

}
