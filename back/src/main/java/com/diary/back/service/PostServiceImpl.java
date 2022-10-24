package com.diary.back.service;

import com.diary.back.model.Post;
import com.diary.back.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
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

    // userId 를 필터로 Post 일부 조회
    public List<Post> findByUserId(Long userId){
        System.out.println("seviceImpl user"+userId);
        List<Post> postList = postRepository.findByUserId(userId);
        return postList;
    }

    // Post 전체 조회
    @Override
    public List<Post> findAll() {
        return postRepository.findAll();
    }

    @Override
    public List<Post> update(Post post){
        final Optional<Post> foundPost = postRepository.findById(post.getId());

        foundPost.ifPresent(newPost ->{
            newPost.setId(post.getId());
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
