package com.diary.back.model;


import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


@Builder
@RequiredArgsConstructor
@AllArgsConstructor
@Setter @Getter
@Entity
@ToString
public class Post {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "post_id")
    private Long post_id;

    @ManyToOne(fetch = FetchType.LAZY, targetEntity = User.class)
    @JoinColumn(name = "user_id", referencedColumnName = "user_id", foreignKey = @ForeignKey(name = "user_id", foreignKeyDefinition = "FOREIGN KEY(user_id) REFERENCES USER(user_id) ON UPDATE CASCADE ON DELETE CASCADE"))
    private Long user_id;
    private LocalDate post_date;
    private String post_text;
    private String post_text_summary;

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
