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
public class EmotionCategory {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long emotion_cat_id;

    private String emotion_cat_name;
    private String emotion_cat_color;
}
