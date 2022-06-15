package com.diary.back.repository;

import com.diary.back.model.PostEmotion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PutMapping;

import java.util.List;

@Repository
public interface PostEmotionRepository extends JpaRepository<PostEmotion, Long> {

//    @Query("SELECT post_date FROM post")
//    List<Object> searchjoin();

//    @Query("select p.postdate, p.user_id, pe.category_id FROM post p FULL OUTER JOIN post_emotion pe ON WHERE p.post_date = :post_date and p.user_id = :user_id")
//   ---------------------------------

 //    -------------------------------

//    List<postPostEmotion>


   //    //findDAteAnd
//    //일단 쿼리메소드로 먼저해보기


//    List<PostEmotion> findDistinctBypostdateAnduserid(String post_date, Long user_id);
}
