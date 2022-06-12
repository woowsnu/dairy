package com.diary.back.service;

import com.diary.back.model.Post;
import com.diary.back.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class PostServiceImpl implements PostService{

    @Autowired
    private PostRepository repository;



    @Override
    public List<Post> update(Post post){
        final Optional<Post> foundPost = repository.findByID(post.getUser_id());

        foundPost.ifPresent(newPost ->{
            newPost.setPost_id(post.getPost_id());
            newPost.setPost_date(post.getPost_date());
            newPost.setPost_text(post.getPost_text());

            repository.save(newPost);
        });

        return repository.findAll();
    }


}
