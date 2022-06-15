package com.diary.back.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

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

    @OneToMany(mappedBy = "emotionCategory")
    private List<Emotion> emotionList = new ArrayList<>();


}

