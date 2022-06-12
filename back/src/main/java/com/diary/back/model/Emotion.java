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
public class Emotion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long emotion_word_id;

    private String emotion_word;
    private int emotion_cat_frequency;
    private int emotion_cat_average;
    private int emotion_cat_sd;
    private Long emotion_cat_id;


}
