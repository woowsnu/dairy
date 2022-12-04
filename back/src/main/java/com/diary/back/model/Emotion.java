package com.diary.back.model;

import lombok.*;

import javax.persistence.*;

@Builder
@AllArgsConstructor
@Entity
@Setter
@Getter
@NoArgsConstructor
public class Emotion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "emotionId")
    protected Long emotionId;

    @Column(nullable = false)
    protected Long categoryId;

    @Column(nullable = false, unique = true)
    protected String word;

    @Column
    protected float wordFrequency;    // 빈도(Frequency)

    @Column
    protected float wordStrengthM;        // 감정 강도 평균(Mean)

    @Column
    protected float wordSTD;      // 감정 강도 표준편차(STD)

}
