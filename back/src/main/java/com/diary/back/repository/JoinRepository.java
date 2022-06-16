//package com.diary.back.repository;
//
//import com.diary.back.model.Emotion;
//import com.diary.back.model.Join;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;
//import org.springframework.stereotype.Repository;
//
//import java.time.LocalDate;
//import java.util.List;
//
//@Repository
//public interface JoinRepository extends JpaRepository<Join, Long> {
//
//
//
////    @Query("select * from post_emotion pe left outer join post p on p.post_id")
////    @Query("SELECT * FROM post p LEFT OUTER JOIN post_emotion pe ON p.post_id=pe.post_id  AND p.user_id= :user_id AND p.post_date= :post_date UNION SELECT * FROM post p RIGHT OUTER JOIN post_emotion pe ON p.post_id=pe.post_id")
////    @Query("SELECT * FROM post p LEFT OUTER JOIN post_emotion pe ON p.post_id=pe.post_id  AND p.post_id=:post_id AND p.post_date=:post_date UNION SELECT * FROM post p RIGHT OUTER JOIN post_emotion pe ON p.post_id=pe.post_id")
////    List<Join> searchDateAndUserid(@Param("post_date") LocalDate post_date, @Param("user_id") Long user_id);
//
//
////    List<Object[]> searchDateAndUserid(@Param("post_date") String post_date, @Param("user_id") Long user_id, @Param("category_id") Long category_id);
//}
