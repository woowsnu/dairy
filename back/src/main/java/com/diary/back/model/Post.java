package com.diary.back.model;


import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDate;


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

    private Long user_id;
    private LocalDate post_date;
    private String post_text;


}
