package com.diary.back.service;


import com.diary.back.model.Post;

import java.util.List;
import java.util.Optional;

public interface PostService {

    Post registPost(Post post);

    List<Post> findByUserId(Long userId);

    List<Post> findAll();
//
//    Post save(Post post);

    Post update(Post post);

    Optional<Post> findByPostId(Long postId);

    List<Post> delete(Long postId);




    //    List<Post> find(Post post);
}
