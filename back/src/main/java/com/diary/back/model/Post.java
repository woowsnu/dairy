package com.diary.back.model;


import lombok.*;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


@Builder
@AllArgsConstructor
@Entity
@Data
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long post_id;

    @Column
    private String title;
    @Column
    private String contents;

    @ManyToOne(fetch = FetchType.LAZY, targetEntity = User.class)
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY, targetEntity = Emotion.class)
    @JoinColumn(name = "emotion_id", referencedColumnName = "emotion_id")
    private Emotion emotion;

    @CreatedDate
    private LocalDateTime createDate;

    @UpdateTimestamp
    private Timestamp lastUpdate;

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
