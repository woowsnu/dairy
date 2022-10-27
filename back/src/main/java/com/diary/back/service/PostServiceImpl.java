package com.diary.back.service;

import com.diary.back.model.Emotion;
import com.diary.back.model.Post;
import com.diary.back.model.User;
import com.diary.back.repository.PostRepository;
import com.diary.back.repository.UserRepository;
import io.sentry.spring.tracing.SentrySpan;
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
    @Autowired
    private final UserRepository userRepository;

    @SentrySpan
    public Post registPost(Post post){
        return postRepository.save(post);
    }

    // userId 를 필터로 Post 일부 조회
    @SentrySpan
    public List<Post> findByUserId(Long userId){
        List<Post> postList = postRepository.findByUserId(userId);
        return postList;
    }

    @SentrySpan
    public Optional<Post> findByPostId(Long postId){
        return postRepository.findById(postId);
    }

    // Post 전체 조회
    @SentrySpan
    @Override
    public List<Post> findAll() {
        return postRepository.findAll();
    }

    // Post Update
    // 작성자를 확인하는 로직을 넣어야할 거 같은데.
    @SentrySpan
    @Override
    public Post update(Post post){
        final Optional<Post> foundPost = postRepository.findById(post.getId());

        foundPost.ifPresent(newPost ->{
            newPost.setId(post.getId());
            newPost.setTitle(post.getTitle());
            newPost.setContents(post.getContents());
            newPost.setEmotion(post.getEmotion());
            newPost.setLastUpdate(post.getLastUpdate());

            postRepository.save(newPost);
        });
        // 왜 바로 조회를 하면 제대로 된 값이 안 들어가고, emotion 에 null 값이 들어가게 되는 거지?
        // findByPostId 가 여기에 들어가도 안되네. 따로 findBtPostId 하면 잘 됨.
        Optional<Post> updatedPost = findByPostId(foundPost.get().getId());

        return updatedPost.get();
    }

    @SentrySpan
    public List<Post> delete(Long postId){
        Optional<Post> post = postRepository.findById(postId);
        Post deletePost = post.get();
        User user = userRepository.findByEmail(deletePost.getUser().getEmail());
        postRepository.delete(deletePost);
        return postRepository.findAll();
    }

    @SentrySpan
    public List<Post> findBySearch(String search){
        // 일단 search 가 포함된 postList 받아옴
        List<Post> postList = postRepository.findBySearch(search);
        // 그거 말고 findAll 해서 모든 post 를 가져온뒤에, 거기서 emotion을 뽑고, 그걸 다시,
        for(Post posttmp : postRepository.findAll()){
            for (Emotion emotiontmp : posttmp.getEmotion()){
                if(emotiontmp.getWord().contains(search)){
                    postList.add(posttmp);
                }
            }
        }
        return postList;
    }

}
