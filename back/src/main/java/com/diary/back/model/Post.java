package com.diary.back.model;


import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;


@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Setter
@Getter
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "postId")
    private Long id;

    @Column
    private String title;
    @Column
    private String contents;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "userId", referencedColumnName = "userId")
    private User user;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "emotionId", referencedColumnName = "emotionId")
    private List<Emotion> emotion;

    @CreatedDate
    private String createDate = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyMMdd"));

    @UpdateTimestamp
    private Timestamp lastUpdate;

//    public static Post createPost(PostDTO postDTO){
//        Post post = Post.builder()
//                .title(postDTO.getTitle())
//                .contents(postDTO.getContents())
//                .user(postDTO.getUserId())
//                .emotionId(postDTO.getEmotionId())
//                .createDate(postDTO.getCreateDate())
//                .lastUpdate(postDTO.getLastUpdate())
//                .build();
//        return post;
//    }

//    @OneToMany
//    @JoinTable(name = "PostPostEmotion", joinColumns = @JoinColumn(name = "post_id"),
//    inverseJoinColumns = @JoinColumn(name="PostEmotion_id"))
//    private List<Post> postPostEmotions = new ArrayList<>();

//    @OneToMany
//    @JoinTable(name = "PostPostEmotion", joinColumns = @JoinColumn(name = "post_id"),
//    inverseJoinColumns = @JoinColumn(name="PostEmotion_id"))
//    private List<PostEmotion> postemotions = new ArrayList<>();

//    private PostPostEmotion postPostEmotion;
//    private List<PostPostEmotion> Post_PostEmotion = new ArrayList<>();
}
