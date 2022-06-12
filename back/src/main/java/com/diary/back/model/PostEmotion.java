package com.diary.back.model;


import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Builder
@RequiredArgsConstructor
@AllArgsConstructor
@Setter @Getter
@Entity
@ToString
public class PostEmotion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long post_emotion_id;

    private Long post_id;
    private String emotion_word;
    private Long emotion_word_id;
    private Long emotion_cat_id;
}
