package com.diary.back.model;


import lombok.*;

import javax.persistence.*;

@Builder
@RequiredArgsConstructor
@AllArgsConstructor
@Setter @Getter
@Entity
@ToString
public class PostEmotion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long post_emotion_id;
    @ManyToOne(fetch = FetchType.LAZY, targetEntity = Post.class)
    @JoinColumn(name="post_id")
    private Long post_id;
//    @ManyToOne(fetch = FetchType.LAZY, targetEntity = Emotion.class)
//    @JoinColumn(name="emotion_word")
//    private String emotion_word; //emotion_word 설정하면 sql에서 bigint로 생성시킴 왜 그런지 모르겠음 Emotion에서 두개 참조해서 그런건지? 그래서 emotion_word쓰려면 그냥 join해야됨
    @ManyToOne(fetch = FetchType.LAZY, targetEntity = Emotion.class)
    @JoinColumn(name="emotion_word_id")
    private Long emotion_word_id;
    @ManyToOne(fetch = FetchType.LAZY, targetEntity = EmotionCategory.class)
    @JoinColumn(name="emotion_cat_id")
    private Long emotion_cat_id;

//    @ManyToOne//(optional=false)
//    @JoinTable(name = "Post_id", joinColumns = @JoinColumn(name = "POST_EMOTION_ID"), inverseJoinColumns = @JoinColumn(name = "POST_ID"))
//    private Post posts;

}
