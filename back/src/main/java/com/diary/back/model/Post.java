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
    private Long post_id;

    @ManyToOne
    @JoinColumn(name="user_id")
    private Long user_id;
    private LocalDate post_date;
    private String post_text;

    

//    @OneToMany
//    @JoinTable(name = "PostPostEmotion", joinColumns = @JoinColumn(name = "post_id"),
//    inverseJoinColumns = @JoinColumn(name="PostEmotion_id"))
//    private List<PostEmotion> postemotions = new ArrayList<>();

//    private PostPostEmotion postPostEmotion;
//    private List<PostPostEmotion> Post_PostEmotion = new ArrayList<>();
}
