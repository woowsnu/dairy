package com.diary.back.model;

import lombok.*;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.annotation.CreatedDate;

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
}
