package com.diary.back.service;

import com.diary.back.model.Post;
import com.diary.back.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class PostServiceImpl implements PostService{

    @Autowired
    private final PostRepository postRepository;

    public Post registPost(Post post){
        return postRepository.save(post);
    }

    @Override
    public List<Post> findAll() {
        System.out.println("dsfsd");
        return postRepository.findAll();
    }
//
//    public Post save(Post post) {
//        return repository.save(post);
//    }
//
//
    @Override
    public List<Post> update(Post post){
        final Optional<Post> foundPost = postRepository.findById(post.getPost_id());

        foundPost.ifPresent(newPost ->{
            newPost.setPost_id(post.getPost_id());
            newPost.setTitle(post.getTitle());
            newPost.setContents(post.getContents());
            newPost.setLastUpdate(post.getLastUpdate());

            postRepository.save(newPost);
        });

        return postRepository.findAll();
    }


//    public List<PostEmotion> searchDateAndUserid(@Param("post_date") String post_date, @Param("user_id") Long user_id){
//
////        return repository.
//    };


//    List<Post>
//
//    public List<Post> find(Post post){
//        final Optional<Post> foundPost =
//    }

}
