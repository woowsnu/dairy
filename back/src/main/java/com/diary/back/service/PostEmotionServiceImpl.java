//package com.diary.back.service;
//
//import com.diary.back.model.PostEmotion;
//import com.diary.back.repository.PostEmotionRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.repository.query.Param;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class PostEmotionServiceImpl implements PostEmotionService{
//
//    @Autowired
//    private PostEmotionRepository repository;
//
//
//
//    public List<PostEmotion> findAll(){
//
//        return repository.findAll();
//    }
//
////    public List<PostEmotion> searchDateAndUserid(@Param("post_date") String post_date, @Param("user_id") Long user_id, @Param("category_id") Long category_id){
////
////        return repository.searchDateAndUserid(post_date, user_id, category_id);
////    };
//}
