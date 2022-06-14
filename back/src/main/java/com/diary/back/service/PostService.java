package com.diary.back.service;



import com.diary.back.model.Post;

import java.util.List;

public interface PostService {


    List<Post> findAll();

    Post save(Post post);

    List<Post> update(Post post);




    //    List<Post> find(Post post);
}
