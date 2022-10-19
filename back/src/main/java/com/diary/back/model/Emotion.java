package com.diary.back.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;

@Builder
@AllArgsConstructor
@Entity
@Data
public class Emotion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long emotion_id;

    @Column(nullable = false, unique = true)
    private Long categoryId;

    @Column(nullable = false, unique = true)
    private String word;

    @Column
    private float wordFrequency;    // 빈도(Frequency)

    @Column
    private float wordStrengthM;        // 감정 강도 평균(Mean)

    @Column
    private float wordSTD;      // 감정 강도 표준편차(STD)

}
